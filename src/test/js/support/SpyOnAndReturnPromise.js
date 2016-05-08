function spyOnAndReturnPromise(component, functionName) {
    function Promise() {
        var _resolveCallback
        var _rejectCallback

        function resolve(data) {
            _resolveCallback(data)
        }

        function reject(data) {
            _rejectCallback(data)
        }

        var future = {
            then: function(resolveCallback, rejectCallback) {
                _resolveCallback = resolveCallback
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