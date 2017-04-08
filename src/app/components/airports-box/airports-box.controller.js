class AirportsBoxController {
    constructor(AirportsService) {
        'ngInject';

        this._AirportsService = AirportsService;  
    }

    $onInit() {
        this._filter = '';
        this._allAirports = [];
        this._routes = {};
        this.inputs = {
            departure: {
                label: 'Departure:',
                selected: {},
                limitedRoutes: [],
                filter: '',
                options: []
            },
            destination: {
                label: 'Destination:',
                selected: {},
                limitedRoutes: [],
                filter: '',
                options: []
            }
        };

        this._collectAirportsInfo();
    }

    handleDepartureFilterChange(event) {
        this.inputs.departure.filter = event.filter;
        this._updateAvailableAirports();
    }
    
    handleDestinationFilterChange(event) {
        this.inputs.destination.filter = event.filter;
        this._updateAvailableAirports();
    }

    handleDepartureAirportSelect(event) {
        this.inputs.departure.limitedRoutes = this._routes[event.airport.iataCode];
        this.inputs.departure.selected = event.airport;
        this._updateAvailableAirports();
        this._updateParentState();
    }

    handleDestinationAirportSelect(event) {
        this.inputs.destination.limitedRoutes = this._routes[event.airport.iataCode];
        this.inputs.destination.selected = event.airport;
        this._updateAvailableAirports();
        this._updateParentState();
    }

    _updateParentState() {
        this.onChange({
            $event: {
                airportsCodes: {
                    destination: this.inputs.destination.selected.iataCode,
                    departure: this.inputs.departure.selected.iataCode,
                }
            }
        })
    }

    _collectAirportsInfo() {
        this._AirportsService
            .getAirportsInfo()
            .then((response) => {
                if (!response) { return; }
                this._allAirports = response.airports;
                this._routes = response.routes;
                this._updateAvailableAirports();
            })
            .catch((error) => {
                console.debug("Problem with getting airports info:", error);
            });
    }

    _updateAvailableAirports() {
        this.inputs.departure.options = this._AirportsService
            .getFilteredAirports(this._allAirports, this.inputs.destination.limitedRoutes, this.inputs.departure.filter);

        this.inputs.destination.options = this._AirportsService
            .getFilteredAirports(this._allAirports, this.inputs.departure.limitedRoutes, this.inputs.destination.filter);
    }

}

export default AirportsBoxController