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