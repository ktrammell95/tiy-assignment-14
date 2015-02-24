var App = (function() {
  function App(data) {
    this.data = data;

    this.$content = $(".content");
    this.$sidebar= $(".sidebar");
    this.$main = $(".main");
    this.$full = $(".full");

    // this.showAlbumCollection();
    this.showAlbumSidebar();
    this.showPhotoThumbs();
    // this.showFullPhotos();
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
        album.description = photo.description;
        album.photo = photo.photo;
      });  

      return albumData;
    },

    showAlbumCollection: function() {
      var albumData = this.getAlbumCollection();
      var albumCollection = new AlbumCollection(albumData);
      this.$content.html( albumCollection.render() );
    },

//--- Sidebar - this is where the list is created
    showAlbumSidebar: function() {
        var albums = this.getAlbumCollection();
        var albumList = new AlbumGroupsList(albums);
        this.$sidebar.append(albumList.render());
    },

//--Photo Thumbs inside album
    getPhotoThumbs:function() {
      var photoThumb = _.chain(this.data)
      .pluck("photo")
      .uniq()
      .map(function(photoThumb) {
        return {photo: photoThumb}
      })
      .value();

      var app = this;
        _.each(photoThumb, function(photo) {
          var photoThumb = photo.description;
          var photoDesc = _.find(this.data, function(photo){
            return photo.description === photoThumb;
            console.log("photoThumb " + photoThumb)
          });
          // photo.description = photo.description;
          // photo.photo = photo.photo;
        });
        return photoThumb;
      },

    showPhotoThumbs: function(photo) {
        var photos = this.getPhotoThumbs();
        var photoCollection = new PhotoCollection(photos);
        this.$main.html( photoCollection.render() );
    },  

  

    

// ----Individual image

    // getFullPhoto: function() {
    

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
        app.showAlbumSidebar(albumNames);
      });
      
//This needs to let me click on album name in sidebar
//to get album photo thumbs
      
      this.$sidebar.on("click", "sidebar-nav", function(e){
        e.preventDefault();
        $clicked = $(e.currentTarget);
        var photoThumb = $clicked.data("photo-thumb");
        $(".main").html(app.showPhotoThumbs)
        app.showAlbumSidebar(showPhotoThumbs);
      });

      // this.$main.on("click", ".photo-thumb a", function(e){
      //   e.preventDefault();
      //   $clicked = $(e.currentTarget);
      //   var fullPhoto = $clicked.data("photo_id");
      //   app.showFullPhotos(app.fullPhoto);
      // });

     } 
  };

  return App;
  
})();