import { api, getFlightsUrl } from '../shared/api/api';

class AirportsService {
  constructor($http, $q) {
    'ngInject';

    this._$http = $http;
    this._$q = $q;
    this._allAirports = [];
    this._routes = {};
    this._matchingAirports = [];
    this._selectedAirportCode = '';
  }

  collectAirports() {
    const deferred = this._$q.defer();
    const URL = `${api.baseUrl}${api.paths.airports}`;

    this._$http
      .get(URL)
      .then(this._onGetAirportsSuccess.bind(this, deferred))
      .catch(this._onError);

    return deferred.promise;
  }

  getDepartureAirports(filterTerm = '') {
    return this._getAirports(this._allAirports, filterTerm);
  }

  getDestinationAirports(filterTerm = '') {
    return this._getAirports(this._matchingAirports, filterTerm);
  }

  setSelectedAirport(airport = {}) {
    this._selectedAirportCode = airport.iataCode;
    this._findMatchingAirports();
  }

  _getAirports(airportsCollection = [], filterTerm = '') {
    const filter = filterTerm.toUpperCase();
    return airportsCollection.filter(airport => {
      return airport.country.toUpperCase().includes(filter)
        || airport.iataCode.toUpperCase().includes(filter)
        || airport.name.toUpperCase().includes(filter);
    });
  }

  _findMatchingAirports() {
    const possibleRoutes = this._routes[this._selectedAirportCode];

    this._matchingAirports = possibleRoutes.map(iataCode => {
      return this._allAirports.find(airport => {
        return airport.iataCode === iataCode;
      });
    });
  }

  _onGetAirportsSuccess(deferred, response = {}) {
    if (!response.data || !response.data.airports || !response.data.routes) {
      deferred.reject('EMPTY_RESPONSE');
      return;
    }

    this._parseAirports(response.data.airports);
    this._routes = response.data.routes;
  }

  _onGetAirportsFail(response) {
    console.debug('fail', response);
  }

  _onError(error) {
    console.debug("There's a problem with request to server:", error);
  }

  _parseAirports(airports = []) {
    this._allAirports = airports.map(airport => {
      return {
        country: airport.country.name,
        iataCode: airport.iataCode,
        name: airport.name
      }
    });
  };
}

export default AirportsService