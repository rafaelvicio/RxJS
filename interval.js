var Rx = require('@reactivex/rxjs');

var source = Rx.Observable.interval(1000)

var subscription = source.subscribe(
    value => console.log(value)
)
