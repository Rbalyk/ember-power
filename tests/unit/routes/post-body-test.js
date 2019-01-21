import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | post-body', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:post-body');
    assert.ok(route);
  });
});
