import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | currencies', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:currencies');
    assert.ok(route);
  });
});
