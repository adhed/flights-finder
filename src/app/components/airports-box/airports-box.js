import angular from 'angular';
import { airportsBox } from './airports-box.component';
import './airports-box.scss';

export default angular.module('app.components.airportsBox', [])
    .component('airportsBox', airportsBox)
    .name;

    
