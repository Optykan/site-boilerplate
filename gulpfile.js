var fs          = require('fs');
var gulp        = require('gulp');
var child       = require('child_process');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var notify      = require('gulp-notify');
var babel       = require('gulp-babel');
var babelcore   = require('babel-core');
var autoprefixer= require('gulp-autoprefixer');
var browserify  = require('browserify')
var babelify    = require("babelify")

// Static Server + watching scss/html files

gulp.task('server', ['sass'], function() {
	var server = child.spawn('node', ['bin/www']);
	var log = fs.createWriteStream('server.log', {flags: 'a'});
	server.stderr.pipe(log);

	browserSync.init({
		proxy: "localhost:3000",
		port: 3001,
		notify: true
	});

	gulp.watch("assets/scss/*.scss", ['sass']);
	gulp.watch(["assets/js/**/*.js", "assets/js/*.js"], ['js']);
	gulp.watch(["assets/react/**/*.js", "assets/react/*.js"], ['react']);
	gulp.watch(["routes/*.html", "views/**/*.ejs"]).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
	return gulp.src("assets/scss/*.scss")
	.pipe(sass({ outputStyle: 'compressed' })
		.on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(gulp.dest("public/stylesheets"))
	.pipe(browserSync.stream())
	.pipe(notify("Compiled successfully"));
});

gulp.task('js', function(){
	gulp.src(["assets/js/**/*.js", "assets/js/*.js"])
	.pipe(babel({
		presets: ['env']
	}).on('error', console.log))
	.pipe(gulp.dest("public/javascripts"));

	return browserSync.reload();
})

gulp.task('react', function(){
	browserify("./assets/react/app.js")
	.transform("babelify")
	.bundle()
	.pipe(fs.createWriteStream("public/javascripts/react/app.js"));

	return browserSync.reload();
})

gulp.task('default', ['server']);
