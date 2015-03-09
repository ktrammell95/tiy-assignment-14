this["JST"] = this["JST"] || {};
this["JST"]["album-collection"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n<div class=\"album-collection\">\n   <h1>My Albums</h1>\n   <ul></ul>\n</div>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["album-list"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n<li class=\"sidebar-nav\">\n  <a href=\"#\" data-album-name=\""
    + escapeExpression(((helper = (helper = helpers.album_name || (depth0 != null ? depth0.album_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album_name","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.album_name || (depth0 != null ? depth0.album_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album_name","hash":{},"data":data}) : helper)))
    + "</a>\n</li>\n\n\n";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["album-thumbnail"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " \n<li>\n  <div class=\"thumbBox\" >\n    <a href=\"#\" data-album-name=\""
    + escapeExpression(((helper = (helper = helpers.album_name || (depth0 != null ? depth0.album_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album_name","hash":{},"data":data}) : helper)))
    + "\">\n      <div>\n        <img src=\""
    + escapeExpression(((helper = (helper = helpers.photo_img || (depth0 != null ? depth0.photo_img : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo_img","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "\">\n      </div>\n      <div class=\"album-name\">"
    + escapeExpression(((helper = (helper = helpers.album_name || (depth0 != null ? depth0.album_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album_name","hash":{},"data":data}) : helper)))
    + "\n      </div>\n    </a>\n  </div>\n</li>\n\n\n    ";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["full-photo"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n<div>\n  <div class=\"fullPhoto\" >\n  <div class=\"back-btn\"><a href=\"#\" data-album-name=\""
    + escapeExpression(((helper = (helper = helpers.album_name || (depth0 != null ? depth0.album_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album_name","hash":{},"data":data}) : helper)))
    + "\">Back to Album</a></div>\n    <img src=\""
    + escapeExpression(((helper = (helper = helpers.photo_img || (depth0 != null ? depth0.photo_img : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo_img","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "\" data-photo-id=\""
    + escapeExpression(((helper = (helper = helpers.photo_id || (depth0 != null ? depth0.photo_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo_id","hash":{},"data":data}) : helper)))
    + "\">\n    <p>"
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n  </div>\n</div>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["photo-collection"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n<div class=\"photo-collection\">\n   <h1>"
    + escapeExpression(((helper = (helper = helpers.album_name || (depth0 != null ? depth0.album_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album_name","hash":{},"data":data}) : helper)))
    + "</h1>\n   <ul></ul>\n</div>\n\n\n\n\n";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["photo-thumbnail"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<li>\n  <div class=\"photoThumb\" data-photo-id=\""
    + escapeExpression(((helper = (helper = helpers.photo_id || (depth0 != null ? depth0.photo_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo_id","hash":{},"data":data}) : helper)))
    + "\" >\n    <a href=\"#\" data-photo-id=\""
    + escapeExpression(((helper = (helper = helpers.photo_id || (depth0 != null ? depth0.photo_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo_id","hash":{},"data":data}) : helper)))
    + "\">\n      <div>\n        <img src=\""
    + escapeExpression(((helper = (helper = helpers.photo_img || (depth0 != null ? depth0.photo_img : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo_img","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "\">\n      </div>\n      <div class=\"photo-name\">"
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "\n      </div>\n    </a>\n  </div>\n</li>";
},"useData":true});