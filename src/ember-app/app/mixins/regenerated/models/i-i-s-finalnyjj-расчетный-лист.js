import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаДок: DS.attr('date', { defaultValue() { return new Date(); } }),
  номерЛиста: DS.attr('number'),
  отправлено: DS.attr('boolean', { defaultValue: false }),
  сотрудники: DS.belongsTo('i-i-s-finalnyjj-сотрудники', { inverse: null, async: false }),
  составРасчета: DS.hasMany('i-i-s-finalnyjj-состав-расчета', { inverse: 'расчетныйЛист', async: false })
});

export let ValidationRules = {
  датаДок: {
    descriptionKey: 'models.i-i-s-finalnyjj-расчетный-лист.validations.датаДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерЛиста: {
    descriptionKey: 'models.i-i-s-finalnyjj-расчетный-лист.validations.номерЛиста.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отправлено: {
    descriptionKey: 'models.i-i-s-finalnyjj-расчетный-лист.validations.отправлено.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-finalnyjj-расчетный-лист.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  составРасчета: {
    descriptionKey: 'models.i-i-s-finalnyjj-расчетный-лист.validations.составРасчета.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасчетныйЛистE', 'i-i-s-finalnyjj-расчетный-лист', {
    номерЛиста: attr('Номер листа', { index: 0 }),
    датаДок: attr('Дата документа', { index: 1 }),
    отправлено: attr('Отправлено', { index: 2 }),
    сотрудники: belongsTo('i-i-s-finalnyjj-сотрудники', 'Сотрудники', {
      фамилия: attr('Фамилия', { index: 4, hidden: true }),
      имя: attr('Имя', { index: 5 }),
      отчество: attr('Отчество', { index: 6 })
    }, { index: 3, displayMemberPath: 'фамилия' }),
    составРасчета: hasMany('i-i-s-finalnyjj-состав-расчета', 'Состав расчета', {
      тип: attr('Тип', { index: 0 }),
      наименование: attr('Наименование', { index: 1 }),
      сумма: attr('Сумма', { index: 2 }),
      ндфл: attr('Ндфл', { index: 3 }),
      взносы: attr('Взносы', { index: 4 }),
      всего: attr('Всего', { index: 5 })
    })
  });

  modelClass.defineProjection('РасчетныйЛистL', 'i-i-s-finalnyjj-расчетный-лист', {
    номерЛиста: attr('Номер листа', { index: 0 }),
    датаДок: attr('Дата документа', { index: 1 }),
    отправлено: attr('Отправлено', { index: 2 }),
    сотрудники: belongsTo('i-i-s-finalnyjj-сотрудники', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 3 }),
      имя: attr('Имя', { index: 4 }),
      отчество: attr('Отчество', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
