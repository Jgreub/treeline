var request = require('request')

var TestEndpointsHelper = function() {
    function resetTestDB(done) {
        request.post(browser.baseUrl + '/test/resetTestDB', done)
    }

    return {
        resetTestDB: resetTestDB
    }
}

module.exports = new TestEndpointsHelper()