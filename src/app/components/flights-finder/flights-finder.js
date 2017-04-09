import angular from 'angular';
import { flightsFinder } from './flights-finder.component';
import flightsForm from '../flights-form/flights-form';
import flightsList from '../flights-list/flights-list';
import headline from './headline/headline';
import './flights-finder.scss';

export default angular.module('app.components.flightsFinder', [
    flightsForm,
    flightsList,
    headline
])
    .component('flightsFinder', flightsFinder)
    .name;

    
