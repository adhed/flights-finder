import { api, getFlightsUrl } from '../shared/api/api';

class FlightsService {
  constructor($http, $q, DatesService) {
    'ngInject';

    this._$http = $http;
    this._$q = $q;
    this._datesService = DatesService;
  }

  getFlights(params = {}) {
    const URL = getFlightsUrl(params);
    const deffered = this._$q.defer();

    this._$http
      .get(URL)
      .then(response => {
        if (!response || !response.data || !response.data.flights) {
          return;
          deffered.reject();
        }
        deffered.resolve({
          flights: this._getParsedFlights(response.data.flights)
        });
      })
      .catch(this._onError.bind(this));
    return deffered.promise;
  }

  _getParsedFlights(flights = []) {
    return flights
      .map(this._parseFlight.bind(this))
      .sort(this._compareFlightsByPrice);
  }

  _parseFlight(flight) {
    let parsedFlight = Object.assign({}, flight);

    parsedFlight.dateFrom = this._datesService.getFormatedDate(flight.dateFrom);
    parsedFlight.dateTo = this._datesService.getFormatedDate(flight.dateTo);

    return parsedFlight;
  }

  _compareFlightsByPrice(flightOne, flightTwo) {
    if (flightOne.price < flightTwo.price) return -1;
    if (flightOne.price > flightTwo.price) return 1;
    return 0;
  }

  _onError(error) {
    console.debug("There's a problem with flights request:", error);
  }
}

export default FlightsService