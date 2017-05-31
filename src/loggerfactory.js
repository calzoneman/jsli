import { Logger } from './logger';

let LoggerImplFactory = null;
let warned = false;

export function getLogger(loggerName) {
    if (LoggerImplFactory === null) {
        if (!warned) {
            console.log('WARNING: No logger implementation bound for jsli.  '
                    + 'Log messages will be ignored!');
            warned = true;
        }
        return new Logger(null, loggerName);
    }

    return LoggerImplFactory.getLogger(loggerName);
}

export function setLoggerImplFactory(implFactory) {
    LoggerImplFactory = implFactory;
}
