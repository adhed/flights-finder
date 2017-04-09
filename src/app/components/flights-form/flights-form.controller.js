class FlightsForm {
    constructor($state, $location) {
        'ngInject';

        this._state = $state;
        this._$location = $location;
    }

    $onInit() {
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
    }

    handleSubmit() {
        console.log('submit');
        this._state.transitionTo('home.flights', {
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