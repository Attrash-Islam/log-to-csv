import LineReader from '../src/LineReader';
import { ReadLine } from 'readline';

/**
 * LineReader interface
 * @author Islam Attrash
 */
export interface ILineReader {
    /**
     * Get line reader
     * @returns readline/ReadLine
     */
    getLineReader():ReadLine;
}
