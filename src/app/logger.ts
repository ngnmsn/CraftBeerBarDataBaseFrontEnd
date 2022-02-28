import { LogLevel } from './log-level';
import { environment } from '../environments/environment';

export class Logger {
    
    static readonly trace = Logger.printFn(LogLevel.Trace);
    static readonly debug = Logger.printFn(LogLevel.Debug);
    static readonly info = Logger.printFn(LogLevel.Info);
    static readonly warning = Logger.printFn(LogLevel.Warning);
    static readonly error = console.error;

    static printFn(logLevel: LogLevel) {
        return (logLevel < environment.logLevel)
        ? Logger.doNothingFn
        : console.log;
    }

    static doNothingFn(message?: any, ...optionalParams: any[]) {
    }
}