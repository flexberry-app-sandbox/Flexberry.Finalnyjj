import {
  defineNamespace,
  defineProjections,
  Model as ГрафикОтпускаMixin
} from '../mixins/regenerated/models/i-i-s-finalnyjj-график-отпуска';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ГрафикОтпускаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
