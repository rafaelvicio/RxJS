var Rx = require('@reactivex/rxjs');

var source = Rx.Observable.range(0, 10).count(x => x % 2 === 0)
var subscription = source.subscribe(
    value => console.log(value)
)
