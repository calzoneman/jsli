import { LogLevel } from './loglevel';
import { sprintf } from 'sprintf-js';

export class Logger {
    constructor(loggerName, level = LogLevel.INFO) {
        this.level = level;
        this.loggerName = loggerName || null;
    }

    getLogLevel() {
        return this.level;
    }

    setLogLevel(level) {
        if (!LogLevel.isValidLogLevel(level)) {
            throw new Error(`"${level}" is not a valid log level`);
        }

        this.level = level;
    }

    isTraceEnabled() {
        return LogLevel.TRACE.shouldLogAtLevel(this.level);
    }

    isDebugEnabled() {
        return LogLevel.DEBUG.shouldLogAtLevel(this.level);
    }

    isInfoEnabled() {
        return LogLevel.INFO.shouldLogAtLevel(this.level);
    }

    isWarnEnabled() {
        return LogLevel.WARN.shouldLogAtLevel(this.level);
    }

    isErrorEnabled() {
        return LogLevel.ERROR.shouldLogAtLevel(this.level);
    }

    isFatalEnabled() {
        return LogLevel.FATAL.shouldLogAtLevel(this.level);
    }

    emitMessage(level, message) {
        // To be implemented by the implementation class
    }

    log(level, message, ...args) {
        if (args.length > 0) {
            message = sprintf(message, ...args);
        }

        this.emitMessage(level, message);
    }

    trace(message, ...args) {
        if (this.isTraceEnabled()) {
            this.log(LogLevel.TRACE, message, ...args);
        }
    }

    debug(message, ...args) {
        if (this.isDebugEnabled()) {
            this.log(LogLevel.DEBUG, message, ...args);
        }
    }

    info(message, ...args) {
        if (this.isInfoEnabled()) {
            this.log(LogLevel.INFO, message, ...args);
        }
    }

    warn(message, ...args) {
        if (this.isWarnEnabled()) {
            this.log(LogLevel.WARN, message, ...args);
        }
    }

    error(message, ...args) {
        if (this.isErrorEnabled()) {
            this.log(LogLevel.ERROR, message, ...args);
        }
    }

    fatal(message, ...args) {
        if (this.isFatalEnabled()) {
            this.log(LogLevel.FATAL, message, ...args);
        }
    }
}
