import log2Csv from '../src/index';
import NotificationEventsParser from './NotificationEventsParser';

var app = new log2Csv(
    'input.txt',
    new NotificationEventsParser(),
    (output) => process.stdout.write(output)
);

app.parse();
