exports.config = {
  allScriptsTimeout: 30 * 1000,

  specs: [
    'src/test/e2e/support/*.js',
    'src/test/e2e/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8081/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 10 * 1000
  }
};