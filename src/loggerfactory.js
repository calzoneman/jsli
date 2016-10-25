import { Logger } from './logger';

var LoggerImplFactory = null;

export function getLogger(loggerName) {
    if (LoggerImplFactory === null) {
        console.log('WARNING: No logger implementation bound for jsli.  '
                + 'Log messages will be ignored!');
        return new Logger(null, loggerName);
    }

    return LoggerImplFactory.getLogger(loggerName);
}

export function setLoggerImplFactory(implFactory) {
    LoggerImplFactory = implFactory;
}
