class FlightsForm {
    constructor($state, $location, AirportsService) {
        'ngInject';

        this._state = $state;
        this._$location = $location;
        this._airportsService = AirportsService;
    }

    $onInit() {
        this.loaded = false;
        this.airports = [];
        this.routes = {};
        this.form = {
            airports: {
                departure: {},
                destination: {}
            },
            dates: {
                start: '',
                end: ''
            }
        };

        this._collectAirportsInfo();
    }

     _collectAirportsInfo() {
        this._airportsService
            .getAirportsInfo()
            .then((response) => {
                if (!response) { return; }
                this.airports = response.airports;
                this.routes = response.routes;
            })
            .catch((error) => {
                console.debug("Problem with getting airports info:", error);
            })
            .finally(() => {
                this.loaded = true;
            });
    }

    handleSubmit() {
        this._state.transitionTo('app.home.flights', {
            codeFrom: this.form.airports.departure.iataCode,
            codeTo: this.form.airports.destination.iataCode,
            nameTo: this.form.airports.destination.name,
            nameFrom: this.form.airports.departure.name,
            dateFrom: this.form.dates.start,
            dateTo: this.form.dates.end
        }, {
            inherit: true,
            reload: false,
            location: 'replace'
        });
    }

    handleAirportsChange(event = {}) {
        if (!event.airports) { return; }

        this.form.airports = {
            departure: event.airports.departure,
            destination: event.airports.destination
        };
    }

    handleDateChange(event = {}) {
        if (!event.dates) { return; }

        this.form.dates = {
            start: event.dates.start,
            end: event.dates.end
        };
    }
}

export default FlightsForm