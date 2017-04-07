import angular from 'angular';
import { content } from './content.component';
import './content.scss';

export default angular.module('app.components.content', [])
    .component('content', content)
    .name;

    
