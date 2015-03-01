// This is the 1st view of all albums on one page

var AlbumThumbNail = (function () {
  var template = JST["album-thumbnail"];

  function AlbumThumbNail(data) {
  this.data = data;
  }

  AlbumThumbNail.prototype = {
    render: function() {
      return $( template(this.data) );
    }
  }

  return AlbumThumbNail

})();


var AlbumCollection = (function () {
  var template = JST["album-collection"];

  function AlbumCollection(data) {
  this.data = data;
  }

  AlbumCollection.prototype = {
    render: function() {
      var $el = $( template() );
      var $list = $el.find("ul");

      _.each(this.data, function(album) {
        var thumbnail = new AlbumThumbNail(album)
        $list.append( thumbnail.render() );
      });
      return $el;
    }
  };

  return AlbumCollection;

})();