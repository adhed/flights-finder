import angular from 'angular';
import { airportSelector } from './airport-selector.component';
import airport from './airport/airport';
import './airport-selector.scss';

export default angular.module('app.components.airportSelector', [
    airport
])
    .component('airportSelector', airportSelector)
    .name;

    
