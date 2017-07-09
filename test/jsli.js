const assert = require('assert');
const sinon = require('sinon');

describe('jsli', () => {
    it('calls the log backend to create a new logger', () => {
        const dummy = {};
        const backend = sinon.stub().returns(dummy);
        const jsli = require('../index');
        jsli.setLogBackend(backend);
        const logger = jsli('someLog');
        assert.equal(logger, dummy, 'Expected returned object to match');
        assert(backend.calledWith('someLog'), 'Expected log backend to be called');
    });

    it('defaults if no backend is configured', () => {
        const jsli = require('../index');
        jsli.setLogBackend(null);
        const logger = jsli('someLog');
        assert(logger !== null && typeof logger !== 'undefined', 'Expected returned object to be non-null');
    });
});
