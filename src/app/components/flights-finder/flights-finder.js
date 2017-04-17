import angular from 'angular';
import { flightsFinder } from './flights-finder.component';
import flightsForm from '../flights-form/flights-form';
import results from '../results/results';
import './flights-finder.scss';

export default angular.module('app.components.flightsFinder', [
    flightsForm,
    results
])
    .component('flightsFinder', flightsFinder)
    .name;

    
