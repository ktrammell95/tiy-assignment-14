var gulp       = require("gulp");
var handlebars = require("gulp-handlebars");
var wrap       = require("gulp-wrap");
var declare    = require("gulp-declare");
var concat     = require("gulp-concat");
var less       = require("gulp-less");

var templatePath = "./js/templates/**/*.hbs";
var lessPath     = "./less/**/*.less";

gulp.task("templates", function(){
  gulp.src(templatePath)
    .pipe(handlebars())
    .pipe(wrap("Handlebars.template(<%= contents %>)"))//capital H?
    .pipe(declare({ namespace: "JST" }))
    .pipe(concat("templates.js"))
    .pipe(gulp.dest("./js/"));
});

gulp.task("less", function() {
  gulp.src(lessPath)
    .pipe(less())
    .pipe(gulp.dest("./css"));
})

gulp.task("watch", function() {
  gulp.watch(templatePath, ["templates"]);
  gulp.watch(lessPath, ["less"]);
});