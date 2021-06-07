import * as angular from 'angular';
import '@uirouter/angularjs/release/angular-ui-router.js';
import 'restangular';
import { AppRoutes } from './routes.js';
import './styles.scss';
import { component1 } from './components/component1/component.js';
import { Service1 } from './services/service1.js';
import { component2 } from './components/component2/component.js';
import { subcomponent1 } from './components/component2/subcomponent1/component.js';

const app = angular.module('wisboo', ['ui.router', 'restangular'])
  .config(AppRoutes)
  .component('component1', component1)
  .component('component2', component2)
  .component('subcomponent1', subcomponent1)
  .service('Service1', Service1)
angular.bootstrap(document, [app.name]);
