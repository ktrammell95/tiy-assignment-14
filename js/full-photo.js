//This is the page for just one single picture

var PhotoFull = (function(){

  var template = JST["full-photo"];

  function PhotoFull(data) {
    this.data = data;
  }

  PhotoFull.prototype = {
    render: function() {
      return $( template(this.renderData()) );
    },

    renderData: function() {
      var defaultPhoto = "images/user-default1.jpg";
      var data = _.clone(this.data);
      if (!data.photo) {
        data.photo = defaultPhoto;
      }
      return data;
    }
  }

  return PhotoFull;

})();