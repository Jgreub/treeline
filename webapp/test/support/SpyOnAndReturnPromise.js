function spyOnAndReturnPromise(component, functionName) {
    var deferred

    inject(function($q) {
        deferred = $q.defer()
    })

    spyOn(component, functionName).and.returnValue(deferred.promise)
    return deferred
}