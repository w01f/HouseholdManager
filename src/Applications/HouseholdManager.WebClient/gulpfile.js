/// <binding BeforeBuild='deploy-node-modules, deploy-css' />

var gulp = require('gulp');

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify");

var paths = {
	webroot: "./wwwroot/"
};

paths.nodeModulesSrc = "./node_modules/";
paths.nodeModulesDest = paths.webroot + "nodes/";

gulp.task('default', function () {
	// place code for your default task here
});
gulp.task('deploy:core-js', function () {
	gulp.src([
        paths.nodeModulesSrc + 'core-js/client/*.js'
	]).pipe(gulp.dest(paths.nodeModulesDest + 'core-js'));
});
gulp.task('deploy:zone.js', function () {
	gulp.src([
        paths.nodeModulesSrc + 'zone.js/dist/*.js'
	]).pipe(gulp.dest(paths.nodeModulesDest + 'zone.js'));
});
gulp.task('deploy:reflect-metadata', function () {
	gulp.src([
        paths.nodeModulesSrc + 'reflect-metadata/reflect.js'
	]).pipe(gulp.dest(paths.nodeModulesDest + 'reflect-metadata'));
});
gulp.task('deploy:systemjs', function () {
	gulp.src([
        paths.nodeModulesSrc + 'systemjs/dist/*.js'
	]).pipe(gulp.dest(paths.nodeModulesDest + 'systemjs'));
});
gulp.task('deploy:rxjs', function () {
	gulp.src([
        paths.nodeModulesSrc + 'rxjs/**/*.js'
	]).pipe(gulp.dest(paths.nodeModulesDest + 'rxjs'));
});
gulp.task('deploy:angular-in-memory-web-api', function () {
	gulp.src([
        paths.nodeModulesSrc + 'angular-in-memory-web-api/**/*.js'
	]).pipe(gulp.dest(paths.nodeModulesDest + 'angular-in-memory-web-api'));
});
gulp.task('deploy:angular', function () {
	gulp.src([
        paths.nodeModulesSrc + '@angular/**/*.js'
	]).pipe(gulp.dest(paths.nodeModulesDest + '@angular'));
});
gulp.task('deploy:jquery', function () {
	gulp.src([paths.nodeModulesSrc + 'jquery/dist/**/*.js'])
		.pipe(gulp.dest(paths.nodeModulesDest + 'jquery'));
});
gulp.task('deploy:bootstrap', function () {
	gulp.src([
			paths.nodeModulesSrc + 'bootstrap/dist/**/*.js',
			paths.nodeModulesSrc + 'bootstrap/dist/**/*.css'
	])
		.pipe(gulp.dest(paths.nodeModulesDest + 'bootstrap'));
});

gulp.task('deploy-node-modules', [
    'deploy:core-js',
    'deploy:zone.js',
    'deploy:reflect-metadata',
    'deploy:systemjs',
    'deploy:rxjs',
    'deploy:angular-in-memory-web-api',
    'deploy:angular',
	'deploy:jquery',
	'deploy:bootstrap'
]);

paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";

paths.concatCssDest = paths.webroot + "css/site.min.css";

gulp.task("clean:css", function (cb) {
	rimraf(paths.concatCssDest, cb);
});

gulp.task("min:css", function () {
	return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});