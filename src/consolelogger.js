import { Logger } from './logger';

export class ConsoleLogger extends Logger {
    constructor(loggerName, level) {
        super(loggerName, level);
    }

    emitMessage(level, message) {
        let name = this.loggerName !== null ? this.loggerName + ': ' : '';
        console.log(`[${level.name}] ${name}${message}`);
    }
}

export function ConsoleLogBackend(loggerName, level) {
    return new ConsoleLogger(loggerName, level);
}
