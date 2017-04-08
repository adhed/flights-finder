import angular from 'angular';
import { flightsList } from './flights-list.component';
import flight from './flight/flight';
import './flights-list.scss';

export default angular.module('app.components.flightsList', [
    flight
])
    .component('flightsList', flightsList)
    .name;

    
