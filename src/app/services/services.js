import angular from 'angular';
import AirportsService from './airports.service';
import FlightsService from './flights.service';
import DatesService from './dates.service';

export default angular.module('app.services', [])
    .service('AirportsService', AirportsService)
    .service('FlightsService', FlightsService)
    .service('DatesService', DatesService)
    .name;
