exports.config = {
  allScriptsTimeout: 120 * 1000,

  specs: [
    'src/test/e2e/support/*.js',
    'src/test/e2e/*.js'
  ],

  capabilities: {
    'browserName': 'phantomjs'
  },

  baseUrl: 'http://localhost:8081/',

  framework: 'jasmine2',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 120 * 1000
  }
};