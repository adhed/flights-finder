class AirportsBoxController {
    constructor(AirportsService) {
        'ngInject';

        this._AirportsService = AirportsService;        
        this._init();
    }

    _init() {
        this._AirportsService.collectAirports();
    }
}

export default AirportsBoxController