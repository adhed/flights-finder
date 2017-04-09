class FlightsFinder {
    constructor($timeout) {
        'ngInject';

        this._$timeout = $timeout;
    }

    $onInit() {
        this.loaded = false;
        this._runLoadedTimeout();
    }

    _runLoadedTimeout() {
        this._$timeout(() => {
            this.loaded = true;
        }, 500);
    }
}

export default FlightsFinder