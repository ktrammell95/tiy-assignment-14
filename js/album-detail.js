//This is the view with the sidebar of albums &
//the thumbnails for the images in the album


//sidebar
var AlbumDetails = (function(){

  var template = JST["side-buttons"];

  function AlbumDetails(data) {
    this.data = data;
  }

  AlbumDetails.prototype = {

    render: function() {
      return $( template(this.data) );
    }

  }

  return AlbumDetails;

})();


var AlbumDetailsList = (function(){

  function AlbumDetailList(data) {
    this.data = data;
    this.$el = $("<ul />");
  }

  AlbumDetailsList.prototype = {
    select: function(groupName) {
      this.$el.find("li").removeClass("active");
      this.$el
        .find("li[data-group-name='"+ albumName +"']")
        .addClass("active");
    },

    render: function() {
      var $el = this.$el;

      var group = new AlbumDetails({name: "all"});
      $el.append( group.render() );

      _.each(this.data, function(groupData){

        var group = new AlbumDetails(groupData);
        $el.append( group.render() );

      });

      return $el;
    }
  }

  return AlbumDetailsList;

})();



