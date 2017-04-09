import angular from 'angular';
import { flight } from './flight.component';
import './flight.scss';

export default angular.module('app.components.flight', [])
    .component('flight', flight)
    .name;

    
