//This is the view with the sidebar of albums &
//the thumbnails for the images in the album


//sidebar
var AlbumGroups = (function(){

  var template = JST["album-groups"];

  function AlbumGroups(data) {
    this.data = data;
  }

  AlbumGroups.prototype = {

    render: function() {
      return $( template(this.data) );
    }

  }

  return AlbumGroups;

})();


var AlbumGroupsList = (function(){

  function AlbumGroupsList(data) {
    this.data = data;
    this.$el = $("<ul />");
  }

  AlbumGroupsList.prototype = {
    select: function(groupName) {
      this.$el.find("li").removeClass("active");
      this.$el
        .find("li[data-group-name='"+ albumName +"']")
        .addClass("active");
    },

    render: function() {
      var $el = this.$el;

      var group = new AlbumGroups({name: "all"});
      $el.append( group.render() );

      _.each(this.data, function(groupData){

        var group = new AlbumGroups(groupData);
        $el.append( group.render() );

      });

      return $el;
    }
  }

  return AlbumGroupsList;

})();



