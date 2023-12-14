import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаДок: DS.attr('date', { defaultValue() { return new Date(); } }),
  датаНач: DS.attr('date'),
  колДней: DS.attr('string'),
  номер: DS.attr('number'),
  отправлено: DS.attr('boolean', { defaultValue: false }),
  сотрудники: DS.belongsTo('i-i-s-finalnyjj-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  датаДок: {
    descriptionKey: 'models.i-i-s-finalnyjj-график-отпуска.validations.датаДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаНач: {
    descriptionKey: 'models.i-i-s-finalnyjj-график-отпуска.validations.датаНач.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  колДней: {
    descriptionKey: 'models.i-i-s-finalnyjj-график-отпуска.validations.колДней.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-finalnyjj-график-отпуска.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отправлено: {
    descriptionKey: 'models.i-i-s-finalnyjj-график-отпуска.validations.отправлено.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-finalnyjj-график-отпуска.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГрафикОтпускаE', 'i-i-s-finalnyjj-график-отпуска', {
    номер: attr('Номер', { index: 0 }),
    датаДок: attr('Дата документа', { index: 1 }),
    датаНач: attr('Дата начала', { index: 2 }),
    колДней: attr('Количество дней', { index: 3 }),
    отправлено: attr('Отправлено', { index: 4 }),
    сотрудники: belongsTo('i-i-s-finalnyjj-сотрудники', 'Сотрудники', {
      фамилия: attr('Фамилия', { index: 6, hidden: true }),
      имя: attr('Имя', { index: 7 }),
      отчество: attr('Отчество', { index: 8 })
    }, { index: 5, displayMemberPath: 'фамилия' })
  });

  modelClass.defineProjection('ГрафикОтпускаL', 'i-i-s-finalnyjj-график-отпуска', {
    номер: attr('Номер', { index: 0 }),
    датаДок: attr('Дата документа', { index: 1 }),
    датаНач: attr('Дата начала отпуска', { index: 2 }),
    колДней: attr('Количество дней', { index: 3 }),
    отправлено: attr('Отправлено', { index: 4 }),
    сотрудники: belongsTo('i-i-s-finalnyjj-сотрудники', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 5 }),
      имя: attr('Имя', { index: 6 }),
      отчество: attr('Отчество', { index: 7 })
    }, { index: -1, hidden: true })
  });
};
