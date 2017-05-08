var Rx = require('@reactivex/rxjs');

var subject = new Rx.Subject();
var subscription = subject.subscribe(
  value => console.log(`My value is ${value}`),
  err => console.log(`Error Message: ${err}`),
  () => console.log('Complete')
)

subject.next(55);
subject.next(34);
subject.complete();
