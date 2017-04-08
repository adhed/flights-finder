import { api, getFlightsUrl } from '../shared/api/api';

class FlightsService {
  constructor($http, $q) {
    'ngInject';

    this._$http = $http;
    this._$q = $q;
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
          flights: response.data.flights
        });
      })
      .catch(this._onError.bind(this));
    return deffered.promise;
  }

  _onError(error) {
    console.debug("There's a problem with flights request:", error);
  }
}

export default FlightsService