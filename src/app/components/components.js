import angular from 'angular';
import topBar from './top-bar/top-bar';
import flightsFinder from './flights-finder/flights-finder';

const requirements = [
    topBar,
    flightsFinder
]

export default angular.module('app.components', requirements)
    .name;
