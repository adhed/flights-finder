class AirportsBoxController {
    constructor(AirportsService) {
        'ngInject';

        this._airportsService = AirportsService;  
    }

    $onInit() {
        this._filter = '';
        this.inputs = {
            departure: {
                label: 'Departure',
                selectedAirport: {
                    name: '',
                    iataCode: '',
                },
                limitedRoutes: [],
                filter: '',
                options: []
            },
            destination: {
                label: 'Destination',
                selectedAirport: {
                    name: '',
                    iataCode: '',
                },
                limitedRoutes: [],
                filter: '',
                options: []
            }
        };

        this._updateAvailableAirports();
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
        obj.limitedRoutes = this._airportsService.getPossibleRoutes(this.routes, airportIATACode)
    }

    _swapAirportsInInputs() {
        const term = this.inputs.departure.selectedAirport;
        this.inputs.departure.selectedAirport = Object.assign({}, this.inputs.destination.selectedAirport);
        this.inputs.destination.selectedAirport = Object.assign({}, term);
    }

    _updateParentState() {
        this.onChange({
            $event: {
                airports: {
                    destination: this.inputs.destination.selectedAirport,
                    departure: this.inputs.departure.selectedAirport
                }
            }
        })
    }

    _updateAvailableAirports() {
        this.inputs.departure.options = this._airportsService
            .getAirports(this.allAirports, this.inputs.destination.limitedRoutes, this.inputs.departure.filter);

        this.inputs.destination.options = this._airportsService
            .getAirports(this.allAirports, this.inputs.departure.limitedRoutes, this.inputs.destination.filter);
    }

}

export default AirportsBoxController