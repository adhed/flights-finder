import angular from 'angular';
import { topBar } from './top-bar.component';
import './top-bar.scss';

export default angular.module('app.components.topBar', [])
    .component('topBar', topBar)
    .name;

    
