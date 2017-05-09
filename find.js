var Rx = require('@reactivex/rxjs');

var people = [
    {name: 'Rick', age: 10},
    {name: 'Rose', age: 25},
    {name: 'Cassandra', age: 13},
    {name: 'Henry', age: 22},
]

var source = Rx.Observable.from(people);
var subscription = source.find(x => x.age > 18)
    .subscribe(
      x => console.log(x)
    )
