import angular from 'angular';
import AirportsService from './airports.service';
import { FlightsService } from './flights.service';

export default angular.module('app.services', [])
    .service('AirportsService', AirportsService)
    .service('FlightsService', FlightsService)
    .name;
