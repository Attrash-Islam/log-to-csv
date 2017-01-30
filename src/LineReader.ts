import { ILineReader } from '../Interfaces/ILineReader';
import { createReadStream, ReadStream } from 'fs';
import { createInterface, ReadLine } from 'readline';

/**
 * Line Reader class to read from a file `The Node.js way`
 * @author Islam Attrash
 */
export default class LineReader implements ILineReader {

    private fileName:string;
    private input:ReadStream;
    private lineReader:ReadLine;

    constructor(fileName:string) {
        this.fileName = fileName;
        this.input = createReadStream(fileName);
        this.lineReader = createInterface({
            input: this.input
        });
    }

    getLineReader():ReadLine {
        return this.lineReader;
    }

}
