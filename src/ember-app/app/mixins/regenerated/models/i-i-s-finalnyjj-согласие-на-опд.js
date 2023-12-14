import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  номер: DS.attr('number'),
  отправлено: DS.attr('boolean', { defaultValue: false }),
  подпись: DS.attr('boolean', { defaultValue: false }),
  сотрудники: DS.belongsTo('i-i-s-finalnyjj-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-finalnyjj-согласие-на-опд.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-finalnyjj-согласие-на-опд.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отправлено: {
    descriptionKey: 'models.i-i-s-finalnyjj-согласие-на-опд.validations.отправлено.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  подпись: {
    descriptionKey: 'models.i-i-s-finalnyjj-согласие-на-опд.validations.подпись.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-finalnyjj-согласие-на-опд.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СогласиеНаОпдE', 'i-i-s-finalnyjj-согласие-на-опд', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата составления', { index: 1 }),
    подпись: attr('Подпись', { index: 2 }),
    отправлено: attr('Отправлено', { index: 3 }),
    сотрудники: belongsTo('i-i-s-finalnyjj-сотрудники', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 4, hidden: true }),
      имя: attr('Имя', { index: 5 }),
      отчество: attr('Отчество', { index: 6 }),
      серияПас: attr('Серия паспорта', { index: 7 }),
      номерПас: attr('Номер паспорта', { index: 8 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('СогласиеНаОпдL', 'i-i-s-finalnyjj-согласие-на-опд', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    подпись: attr('Подпись', { index: 2 }),
    отправлено: attr('Отправлено', { index: 3 }),
    сотрудники: belongsTo('i-i-s-finalnyjj-сотрудники', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 4 }),
      имя: attr('Имя', { index: 5 }),
      отчество: attr('Отчество', { index: 6 }),
      серияПас: attr('Серия паспорта', { index: 7 }),
      номерПас: attr('Номер паспорта', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
