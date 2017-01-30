export default Log2Csv;
export { Log2Csv, ILineParser };

declare class Log2Csv {
    constructor (
        fileName:string,
        lineParser:ILineParser,
        onLineParserFinish:Function
    );
    parse():void;
}


interface ILineParser {
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
}
