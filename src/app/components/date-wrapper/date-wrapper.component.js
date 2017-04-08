import template from './date-wrapper.html';
import controller from './date-wrapper.controller';

export const dateWrapperComponent = {
  bindings: {
    startDate: '=',
    endDate: '=',
    onChange: '&'
  },
  template,
  controller
};
