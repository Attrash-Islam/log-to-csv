
/**
 * Line Parser interface
 * @author Islam Attrash
 */
export interface ILineParser {
    /**
     * Regex for parser to fetch relevant data
     */
    regx:RegExp;
    /**
     * Header parser string
     */
    header:string;
    /**
     * Get line relevant values based on @regx
     * @returns string of data (mostly joined by `,`) or null for no match
     */
    getLineRegexValues(line:string):string | null;
    /**
     * Set time zone offset
     * @description This method was added to deal with android logs that arrive 
     * from other timeZones
     * @param offsetInMs - offset in milliseconds
     * @default 0 - On the machine local timezone
     */
    setTimeZoneOffset(offsetInMs:number):void;
}
