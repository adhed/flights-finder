import angular from 'angular';
import { dateSelectorComponent } from './date-selector.component';
import './date-selector.scss'

export default angular.module('app.components.dateSelector', [])
    .component('dateSelector', dateSelectorComponent)
    .name;

    
