var PhotoCollection = (function () {
  var template = JST["photo-collection"];

  function PhotoCollection(data) {
  this.data = data;
  }

  PhotoCollection.prototype = {
    render: function() {
      var $el = $( template() );
      var $ul = $el.find("ul");

      _.each(this.data, function(photo) {
        var thumbnail = new PhotoThumbNail(photo)
        $ul.append( thumbnail.render() );
      });
      return $el;
    }
  };

  return PhotoCollection;

})();

// var PhotoCollectionList = (function(){

//   function PhotoCollectionList(data) {
//     this.data = data;
//     this.$el = $("<ul />");
//   }

//   PhotoCollectionList.prototype = {
//     select: function(photoId) {
//       this.$el.find("li").removeClass("active");
//       this.$el
//         .find("li[data-group-name='"+ photoId +"']")
//         .addClass("active");
//     },

//     render: function() {
//       var $el = this.$el;

//       var photoCollection = new PhotoCollection();
//       $el.append( group.render() );

//       _.each(this.data, function(groupData){

//         var group = new PhotoCollection(groupData);
//         $el.append( group.render() );

//       });

//       return $el;
//     }
//   }

//   return PhotoCollectionList;

// })();