import angular from 'angular';
import { flightsFinder } from './flights-finder.component';
import flightsForm from '../flights-form/flights-form';
import flightsList from '../flights-list/flights-list';

export default angular.module('app.components.flightsFinder', [
    flightsForm,
    flightsList
])
    .component('flightsFinder', flightsFinder)
    .name;

    
