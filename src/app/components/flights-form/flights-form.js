import angular from 'angular';
import { flightsForm } from './flights-form.component';
import './flights-form.scss';

export default angular.module('app.components.flightsForm', [])
    .component('flightsForm', flightsForm)
    .name;

    
