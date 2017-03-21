module.exports = function(config) {
  config.set({
    files: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'webapp/main/Treeline.js',
      'webapp/main/**/*.js',
      'webapp/test/**/*.js'
    ],

    singleRun: true,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher'
    ],

    reporters: ['dots']
  })
}