class Results {
    constructor($state, FlightsService) {
        'ngInject';

        this._$state = $state;
        this._flightsService = FlightsService;
        this._stateParams = this._getParsedStateParams(this._$state.params);
    }

    $onInit() {
        this.flights = [];
        this.airports = {};
        this.areResultsAvailable = false;
        this._handleStateParams();
    }

    _handleStateParams() {
        if (!this._stateParams) {
            return;
        }
        
        this._assignAirportsNames();
        this._makeFlightsRequest();
    }

    _assignAirportsNames() {
        this.airports = this._stateParams.airportsNames;
    }

    _getParsedStateParams(stateParams) {
        if (!this._areStateParamsCorrect(stateParams)) {
            return null; 
        }

        return {
            airportsCodes: {
                destination: stateParams.codeTo,
                departure: stateParams.codeFrom
            },
            dates: {
                start: stateParams.dateFrom,
                end: stateParams.dateTo
            },
            airportsNames: {
                destination: stateParams.nameTo,
                departure: stateParams.nameFrom,
            }
        }
    }

    _areStateParamsCorrect(stateParams) {
        return !!stateParams
            && !!stateParams.dateFrom
            && !!stateParams.dateTo
            && !!stateParams.nameTo
            && !!stateParams.nameFrom
            && !!stateParams.codeFrom
            && !!stateParams.codeTo;
    }

    _makeFlightsRequest() {
        const params = Object.assign({}, this._stateParams, { limit: 15 });

        this._flightsService
            .getFlights(params)
            .then(response => {
                this.areResultsAvailable = true;
                this.flights = response.flights;
            })
            .catch(this._onError.bind(this));
    }

    _onError(error) {
        console.debug("There's a problem with form submit:", error);
    }
}

export default Results