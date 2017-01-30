
// TypeScript: import Log2Csv from 'log-to-csv';
var log2Csv = require('../dist/index').default;
var NotificationEventsParser = require('./NotificationEventsParser');

var app = new log2Csv(
    'input.txt',
    new NotificationEventsParser(),
    (output) => process.stdout.write(output)
);

app.parse();
