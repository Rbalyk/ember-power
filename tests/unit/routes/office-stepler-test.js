import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | office-stepler', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:office-stepler');
    assert.ok(route);
  });
});
