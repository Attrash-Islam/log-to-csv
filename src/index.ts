import { createInterface } from 'readline';
import { createReadStream } from 'fs';
import { ILineReader } from '../Interfaces/ILineReader';
import LineReader from './LineReader';
import { ILineParser } from '../Interfaces/ILineParser';

export { Log2Csv };

/**
 * Main log-to-csv Entry Point
 * @author Islam Attrash
 */
export default class Log2Csv {

    private lineReader:ILineReader;
    private lineParser:ILineParser;
    private onLineParserFinish:Function;
    
    constructor(
        fileName:string,
        lineParser:ILineParser,
        onLineParserFinish:Function
    ) {
        this.lineReader = new LineReader(fileName);
        this.lineParser = lineParser;
        this.onLineParserFinish = onLineParserFinish;
        // Append Headers for the CSV output format
        process.stdout.write(this.lineParser.header);
    }

    parse() {

        let parsersResult:string = ``;

        this.lineReader.getLineReader()
            .on(`line`, (line) => {
                let parserRes = this.lineParser.getLineRegexValues(line);
                if(parserRes) {
                    parsersResult += parserRes + '\n';
                }
            })
            .on(`close`, () => {
                this.onLineParserFinish(parsersResult);
            });
    }

}
