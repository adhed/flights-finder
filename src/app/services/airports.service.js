import { api, getFlightsUrl } from '../shared/api/api';

class AirportsService {
  constructor($http, $q) {
    'ngInject';

    this._$http = $http;
    this._$q = $q;
  }

  getAirportsInfo() {
    const deferred = this._$q.defer();
    const URL = `${api.baseUrl}${api.paths.airports}`;

    this._$http
      .get(URL)
      .then(this._onGetAirportsSuccess.bind(this, deferred))
      .catch(this._onError);

    return deferred.promise;
  }

  getAirports(airports = [], limitedRoutes, filterTerm = '') {
    const areLimitedRoutesDefined = !!limitedRoutes && !!limitedRoutes.length;
    const availableAirports = areLimitedRoutesDefined ? 
      this._getAvailableAirports(airports, limitedRoutes) : airports;
    return this._getFilteredAirports(availableAirports, filterTerm);
  }

  getPossibleRoutes(routes = {}, airportIATACode) {
    return routes[airportIATACode];
  }

  _getAvailableAirports(airports, routes) {
    return routes.map(iataCode => {
      return airports.find(airport => {
        return airport.iataCode === iataCode;
      })
    })
  }

  _getFilteredAirports(airports, filterTerm) {
    const filter = filterTerm.toUpperCase();
    return airports
      .filter(this._filterAirportsByTerm.bind(this, filter))
      .sort(this._compareAirportsByName);
  }

  _filterAirportsByTerm(filter, airport) {
    return airport.country.toUpperCase().includes(filter)
      || airport.iataCode.toUpperCase().includes(filter)
      || airport.name.toUpperCase().includes(filter);
  }

  _onGetAirportsSuccess(deferred, response = {}) {
    let isResponseOk = response.data 
      && response.data.airports 
      && response.data.routes

    if (!isResponseOk) {
      deferred.reject('EMPTY_RESPONSE');
      return;
    }

    deferred.resolve({
      airports: this._getParsedAirports(response.data.airports),
      routes: this._routes = response.data.routes
    });
  }

  _onGetAirportsFail(response) {
    console.debug('fail', response);
  }

  _onError(error) {
    console.debug("There's a problem with request to server:", error);
  }

  _getParsedAirports(airports = []) {
    return airports
      .map(this._mapAirportObject)
      .sort(this._compareAirportsByName);
  };

  _mapAirportObject(airport) {
    return {
      country: airport.country.name,
      iataCode: airport.iataCode,
      name: airport.name
    };
  }

  _compareAirportsByName(airportOne, airportTwo) {
    const airportOneName = airportOne.name.toLowerCase();
    const airportTwoName = airportTwo.name.toLowerCase();

    if (airportOneName < airportTwoName) return -1;
    if (airportOneName > airportTwoName) return 1;
    return 0;
  }
}

export default AirportsService