
// TypeScript: import { ILineParser } from 'log-to-csv';

/**
 * NotificationEventsParser Implementation example to fetch the relevant data in logs for `AndroidNotification` method
 * @author Islam Attrash
 */
class NotificationEventsParser { // TypeScript: implements ILineParser

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

module.exports = NotificationEventsParser;
