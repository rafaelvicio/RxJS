var Rx = require('@reactivex/rxjs');

var source = Rx.Observable.from([1,3,5,7,9,2,4,6,8]).min();

var subscription = source.subscribe(
    value => console.log(value)
)
