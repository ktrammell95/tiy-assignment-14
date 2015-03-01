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
    // this.sidebarListener();
    // this.photoListener();
    // this.backButtonListener();
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

    // getPhotos: function() {
    //    var photoThumb= _.chain(this.data)
    //    .pluck("photo_img")
    //    .uniq()
    //    .map(function(photoThumb){
    //      // console.log(photoThumbs)
    //      return {photo: photoThumb};
 
    //    })
    //    .value();
 
    //    var app = this;
    //    _.each(photoThumb, function(photo) {
    //      var photoName = photo.photo_id;
    //      // console.log(photoName)
    //      var photoId = _.find(app.data, function(photo){
    //        return photo.description === photoName;
    //        console.log(photoName)
    //      });
    //      photo.description = photo.description;
    //      photo.photo = photo.photo;
    //    });
    //          console.log(photoThumb)
    //    return photoThumb;
             
    //  },

    showPhotoThumbs: function(photo) {
      // var albums = this.getAlbumCollection();
        // _.filter(this.data, function(album_name){
          var photoCollection = new PhotoCollection(photo);
          console.log(photoCollection)
          this.$main.append( photoCollection.render() );
          this.$sidebar.show();

        // })
    },  

// ----Individual image

    showFullPhoto: function() {
      this.photoFull = new PhotoFull(photo);
      this.$main.append(this.photoFull.render());

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
        // app.sidebarListener();
        // app.photoListener();
      });
    },
      
//This needs to let me click on album name in sidebar
//to get album photo thumbs
    // sidebarListener: function() {
    //   var app = this;

    //     this.$sidebar.on("click", "sidebar-nav a", function(e) {
    //     e.preventDefault();
    //     var $clickedNav = $(e.currentTarget);

    //     // $("sidebar-nav a").removeClass("active");
    //     // $clickedNav.addClass("active");

    //     var currentAlbum = $clickedNav.data("album-name");
    //     if (currentAlbum === "all") {
    //       app.showAlbumCollection();
    //       app.albumsListener();
    //         return;
    //       }
        
    //     var currentAlbumPhotos = _.filter(app.data, function(photo) {
    //         return photo.album_name === currentAlbum;
    //     });

    //     console.log(currentAlbumPhotos);
    //     app.showPhotoThumbs(currentAlbumPhotos);
    //     app.photoListener();

    //     });
    // },
//this needs to let me click on ind photo to get full photo in screen
    // photoListener: function() {
    //   var app = this;

    //   this.$main.on("click", ".photo-thumb a", function(e){
    //     var $clickedPhoto = $(e.currentTarget);
    //     console.log($clickedPhoto);

    //     var currentPhotoId = $clickedPhoto.data("photo-id");
    //     console.log(currentPhotoId);

    //     var currentPhoto = _.find(app.data, function(photo){
    //         return photo.photo_id === currentPhotoId;
    //     });

    //     app.currentPhoto = currentPhoto;
    //     console.log(currentPhoto);

    //     app.showFullPhoto(currentPhoto);
    //     app.backButtonListener();
    //     });
    // },
   //this needs to let me click back button to go back to photos in album    
   // backButtonListener: function() {
   //    var app = this;

   //    $(".back-btn").on("click", function(e) {
   //        e.preventDefault();
   //        $(".full-photo").remove();

   //    });

   //  } 
  };

  return App;
  
})();