class FlightsFinder {
    constructor(FlightsService) {
        'ngInject';

        this._FlightsService = FlightsService;
    }

    $onInit() {
        this.flights = [];
    }

    handleFormSubmit(event = {}) {
        if (!event.form) { return; }
        const params = Object.assign({}, event.form, { limit: 15 });

        this._FlightsService
            .getFlights(params)
            .then(response => {
                this.flights = response.flights;
            })
            .catch(this._onError.bind(this));
    }

    _onError(error) {
        console.debug("There's a problem with form submit:", error);
    }
}

export default FlightsFinder