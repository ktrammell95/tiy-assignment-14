var PhotoThumbNail = (function () {
  var template = JST["photo-thumbnail"];

  function PhotoThumbNail(data) {
    this.data = data;
  };

  PhotoThumbNail.prototype = {
    render: function() {
      return $( template(this.data) );
    }
  };

  return PhotoThumbNail

})();


var PhotoCollection = (function () {
  var template = JST["photo-collection"];

  function PhotoCollection(data) {
    this.data = data;
  };

  PhotoCollection.prototype = {
        render: function() {
            var $el = $(template(this.data));
            var $list = $el.find("ul");

            _.filter(this.data, function(album_name){
                var photo = new PhotoThumbNail(album_name);
                $list.append(photo.render());
            });
            // console.log(photo)
            return $el;
        }
    }; 
  return PhotoCollection;
})();