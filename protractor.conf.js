exports.config = {
  allScriptsTimeout: 120 * 1000,

  specs: [
    'src/test/e2e/support/*.js',
    'src/test/e2e/*.js'
  ],

  capabilities: {
    'browserName': 'firefox'
  },

  baseUrl: 'http://localhost:8081/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 120 * 1000
  }
};