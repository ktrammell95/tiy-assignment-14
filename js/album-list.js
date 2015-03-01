//This is the view without the sidebar 

var AlbumGroups = (function(){

  var template = JST["album-list"];

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



