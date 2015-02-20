$(function(){
  $.ajax("images.json", {
    success: function(data) {
      // console.log(data)
      window.app = new App(data);
    },
    error: function() {
      console.log("failed to load images.json");
    }
  });
});

