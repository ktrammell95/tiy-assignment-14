var App = (function() {
  function App(data) {
    this.data = data;
    this.showAlbums();
  }

  App.prototype = {
    getAlbumData: function() {
      var albumData= _.chain(this.data)
      .pluck("album")
      .uniq()
      .map(function(albumName){
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
      return albumData;
    },
    showAlbums: function() {
      var albumData = this.getAlbumData();
      var collection = new PhotoAlbums(albumData);

      $("body").html( collection.render() );

    },
    showAlbum: function(album) {

    },
    zoomPhoto: function(photo) {

    },

  };

  return App;
  
})();