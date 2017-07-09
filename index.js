const ConsoleLogBackend = require('./lib/consolelogger').ConsoleLogBackend;

let logBackend = null;
let warned = false;

module.exports = function jsli(loggerName, level) {
    if (logBackend === null) {
        if (!warned) {
            console.error('No log backend bound for jsli.  Logging to stdout.');
            warned = true;
        }

        return ConsoleLogBackend(loggerName, level);
    } else {
        return logBackend(loggerName, level);
    }
};
module.exports.setLogBackend = function setLogBackend(backend) {
    logBackend = backend;
};
module.exports.Logger = require('./lib/logger').Logger;
module.exports.LogLevel = require('./lib/loglevel').LogLevel;
