var App = (function() {
  function App(data) {
    this.data = data;

    this.$sidebar= $(".sidebar");
    this.$main = $(".main");
    this.$body = $("body");


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
      // var albums = this.getAlbumCollection();
        // _.filter(this.data, function(album_name){
          var photoCollection = new PhotoCollection(photo);
          this.$main.html( photoCollection.render() );
          this.$sidebar.show();

        // })
    },  

// ----Individual image

    showFullPhoto: function() {
      this.photoFull = new PhotoFull(photo);
      this.$main.html(this.photoFull.render());

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

        console.log($clickedAlbum);

        var currentAlbumPics = _.filter(app.data, function(photo) {
          return photo.album_name === currentAlbum;
        });
        console.log(currentAlbumPics);
        app.showPhotoThumbs(currentAlbumPics);

      });
    },

  };

  return App;
  
})();