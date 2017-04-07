import angular from 'angular';
import topBar from './top-bar/top-bar';
import content from './content/content';

const requirements = [
    topBar,
    content
]

export default angular.module('app.components', requirements)
    .name;
