import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import Services from './services/services';
import { appConfig } from './app.config';
import home from './home/home';
import 'font-awesome-webpack';
import '@iamadamjowett/angular-click-outside';

import './app.scss';

const requirements = [
  uiRouter,
  Components,
  Services,
  home,
  'angular-click-outside'
];

angular.module('app', requirements)
  .config(appConfig);
