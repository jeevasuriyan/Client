import assert from 'assert';
import app from '../../src/app';

describe('\'query\' service', () => {
  it('registered the service', () => {
    const service = app.service('query');

    assert.ok(service, 'Registered the service');
  });
});
