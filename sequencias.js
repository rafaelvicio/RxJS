var Rx = require('@reactivex/rxjs');

var source = Rx.Observable.range(1,10);
var subscription = source.subscribe(
  value => console.log(`My value is ${value}`)
)
