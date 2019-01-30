import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | weather/weather-index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:weather/weather-index');
    assert.ok(route);
  });
});
