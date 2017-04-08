import template from './airport-selector.html';
import controller from './airport-selector.controller';

export const airportSelector = {
    template,
    controller: controller,
    bindings: {
        options: '<',
        label: '<',
        onFilterChange: '&',
        onSelect: '&'
    }
}