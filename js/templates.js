this["JST"] = this["JST"] || {};
this["JST"]["ind-photos"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"photo-full\">\n  <a href=\"#\">Back to Albums</a>\n  <div class=\"photo\">\n    <img src=\""
    + escapeExpression(((helper = (helper = helpers.photo || (depth0 != null ? depth0.photo : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n  </div>\n</div>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["photo-albums"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"photo-albums\">\n   <h1>My Albums</h1>\n   <ul></ul>\n</div>";
  },"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["side-buttons"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<li data-group-name=\""
    + escapeExpression(((helper = (helper = helpers.album || (depth0 != null ? depth0.album : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.album || (depth0 != null ? depth0.album : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["thumbnail"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<li>\n  <div class=\"thumb-box\">\n    <div class=\"sample-photo\">\n      <img width=\"300\" src=\""
    + escapeExpression(((helper = (helper = helpers.photo || (depth0 != null ? depth0.photo : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n    <div class=\"album-name\"><a href=\"#\" data-album-id="
    + escapeExpression(((helper = (helper = helpers.album || (depth0 != null ? depth0.album : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album","hash":{},"data":data}) : helper)))
    + "> "
    + escapeExpression(((helper = (helper = helpers.album || (depth0 != null ? depth0.album : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album","hash":{},"data":data}) : helper)))
    + " </a>\n    </div>\n  </div>\n</li>";
},"useData":true});