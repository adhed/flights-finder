import angular from 'angular';
import { airportsBox } from './airports-box.component';
import airportSelector from '../airport-selector/airport-selector';
import './airports-box.scss';

export default angular.module('app.components.airportsBox', [
    airportSelector
])
    .component('airportsBox', airportsBox)
    .name;

    