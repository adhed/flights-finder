import angular from 'angular';
import { airport } from './airport.component';
import './airport.scss';

export default angular.module('app.components.airport', [])
    .component('airport', airport)
    .name;

    
