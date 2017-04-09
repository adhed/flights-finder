class FlightsFinder {
    constructor(FlightsService) {
        'ngInject';

        this._FlightsService = FlightsService;
    }

    $onInit() {
        this.isFormSubmitted = false;
        this.flights = [];
        this.airports = {
            destination: '',
            departure: ''
        };
    }

    handleFormSubmit(event = {}) {
        if (!event.form) { return; }

        this._assignAirports(event.form.airports);
        this._makeFlightsRequest(event.form);
    }

    _assignAirports(airports) {
        console.log(airports);
        this.airports.destination = airports.destination.name;
        this.airports.departure = airports.departure.name;
    }

    _makeFlightsRequest(form) {
        const params = {
            airportsCodes: {
                destination: form.airports.destination.iataCode,
                departure: form.airports.departure.iataCode
            },
            dates: Object.assign({}, form.dates),
            limit: 15
        };

        this._FlightsService
            .getFlights(params)
            .then(response => {
                this.isFormSubmitted = true;
                this.flights = response.flights;
            })
            .catch(this._onError.bind(this));
    }

    _onError(error) {
        console.debug("There's a problem with form submit:", error);
    }
}

export default FlightsFinder