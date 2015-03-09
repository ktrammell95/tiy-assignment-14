//This is the page for just one single picture

var PhotoFull = (function(){

  var template = JST["full-photo"];

  function PhotoFull(data) {
    this.data = data;
  }

  PhotoFull.prototype = {
    render: function() {
      return $( template(this.data) );
    },
  }
  return PhotoFull;
  // console.log(PhotoFull)

})();