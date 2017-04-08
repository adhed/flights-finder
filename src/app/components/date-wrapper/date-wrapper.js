import angular from 'angular';
import moment from 'moment';
import { dateWrapperComponent } from './date-wrapper.component';
import dateSelector from '../date-selector/date-selector';
import './date-wrapper.scss'

export default angular.module('app.components.dateWrapper', [
    dateSelector,
])
    .component('dateWrapper', dateWrapperComponent)
    .name;

    
