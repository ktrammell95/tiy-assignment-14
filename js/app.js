var App = (function() {
  function App(data) {
    this.data = data;

    this.$sidebar= $(".sidebar");
    this.$main = $(".main");
    // this.$body = $("body");


    this.showAlbumCollection();
    this.showAlbumSidebar();
    // this.showPhotoThumbs();
    // this.showFullPhoto();
    this.albumsListener();
    this.$sidebar.hide();
  }

  App.prototype = {

//----First Screen

    getAlbumCollection: function() {
      var app = this;

      var albumData= _.chain(app.data)
      .pluck("album_name")
      .uniq()
      .map(function(albumName){
        // console.log(albumName)
        return {album_name: albumName};

      })
      .value();

      //This bring in album picture
      _.each(albumData, function(album) {
        var albumName = album.album_name;

//this pulls one photo from each album for thumbnail
        var photo = _.find(app.data, function(photo){
          return photo.album_name === albumName;
        });
        album.photo_img = photo.photo_img;
      });  
      // console.log(albumData)
      return albumData;
    },

    showAlbumCollection: function() {
      var albums = this.getAlbumCollection();
      var albumCollection = new AlbumCollection(albums);
      // console.log(albums)
      // console.log("albumCollection: " + albumCollection)
      this.$main.html( albumCollection.render() );
      this.$sidebar.hide();
    },

//--- Sidebar - this is where the list is created

    showAlbumSidebar: function() {
      var albums = this.getAlbumCollection();
      var sidebarAlbumList = new AlbumGroupsList(albums);
      // console.log(albums)
      this.$sidebar.append(sidebarAlbumList.render());
    },

//--Photo Thumbs inside album

    showPhotoThumbs: function(photo) {
      var photoCollection = new PhotoCollection(photo);
      this.$main.html( photoCollection.render() );
      this.$sidebar.show();
    },  

// ----Individual image

    showFullPhoto: function(photoId) {
      var photoData = _.find(this.data, function(photo) {
        return photo.photo_id === photoId;
      });
      var photoFull = new PhotoFull(photoData);
      this.$main.html( photoFull.render());
      // console. log(photoFull);

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
        app.showPhotoThumbs(currentAlbumPics);
        console.log(currentAlbumPics)

      }),

      this.$sidebar.on("click", ".sidebar-nav a", function(e){
        e.preventDefault();
        var $clickedAlbum = $(e.currentTarget);
  
        var currentAlbum = $clickedAlbum.data("album-name");

        var currentAlbumPics = _.filter(app.data, function(photo) {
          return photo.album_name === currentAlbum;
        });
        app.showPhotoThumbs(currentAlbumPics);
        console.log(currentAlbumPics)

      }),

      this.$main.on("click", ".photoThumb a", function(e){
        e.preventDefault();
        $clicked = $(e.currentTarget);
        var photoId = $clicked.data("photo-id");
        app.showFullPhoto(photoId);
        console.log(photoId)

      }),

      this.$main.on("click", ".back-btn a", function(e){
        e.preventDefault();
        var $clicked = $(e.currentTarget);
  
        var currentAlbum = $clicked.data("album-name");

        var currentAlbumPics = _.filter(app.data, function(photo) {
          return photo.album_name === currentAlbum;
        });
        app.showPhotoThumbs(currentAlbumPics);
        console.log(currentAlbumPics)

      });

    },

  };

  return App;
  
})();