import template from './date-selector.html';
import controller from './date-selector.controller';

export const dateSelectorComponent = {
  bindings: {
    placeHolder: '<',
    label: '<',
    date: '<',
    onChange: '&',
    minDate: '<',
    maxDate: '<'
  },
  template,
  controller
};
