import assert from 'assert';
import app from '../../src/app';

describe('\'forgotpassword\' service', () => {
  it('registered the service', () => {
    const service = app.service('forgotpassword');

    assert.ok(service, 'Registered the service');
  });
});
