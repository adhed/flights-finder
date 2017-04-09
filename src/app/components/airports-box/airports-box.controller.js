class AirportsBoxController {
    constructor(AirportsService) {
        'ngInject';

        this._airportsService = AirportsService;  
    }

    $onInit() {
        this._filter = '';
        this._allAirports = [];
        this._routes = {};
        this.inputs = {
            departure: {
                label: 'Departure:',
                selectedAirport: {
                    name: '',
                    iataCode: '',
                },
                limitedRoutes: [],
                filter: '',
                options: []
            },
            destination: {
                label: 'Destination:',
                selectedAirport: {
                    name: '',
                    iataCode: '',
                },
                limitedRoutes: [],
                filter: '',
                options: []
            }
        };

        this._collectAirportsInfo();
    }

    handleSwapButtonClick() {
        this._swapAirportsInInputs();
        this._updateLimitedRoutes(this.inputs.destination, this.inputs.destination.selectedAirport.iataCode);
        this._updateLimitedRoutes(this.inputs.departure, this.inputs.departure.selectedAirport.iataCode);
        this._updateAvailableAirports();
        this._updateParentState();
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
        this.inputs.departure.selectedAirport = event.airport;
        this._updateLimitedRoutes(this.inputs.departure, event.airport.iataCode);
        this._updateAvailableAirports();
        this._updateParentState();
    }

    handleDestinationAirportSelect(event) {
        this.inputs.destination.selectedAirport = event.airport;
        this._updateLimitedRoutes(this.inputs.destination, event.airport.iataCode);
        this._updateAvailableAirports();
        this._updateParentState();
    }

    _updateLimitedRoutes(obj, airportIATACode) {
        obj.limitedRoutes = this._airportsService.getPossibleRoutes(this._routes, airportIATACode)
    }

    _swapAirportsInInputs() {
        const term = this.inputs.departure.selectedAirport;
        this.inputs.departure.selectedAirport = Object.assign({}, this.inputs.destination.selectedAirport);
        this.inputs.destination.selectedAirport = Object.assign({}, term);
    }

    _updateParentState() {
        this.onChange({
            $event: {
                airportsCodes: {
                    destination: this.inputs.destination.selectedAirport.iataCode,
                    departure: this.inputs.departure.selectedAirport.iataCode,
                }
            }
        })
    }

    _collectAirportsInfo() {
        this._airportsService
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
        this.inputs.departure.options = this._airportsService
            .getAirports(this._allAirports, this.inputs.destination.limitedRoutes, this.inputs.departure.filter);

        this.inputs.destination.options = this._airportsService
            .getAirports(this._allAirports, this.inputs.departure.limitedRoutes, this.inputs.destination.filter);
    }

}

export default AirportsBoxController