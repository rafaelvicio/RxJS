var Rx = require('@reactivex/rxjs');

var observable = Rx.Observable.create(observer =>{
  observer.next(5);
  observer.error(`error cod 131`);
});

observable.subscribe(
  value => console.log(`My Value is ${value}`),
   err => console.log(`Error message: ${err}`),
   () => console.log(`Completed!`)
)
