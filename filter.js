var Rx = require('@reactivex/rxjs');

var source = Rx.Observable.from([1,2,3,4,5,6,7,8,9,10]);
var subscription = source.filter(x => x % 2 === 0 )
    .subscribe(
      x => console.log(x)
    )
