var Rx = require('@reactivex/rxjs');

var subject = new Rx.BehaviorSubject(83);
var subscription = subject.subscribe(
    value => console.log(`My Value is ${value}`),
    err => console.log(`Error message: ${err}`),
    () => console.log('Completed!')
)

var counter = 5,
    interval = setInterval(()=>{
        subject.next(counter--);
        if(!counter){
            clearInterval(interval);
            subject.complete()
        }
    }, 1000);
