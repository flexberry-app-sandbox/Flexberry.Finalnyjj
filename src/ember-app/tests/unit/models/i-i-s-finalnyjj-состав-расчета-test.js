import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-finalnyjj-состав-расчета', 'Unit | Model | i-i-s-finalnyjj-состав-расчета', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-finalnyjj-график-отпуска',
    'model:i-i-s-finalnyjj-должности',
    'model:i-i-s-finalnyjj-организации',
    'model:i-i-s-finalnyjj-отделы',
    'model:i-i-s-finalnyjj-расчетный-лист',
    'model:i-i-s-finalnyjj-согласие-на-опд',
    'model:i-i-s-finalnyjj-состав-расчета',
    'model:i-i-s-finalnyjj-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
