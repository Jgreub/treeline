var request = require('request')

var TestEndpointsHelper = function() {
    var TestServerBaseURL = 'http://localhost:8081'

    function resetTestDB(done) {
        request.post(TestServerBaseURL + '/test/resetTestDB', function() { done() })
    }

    return {
        resetTestDB: resetTestDB
    }
}

module.exports = new TestEndpointsHelper()