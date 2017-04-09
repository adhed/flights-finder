class FlightsForm {
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
        this.onSubmit({
            $event: {
                form: this.form
            }
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