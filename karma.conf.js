module.exports = function(config) {
  config.set({
    files: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-mocks/angular-mocks.js',

      'webapp/main/treeline.module.js',
      'webapp/main/**/*.js',
      'webapp/main/**/*.html',

      'webapp/test/**/*.js'
    ],

    singleRun: true,

    frameworks: ['jasmine-jquery', 'jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-jasmine-jquery',
      'karma-ng-html2js-preprocessor',
      'karma-phantomjs-launcher'
    ],

    preprocessors: {
      'webapp/main/**/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      moduleName: 'templates',
      stripPrefix: 'webapp/main/',
      prependPrefix: 'templates/'
    },

    reporters: ['progress']
  })
}