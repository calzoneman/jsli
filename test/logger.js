const assert = require('assert');
const sinon = require('sinon');
const Logger = require('../index').Logger;
const LogLevel = require('../index').LogLevel;

describe('Logger', () => {
    describe('#constructor', () => {
        it('defaults to LogLevel.INFO', () => {
            const logger = new Logger();
            assert.equal(logger.level, LogLevel.INFO);
        });
    });

    describe('#log', () => {
        it('formats the message when args are provided', () => {
            const logger = new Logger();
            const emitMessage = sinon.spy(logger, 'emitMessage');
            logger.log(LogLevel.INFO, 'hello %s n = %d', 'world', 42);
            assert(emitMessage.calledWith(LogLevel.INFO, 'hello world n = 42'));
        });

        it('doesn\'t attempt formatting when no args provided', () => {
            const logger = new Logger();
            const emitMessage = sinon.spy(logger, 'emitMessage');
            logger.log(LogLevel.INFO, 'hello %s');
            assert(emitMessage.calledWith(LogLevel.INFO, 'hello %s'));
        });
    });
});
