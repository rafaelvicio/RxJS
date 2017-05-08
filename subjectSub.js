var Rx = require('@reactivex/rxjs');

var observable = Rx.Observable.create(observer => {
  var i = 0;
    interval = setInterval(() => {
      i++;
      observer.next(parseInt(Math.random()*10));
      if(i > 5){
        clearInterval(interval);
        observer.complete();
      }
    }, 1000)
})

var subject = new Rx.Subject()
var subSource = observable.subscribe(subject);

var subscription = subject.subscribe(
  value => console.log(`My value ${value}`),
  err => console.log(`Error mesage: ${err}`),
  () => console.log('Complete!')
)
