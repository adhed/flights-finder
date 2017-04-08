import angular from 'angular';
import { content } from './content.component';
import flightsFinder from '../flights-finder/flights-finder';
import './content.scss';

export default angular.module('app.components.content', [
    flightsFinder
])
    .component('content', content)
    .name;

    
