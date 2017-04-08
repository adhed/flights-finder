import angular from 'angular';
import { flightsForm } from './flights-form.component';
import airportsBox from '../airports-box/airports-box';
import dateWrapper from '../date-wrapper/date-wrapper';
import './flights-form.scss';

export default angular.module('app.components.flightsForm', [
    airportsBox,
    dateWrapper
])
    .component('flightsForm', flightsForm)
    .name;

    
