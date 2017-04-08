import angular from 'angular';
import { flightsList } from './flights-list.component';
import './flights-list.scss';

export default angular.module('app.components.flightsList', [])
    .component('flightsList', flightsList)
    .name;

    
