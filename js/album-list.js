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
    var $el = $("<ul />");

  function AlbumGroupsList(data) {
    this.data = data;
    
  };

  AlbumGroupsList.prototype = {
   
    render: function() { 
      $el.empty(); 
      $el.append("<li><a href='#'' data-name='all'>All</a></li>")    

      _.each(this.data, function(album){
        var group = new AlbumGroups(album);
        $el.append( group.render() );

      });

      return $el;
    }
  };

  return AlbumGroupsList;

})();



