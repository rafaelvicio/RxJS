var Rx = require('@reactivex/rxjs');

var source = Rx.Observable.timer(5000, 1000).take(5)

var subscription = source.subscribe(
    value => console.log(value)
)
