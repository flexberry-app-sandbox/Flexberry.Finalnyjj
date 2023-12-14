import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-finalnyjj-график-отпуска-l');
  this.route('i-i-s-finalnyjj-график-отпуска-e',
  { path: 'i-i-s-finalnyjj-график-отпуска-e/:id' });
  this.route('i-i-s-finalnyjj-график-отпуска-e.new',
  { path: 'i-i-s-finalnyjj-график-отпуска-e/new' });
  this.route('i-i-s-finalnyjj-должности-l');
  this.route('i-i-s-finalnyjj-должности-e',
  { path: 'i-i-s-finalnyjj-должности-e/:id' });
  this.route('i-i-s-finalnyjj-должности-e.new',
  { path: 'i-i-s-finalnyjj-должности-e/new' });
  this.route('i-i-s-finalnyjj-организации-l');
  this.route('i-i-s-finalnyjj-организации-e',
  { path: 'i-i-s-finalnyjj-организации-e/:id' });
  this.route('i-i-s-finalnyjj-организации-e.new',
  { path: 'i-i-s-finalnyjj-организации-e/new' });
  this.route('i-i-s-finalnyjj-отделы-l');
  this.route('i-i-s-finalnyjj-отделы-e',
  { path: 'i-i-s-finalnyjj-отделы-e/:id' });
  this.route('i-i-s-finalnyjj-отделы-e.new',
  { path: 'i-i-s-finalnyjj-отделы-e/new' });
  this.route('i-i-s-finalnyjj-расчетный-лист-l');
  this.route('i-i-s-finalnyjj-расчетный-лист-e',
  { path: 'i-i-s-finalnyjj-расчетный-лист-e/:id' });
  this.route('i-i-s-finalnyjj-расчетный-лист-e.new',
  { path: 'i-i-s-finalnyjj-расчетный-лист-e/new' });
  this.route('i-i-s-finalnyjj-согласие-на-опд-l');
  this.route('i-i-s-finalnyjj-согласие-на-опд-e',
  { path: 'i-i-s-finalnyjj-согласие-на-опд-e/:id' });
  this.route('i-i-s-finalnyjj-согласие-на-опд-e.new',
  { path: 'i-i-s-finalnyjj-согласие-на-опд-e/new' });
  this.route('i-i-s-finalnyjj-сотрудники-l');
  this.route('i-i-s-finalnyjj-сотрудники-e',
  { path: 'i-i-s-finalnyjj-сотрудники-e/:id' });
  this.route('i-i-s-finalnyjj-сотрудники-e.new',
  { path: 'i-i-s-finalnyjj-сотрудники-e/new' });
});

export default Router;
