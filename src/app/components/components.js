import angular from 'angular';
import topBar from './top-bar/top-bar';
import content from './content/content';
import airportsBox from './airports-box/airports-box';
import airportSelector from './airport-selector/airport-selector';
import Services from '../services/services';

const requirements = [
    topBar,
    content,
    airportsBox,
    airportSelector,
    Services
]

export default angular.module('app.components', requirements)
    .name;
