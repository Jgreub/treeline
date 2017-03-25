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

    browsers: ['PhantomJS'],

    plugins: [
      'karma-jasmine',
      'karma-jasmine-jquery',
      'karma-phantomjs-launcher',
      'karma-ng-html2js-preprocessor'
    ],

    preprocessors: {
      'webapp/main/**/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      moduleName: 'templates',
      stripPrefix: 'webapp/main/',
      prependPrefix: 'templates/'
    },

    reporters: ['dots']
  })
}