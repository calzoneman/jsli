const LOG_LEVELS = [];

export class LogLevel {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        LOG_LEVELS.push(this);
    }

    shouldLogAtLevel(level) {
        return this.level <= level.level;
    }

    static isValidLogLevel(level) {
        return LOG_LEVELS.indexOf(level) >= 0;
    }
}

var i = 0;
LogLevel.FATAL = new LogLevel('FATAL', i++);
LogLevel.ERROR = new LogLevel('ERROR', i++);
LogLevel.WARN  = new LogLevel('WARN', i++);
LogLevel.INFO  = new LogLevel('INFO', i++);
LogLevel.DEBUG = new LogLevel('DEBUG', i++);
LogLevel.TRACE = new LogLevel('TRACE', i++);
