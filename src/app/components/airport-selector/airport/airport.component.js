import template from './airport.html';
import controller from './airport.controller';

export const airport = {
    controller,
    bindings: {
        params: '<',
        onClick: '&',
        filter: '<'
    },
    template
    
}