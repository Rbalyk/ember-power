import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | say-hi', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:say-hi');
    assert.ok(route);
  });
});
