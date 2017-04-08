class AirportsBoxController {
    constructor(AirportsService) {
        'ngInject';

        this._AirportsService = AirportsService;  
        this.inputs = {
            departure: {
                label: 'Departure:'
            },
            destination: {
                label: 'Destination:'
            }
        }      ;
        this._init();
    }

    _init() {
        this._AirportsService.collectAirports();
    }
}

export default AirportsBoxController