var gulp = require('gulp')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var sass = require('gulp-sass')
var clean = require('gulp-clean')
var sync = require('run-sequence')

// ****************** //
//   Gulp Variables   //
// ****************** //

var webAppDir = 'webapp/main'
var treelineJs = webAppDir + '/**/*.js'
var treelineTemplates = webAppDir + '/**/*.html'
var treelineSass = webAppDir + '/**/*.scss'
var staticDir = 'src/main/resources/static'
var builtDir = staticDir + '/built'
var templateDir = staticDir + '/templates'

var dependenciesJs = [
   'node_modules/angular/angular.min.js',
   'node_modules/angular-elastic/elastic.js'
]

var dependenciesSassPaths = [
    'node_modules/bootstrap-sass/assets/stylesheets'
]

// *************** //
//    Gulp Tasks   //
// *************** //

gulp.task('uglify.treeline', function() {
  return gulp.src(treelineJs)
    .pipe(uglify())
    .pipe(concat('treeline.min.js'))
    .pipe(gulp.dest(builtDir))
})

gulp.task('uglify.dependencies', function() {
  return gulp.src(dependenciesJs)
    .pipe(uglify())
    .pipe(concat('dependencies.min.js'))
    .pipe(gulp.dest(builtDir))
})

gulp.task('clean.static', function() {
  return gulp.src(staticDir, {read: false})
    .pipe(clean())
})

gulp.task('clean.templates', function() {
  return gulp.src(templateDir, {read: false})
    .pipe(clean())
})

gulp.task('copy.index', function () {
  return gulp.src(webAppDir + '/index.html')
    .pipe(gulp.dest(staticDir))
})

gulp.task('copy.templates', function () {
  return gulp.src([treelineTemplates, '!' + webAppDir + '/index.html'])
    .pipe(gulp.dest(templateDir))
})

gulp.task('sass.treeline', function () {
  var options = {
    outputStyle: 'compact',
    includePaths: dependenciesSassPaths
  }

  return gulp.src(treelineSass)
    .pipe(sass(options))
    .pipe(concat('treeline.min.css'))
    .pipe(gulp.dest(builtDir))
})

gulp.task('watch', function() {
  gulp.watch(treelineJs, ['watch.js']);
  gulp.watch(treelineTemplates, ['watch.templates']);
  gulp.watch(treelineSass, ['watch.sass']);
})

gulp.task('watch.js', function(done) { return sync('uglify.treeline', done) })
gulp.task('watch.templates', function(done) { return sync('clean.templates', 'copy.index', 'copy.templates', done) })
gulp.task('watch.sass', function(done) { return sync('sass.treeline', done) })

gulp.task('build', function (done) {
  return sync('clean.static', 'uglify.treeline', 'uglify.dependencies',
    'copy.index', 'copy.templates', 'sass.treeline', done)
});