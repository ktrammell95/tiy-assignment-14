// This is the template for the album categories where an image for each album shows up on the page
// No side bar

var AlbumCollection = (function () {
  var template = JST["album-collection"];

  function AlbumCollection(data) {
  this.data = data;
  }

  AlbumCollection.prototype = {
    render: function() {
      var $el = $( template() );
      var $ul = $el.find("ul");

      _.each(this.data, function(album) {
        var thumbnail = new AlbumThumbNail(album)
        $ul.append( thumbnail.render() );
      });
      return $el;
    }
  };

  return AlbumCollection;

})();