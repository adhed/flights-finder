import angular from 'angular';
import { results } from './results.component';
import { resultsConfig } from './results.config';
import headline from './headline/headline';
import flightsList from './flights-list/flights-list';
import spinner from '../spinner/spinner';

export default angular.module('app.components.results', [
    headline,
    flightsList,
    spinner
])
    .component('results', results)
    .config(resultsConfig)
    .name;

    
