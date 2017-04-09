import angular from 'angular';
import { headline } from './headline.component';
import './headline.scss';

export default angular.module('app.components.headline', [])
    .component('headline', headline)
    .name;

    
