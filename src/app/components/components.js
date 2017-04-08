import angular from 'angular';
import topBar from './top-bar/top-bar';
import content from './content/content';
import Services from '../services/services';

const requirements = [
    topBar,
    content,
    Services
]

export default angular.module('app.components', requirements)
    .name;
