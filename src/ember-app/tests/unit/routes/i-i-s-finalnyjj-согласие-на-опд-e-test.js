import { moduleFor, test } from 'ember-qunit';

moduleFor('route:i-i-s-finalnyjj-согласие-на-опд-e', 'Unit | Route | i-i-s-finalnyjj-согласие-на-опд-e', {
  // Specify the other units that are required for this test.
  needs: [
    'service:cols-config-menu',
    'service:detail-interaction',
    'service:objectlistview-events',
    'service:user-settings',
    'service:app-state',
    'service:adv-limit',
  ],
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
