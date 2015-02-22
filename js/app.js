var App = (function() {
  function App(data) {
    this.data = data;

    this.$sidebar= $(".sidebar");
    this.$main = $(".main");

    // this.showAlbums();
    // this.showAlbumNames();
    this.showPhotos();
    // this.addListeners();
  }

  App.prototype = {

//----First Screen

    getAlbumData: function() {
      var albumData= _.chain(this.data)
      .pluck("album")
      .uniq()
      .map(function(albumName){
        console.log(albumName)
        return {album: albumName};

      })
      .value();

      var app = this;
      _.each(albumData, function(album) {
        var albumName = album.album;

        var photo = _.find(app.data, function(photo){
          return photo.album === albumName;
        });
        album.description = photo.description;
        album.photo = photo.photo;
      });
            console.log(albumData)
      return albumData;
            
    },
    showAlbums: function() {
      var albumData = this.getAlbumData();
      var collection = new AlbumCollection(albumData);

      $("body").html( collection.render() );

    },

//--- Sidebar - this is where the list is created

    getAlbumNames:function() {
      var albumNames= _.chain(this.data)
      .pluck("album")
      .uniq()
      .map(function(albumNames) {
            console.log(albumNames)
        return {album: albumNames}
            
      })
      .value();

      var app = this;
      _.each(albumNames, function(album) {
        var albumNames = album.album;
        });
          console.log(albumNames)
      return albumNames;
            
    },

    showAlbumNames: function(album) {
     var albumData = this.getAlbumNames();
      this.albumGroupsList = new AlbumGroupsList(albumData);
      this.$sidebar.html( this.albumGroupsList.render() );
    },
    // makes list with all
    getAlbum: function(albumName) {
      if(albumName === "all") {
        return this.data;
      }
      return _.filter(this.data, function(album){
        return album.album === albumName;
              console.log(getAlbum)
      });
    },

//Images within album that goes with sidebar

    getPhotos: function() {
      var photoThumb= _.chain(this.data)
      .pluck("photo")
      .uniq()
      .map(function(photoThumb){
        // console.log(photoThumbs)
        return {photo: photoThumb};

      })
      .value();

      var app = this;
      _.each(photoThumb, function(photo) {
        var photoName = photo.photo;
        // console.log(photoName)
        var photoId = _.find(app.data, function(photo){
          return photo.description === photoName;
          console.log(photoName)
        });
        photo.description = photo.description;
        photo.photo = photo.photo;
      });
            console.log(photoThumb)
      return photoThumb;
            
    },
    showPhotos: function() {
      var photoData = this.getPhotos();
      var collection = new PhotoCollection(photoData);

      $(".main").html( collection.render() );

    },

//Individual image

    // zoomPhoto: function(photoId) {
    //   var photoData = _.find(this.data, function(album) {
    //     return album.photo_id === photoId;
    //   });

    //   var photo = new PhotoFull(photoData);

    //   this.$main.html( photo.render() );
    // },

    // addListeners: function() {
    //   var app = this;

  //     this.$main.on("click", ".thumbBox", function(e){
  //       e.preventDefault();
  //       $clicked = $(e.currentTarget);
  //       var indAlbum = $clicked.data("pic-box");
  //       app.showPhotos(indAlbum);
  //     });





  //     this.$sidebar.on("click", "li", function(e){
  //       e.preventDefault();
  //       $clicked = $(e.currentTarget);
  //       var albumName = $clicked.data("group-name");
  //       app.showPhotos(albumName);
  //     });
  //   }
  };

  return App;
  
})();