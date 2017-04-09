class FlightsForm {
    $onInit() {
        this.form = {
            airportsCodes: {
                departure: '',
                destination: ''
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
        if (!event.airportsCodes) { return; }

        this.form.airportsCodes = {
            departure: event.airportsCodes.departure,
            destination: event.airportsCodes.destination
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