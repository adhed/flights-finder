import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { homeConfig } from './home.config';
import { homeComponent } from './home.component';
import './home.scss';

export default angular.module('app.home', [
    uiRouter
])
    .component('home', homeComponent)
    .config(homeConfig)
    .name;

    
