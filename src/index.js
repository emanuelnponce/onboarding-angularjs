import * as angular from 'angular';
import '@uirouter/angularjs/release/angular-ui-router.js';

import { view1 } from './view1.js';
import { AppRoutes } from './routes.js';
import './styles.scss';

const app = angular.module('wisboo', ['ui.router'])
  .config(AppRoutes)
  .component('view1', view1);
angular.bootstrap(document, [app.name]);
