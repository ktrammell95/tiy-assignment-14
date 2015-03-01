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
            var $photoTemplate = $(template(this.data[0]));
            var $main = $photoTemplate.find(".photo-collection");
            _.each(this.data, function(photo){
                var photo = new PhotoThumbNail(photo);
                $main.append(photo.render());
            });
            return $photoTemplate;
        }
    }; 

  return PhotoCollection;

})();

