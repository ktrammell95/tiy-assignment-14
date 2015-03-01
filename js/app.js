var App = (function() {
  function App(data) {
    this.data = data;

    this.$sidebar= $(".sidebar");
    this.$main = $(".main");
    this.$body = $("body");


    this.showAlbumCollection();
    this.showAlbumSidebar();
    // this.showPhotoThumbs();
    // this.showFullPhotos();
    this.albumsListener();
    this.sidebarListener();
    this.photoListener();
    this.backButtonListener();
    this.$sidebar.hide();
  }

  App.prototype = {

//----First Screen

    getAlbumCollection: function() {

      var albumData= _.chain(this.data)
      .pluck("album_name")
      .uniq()
      .map(function(albumName){
        // console.log(albumName)
        return {album_name: albumName};

      })
      .value();

      //This bring in album picture
      var app = this;
      _.each(albumData, function(album) {
        var albumName = album.album_name;

//this pulls one photo from each album for thumbnail
        var photo = _.find(app.data, function(photo){
          return photo.album_name === albumName;
        });
        album.photo = photo.photo;
      });  

      return albumData;
    },

    showAlbumCollection: function() {
      var albums = this.getAlbumCollection();
      var albumCollection = new AlbumCollection(albums);
      this.$main.html( albumCollection.render() );
      this.$sidebar.hide();
    },

//--- Sidebar - this is where the list is created
    getAlbumCollection: function() {

      var albumData= _.chain(this.data)
      .pluck("album_name")
      .uniq()
      .map(function(albumName){
        // console.log(albumName)
        return {album_name: albumName};

      })
      .value();

      //This bring in album picture
      var app = this;
      _.each(albumData, function(album) {
        var albumName = album.album_name;

//this pulls one photo from each album for thumbnail
        var photo = _.find(app.data, function(photo){
          return photo.album_name === albumName;
        });
        album.photo = photo.photo;
      });  

      return albumData;
    },
    
    showAlbumSidebar: function() {
      var albums = this.getAlbumCollection();
      var sidebarAlbumList = new AlbumGroupsList(albums);
      this.$sidebar.append(sidebarAlbumList.render());
    },

//--Photo Thumbs inside album


    showPhotoThumbs: function(photo) {
      var photoCollection = new PhotoCollection(photo);
      this.$main.html( photoCollection.render() );
      this.$sidebar.show();
    },  

// ----Individual image

    showFullPhoto: function() {
      this.photoFull = new PhotoFull(photo);
      this.$body.prepend(this.photoFull.render());

    },

 //Listeners make clicking work
    
    albumsListener: function() {
      var app = this;

//This needs to let me click on album thumb 
//to get sidebar & photo thumbs

      this.$main.on("click", ".thumbBox a", function(e){
        e.preventDefault();
        var $clickedAlbum = $(e.currentTarget);
  
        var currentAlbum = $clickedAlbum.data("album-name");

        var currentAlbumPics = _.filter(app.data, function(photo) {
          return photo.album_name === currentAlbum;
        });
        console.log(currentAlbumPics);
        app.showPhotoThumbs(currentAlbumPics);
      });
    },
      
//This needs to let me click on album name in sidebar
//to get album photo thumbs
    sidebarListener: function() {
      var app = this;

        this.$sidebar.on("click", "sidebar-nav", function(event) {
        event.preventDefault();
        var $clickedNav = $(e.currentTarget);

        $("sidebar-nav").removeClass("active");
        $clickedNav.addClass("active");

        var currentAlbum = $clickedNav.data("album-name");
        if (currentAlbum === "all") {
          app.showAlbumCollection();
          app.albumsListener();
            return;
          }
        

        var currentAlbumPhotos = _.filter(app.data, function(photo) {
            return photo.album_name === currentAlbum;
        });

        console.log(currentAlbumPhotos);
        app.showPhotoThumbs(currentAlbumPhotos);
        // app.photoListener();

        });
    },

    photoListener: function() {
      var app = this;

      this.$main.on("click", ".photo-thumb a", function(e){
        var $clickedPhoto = $(event.currentTarget);
        console.log($clickedPhoto);

        var currentPhotoId = $clickedPhoto.data("photo-id");
        console.log(currentPhotoId);

        var currentPhoto = _.find(app.data, function(photo){
            return photo.photo_id === currentPhotoId;
        });

        app.currentPhoto = currentPhoto;
        console.log(currentPhoto);

        app.showFullPhoto(currentPhoto);
        // app.backButtonListener();
        });
    },
       
   backButtonListener: function() {
      var app = this;

      $(".back-btn").on("click", function(event) {
          event.preventDefault();
          $(".full-photo").remove();

      });

    } 
  };

  return App;
  
})();