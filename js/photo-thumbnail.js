var PhotoThumbNail = (function () {
  var template = JST["photo-thumbnail"];

  function PhotoThumbNail(data) {
  this.data = data;
  }

  PhotoThumbNail.prototype = {
    render: function() {
      return $( template(this.data) );
    }
  }

  return PhotoThumbNail

})();
