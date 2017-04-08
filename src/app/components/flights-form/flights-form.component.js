import template from './flights-form.html';
import controller from './flights-form.controller';

export const flightsForm = {
    template,
    controller,
    bindings: {
        onSubmit: '&'
    }
}