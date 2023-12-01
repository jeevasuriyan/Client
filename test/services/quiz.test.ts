import assert from 'assert';
import app from '../../src/app';

describe('\'quiz\' service', () => {
  it('registered the service', () => {
    const service = app.service('quiz');

    assert.ok(service, 'Registered the service');
  });
});
