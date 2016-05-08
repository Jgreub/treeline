function spyOnAndReturnPromise(component, functionName) {
    function Promise() {
        var _fulfillCallback
        var _rejectCallback

        function resolve(data) {
            _fulfillCallback(data)
        }

        function reject(data) {
            _rejectCallback(data)
        }

        var future = {
            then: function(fulfillCallback, rejectCallback) {
                _fulfillCallback = fulfillCallback
                _rejectCallback = rejectCallback
            }
        }

        return {
            resolve: resolve,
            reject: reject,
            future: future
        }
    }

    var promise = Promise()
    spyOn(component, functionName).and.returnValue(promise.future)
    return promise
}