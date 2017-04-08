import angular from 'angular';
import angularAria from 'angular-aria';
import angularAnimate from 'angular-animate';
import angularMaterial from 'angular-material';
import { dateSelectorComponent } from './date-selector.component';
import './date-selector.scss'


export default angular.module('app.components.dateSelector', [
    angularMaterial
])
    .component('dateSelector', dateSelectorComponent)
    .name;

    
