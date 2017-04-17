import angular from 'angular';
import { flightsForm } from './flights-form.component';
import airportsBox from '../airports-box/airports-box';
import dateWrapper from '../date-wrapper/date-wrapper';
import spinner from '../spinner/spinner';
import './flights-form.scss';

export default angular.module('app.components.flightsForm', [
    airportsBox,
    dateWrapper,
    spinner
])
    .component('flightsForm', flightsForm)
    .name;

    
