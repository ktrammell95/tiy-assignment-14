var App = (function() {
  function App(data) {
    this.data = data;

    this.$content = $(".content");
    this.$sidebar= $(".sidebar");
    this.$main = $(".main");
    this.$full = $(".full");

    this.showAlbumCollection();
    this.showAlbumSidebar();
    this.showPhotoThumbs();
    this.showFullPhotos();
    this.addListeners();
  }

  App.prototype = {

//----First Screen

    getAlbumCollection: function() {
      var albumData= _.chain(this.data)
      .pluck("album")
      .uniq()
      .map(function(albumName){
        console.log(albumName)
        return {album: albumName};

      })
      .value();
      //This bring in album picture
      var app = this;
      _.each(albumData, function(album) {
        var albumName = album.album;

        var photo = _.find(app.data, function(photo){
          return photo.album === albumName;
        });
        // photo.album = photo.photo;
        album.photo = photo.photo;
      });
            // console.log(albumData)
      return albumData;
            
    },
    showAlbumCollection: function() {
      var albumData = this.getAlbumCollection();
      var albumCollection = new AlbumCollection(albumData);
      this.$content.html( albumCollection.render() );
    },

//--- Sidebar - this is where the list is created

    getAlbumSidebar:function() {
      var albumNamesSidebar = _.chain(this.data)
      .pluck("album")
      .uniq()
      .map(function(albumNamesSidebar) {
        // console.log(albumNamesSidebar)
        return {album: albumNamesSidebar}
      })
      .value();

      var app = this;
      _.each(albumNamesSidebar, function(album) {
        var albumNamesSidebar = album.album;
        });
          console.log(albumNamesSidebar)
      return albumNamesSidebar; 
    },

    showAlbumSidebar: function() {
     var albumData = this.getAlbumSidebar();
      this.albumGroupsList = new AlbumGroupsList(albumData);
      this.$sidebar.html( this.albumGroupsList.render() );

    },

//--Photo Thumbs inside album
    getPhotoThumbs: function() {
      var photoThumb= _.chain(this.data)
      .pluck("photo")
      .uniq()
      .map(function(photoThumb){
        return {photo: photoThumb};

      })
      .value();

      var app = this;
            _.each(photoThumb, function(photo) {
              var photoThumb = photo.photo;
              var photoDesc = _.find(this.data, function(photo){
                return photo.photo === photoThumb;
              });
              // photo.description = photo.description;
              // photo.photo = photo.photo;
            });
            return photoThumb;
      },

    getPhotoAlbum: function(photoThumb) {
    // if(photoThumb === "all") {
    //   return this.data;
    // }
    return _.filter(this.data, function(photo){
      return photo.photo === photoThumb;
            // console.log(getPhotoAlbum)
    });
  },
    showPhotoThumbs: function(photoThumb) {
      var photoData = this.getPhotoThumbs(photoThumb);
      var photoCollection = new PhotoCollection(photoData);

      $(".main").html( photoCollection.render() );
  },

// ----Individual image

    // getFullPhoto: function() {
    //   var photoId = _.chain(this.data)
    //   .pluck("photo_id")
    //   .uniq()
    //   .map(function(photoId){
    //     return {photo: photoId};

    //   })
    //   .value();

    //   var app = this;
    //         _.each(photoId, function(photo_id) {
    //           var photoName = photo_id.name;
    //           // console.log(photoName)
    //           var photoInfo = _.find(app.data, function(photo_id){
    //             return photo_id.description === photoName;
    //             // console.log(photoName)
    //           });
    //           // photo.description = photo.description;
    //           photo_id.photo = photo_id.photo;
    //         });
    //               // console.log(photoId)
    //         return photoId;
    //   },
    //   showFullPhotos: function(photoId) {
    //     var photoFullData = _.find(this.data, function(photo) {
    //     return photo.photo_id === photoId;
    //   });

    //   var indPhoto = new PhotoFull(photoFullData);

    //   this.$full.html( indPhoto.render() );

      // var photoFullData = this.getFullPhoto();
      // var indPhoto = new PhotoFull(photoFullData);

      // $(".full").html( indPhoto.render() );



    // },

 //Listeners make clicking work
    
    addListeners: function() {
      var app = this;

//This needs to let me click on album thumb 
//to get sidebar & photo thumbs

      this.$content.on("click", ".thumbBox a", function(e){
        e.preventDefault();
        $clicked = $(e.currentTarget);
        var albumNames = $clicked.data("ind-album");
        console.log(albumNames)
        app.showPhotos(albumNames);
      });
//This needs to let me click on album name in sidebar
//to get album photo thumbs
      
      this.$sidebar.on("click", "li", function(e){
        e.preventDefault();
        $clicked = $(e.currentTarget);
        var photoThumb = $clicked.data("album-list");
        app.showPhotoThumbs(photoThumb);
      });

      this.$main.on("click", ".photo-thumb a", function(e){
        e.preventDefault();
        $clicked = $(e.currentTarget);
        var fullPhoto = $clicked.data("photo_id");
        app.showFullPhotos(app.fullPhoto);
      });

     } 
  };

  return App;
  
})();