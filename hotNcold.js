var Rx = require('@reactivex/rxjs');

// Cold

var source = Rx.Observable.interval(1000);

var subscription = source.subscribe(
  value => console.log(`My value ${value}`)
)

// Hot

var source2 = Rx.Observable.interval(1000);
var hot = source.publish();

var subscription2 = hot.subscribe(
  value => console.log(`My value ${value}`)
)
