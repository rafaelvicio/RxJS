var Rx = require('@reactivex/rxjs');

var source = Rx.Observable.from([1,2,3,4,5])
    .reduce((total, current) => total + current );

var subscription = source.subscribe(
    value => console.log(value)
)
