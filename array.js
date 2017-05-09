var Rx = require('@reactivex/rxjs');

var numbers = [1,8,15,37];
var source = Rx.Observable.from(numbers);

var subscription = source.subscribe(
  value => console.log(`My value is: ${value}`),
  value => {},
  value => console.log(`Complet`)
)
