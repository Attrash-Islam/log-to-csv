# log-to-csv

Log files Parser that takes the log files (often txt files) and insert them into some kind of pipe with regex <b>of your implementation</b> and returns a CSV format-like. The pipe will receive Line-By-Line, and will proccess it throught the regex syntax, and will move to the next line until finishing the InputStream.

# What to do?

<b>Implement ILineParser interface [TypeScript Recommended]</b>

```ts
  import { ILineParser } from 'log-to-csv';
  export class CustomParser implements ILineParser { }
```

# Install
```
npm i --save log-to-csv
```

# Developer section
```
npm run build
```

# Basic Usage

```js
import Log2Csv from 'log-to-csv';
import NotificationEventsParser from './Examples/NotificationEventsParser';

var app = new log2Csv(
    'input.txt',
    new NotificationEventsParser(),
    (output) => process.stdout.write(output)
);

app.parse();
```

```js
import { ILineParser } from 'log-to-csv';

/**
 * NotificationEventsParser Implementation example to fetch the relevant data in logs for `AndroidNotification` method
 * @author Islam Attrash
 */
export default class NotificationEventsParser implements ILineParser {

    public regx:RegExp;
    public header:string;

    constructor() {
        //Recognize Notification States
        //Example: 2017-01-29 11:19:39.778 961-4981/? D/AndroidNotification: notifiy message:how are you?, packageName:com.ns.app1
        this.regx = /(\d+-\d+-\d+ \d+:\d+:\d+).+AndroidNotification: notifiy message:(.+),/;
        this.header = `Date,Timestamp,NotificationMessage\n`;
    }

    /**
     * Get line relevant values
     * @returns ${dateString},${timestamp},${notifyMessage}
     */
    getLineRegexValues(line) {
        let values =  this.regx.exec(line);
        if(values === null) {
            return null;
        } else {
            let dateString = values[1];
            let timestamp = new Date(dateString).getTime();
            let notifyMessage = values[2];
            return `${dateString},${timestamp},${notifyMessage}`;
        }
    }

}

```

# Live Demo (Parser in Examples folder)

<b>- Takes Android logs and fetch some kind of method called AndroidNotification and shows the notification message</b>


<img src="https://cdn.rawgit.com/Attrash-Islam/assets/20048dde/log-to-csv.gif" />
