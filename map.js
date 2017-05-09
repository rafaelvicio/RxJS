var Rx = require('@reactivex/rxjs');

var items = [
  {a: 1},
  {a: 2},
  {a: 3},
  {a: 4},
];

var source = Rx.Observable.from(items);
var subscription = source.map(x => { return {value: x.a} } )
    .subscribe(
      x => console.log(x)
    )
