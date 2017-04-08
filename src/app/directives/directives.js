import angular from 'angular';
import { keyFocus } from './key-focus/key-focus.directive';

export default angular.module('app.directives', [])
    .directive('keyFocus', keyFocus)
    .name;
