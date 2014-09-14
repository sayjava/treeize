var util        = require('util');
var Treeize     = require('./lib/treeize');

var welldata1 = require('./test/data/welldata1');
var welldata2 = require('./test/data/welldata2');
var arraywelldata = require('./test/data/arraywelldata');

// test node dependency

var testNodeDependency = [
  {
    'user:name': 'kevin',
    'user:age': 34
  }
];

var test4 = new Treeize();
test4
  .setOptions({ log: true })
  .grow(testNodeDependency)
;

// var keywords = new Treeize();
// keywords.grow(keywordsTest);

// console.log('BASE>', fields + '');
// console.log('STATS>', util.inspect(fields.stats, false, null), "\n\n");

console.log('BASE>', fields + '');
console.log('STATS>', util.inspect(fields.stats, false, null), "\n\n");

// console.log('KEYWORDS>', keywords + '');
// console.log('STATS>', util.inspect(keywords.stats, false, null));
