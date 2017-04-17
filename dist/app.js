webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(14);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(16);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _components = __webpack_require__(17);
	
	var _components2 = _interopRequireDefault(_components);
	
	var _services = __webpack_require__(214);
	
	var _services2 = _interopRequireDefault(_services);
	
	var _directives = __webpack_require__(219);
	
	var _directives2 = _interopRequireDefault(_directives);
	
	var _app = __webpack_require__(221);
	
	var _home = __webpack_require__(222);
	
	var _home2 = _interopRequireDefault(_home);
	
	__webpack_require__(228);
	
	__webpack_require__(238);
	
	__webpack_require__(239);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var requirements = [_angularUiRouter2.default, _components2.default, _services2.default, _directives2.default, _home2.default, 'angular-click-outside'];
	
	_angular2.default.module('app', requirements).config(_app.appConfig);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(14);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _topBar = __webpack_require__(18);
	
	var _topBar2 = _interopRequireDefault(_topBar);
	
	var _flightsFinder = __webpack_require__(25);
	
	var _flightsFinder2 = _interopRequireDefault(_flightsFinder);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var requirements = [_topBar2.default, _flightsFinder2.default];
	
	exports.default = _angular2.default.module('app.components', requirements).name;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(14);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _topBar = __webpack_require__(19);
	
	__webpack_require__(21);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _angular2.default.module('app.components.topBar', []).component('topBar', _topBar.topBar).name;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.topBar = undefined;
	
	var _topBar = __webpack_require__(20);
	
	var _topBar2 = _interopRequireDefault(_topBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var topBar = exports.topBar = {
	    template: _topBar2.default
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<div class=\"top-bar\">\r\n    <div class=\"slogan\">\r\n        <i class=\"fa fa-plane\" aria-hidden=\"true\"></i>\r\n        <h1>Cheap flights finder</h1>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js?config=sassLoader!./top-bar.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js?config=sassLoader!./top-bar.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, ".top-bar {\n  width: 100%;\n  background: #073590;\n  border-bottom: 3px solid #F1C933; }\n  .top-bar .slogan {\n    padding: 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .top-bar h1 {\n    color: #f7f7f7;\n    font-size: 1.5em;\n    font-weight: bold; }\n  .top-bar i {\n    float: left;\n    margin-right: 10px;\n    color: #F1C933; }\n", "", {"version":3,"sources":["/./src/app/components/src/app/components/top-bar/top-bar.scss"],"names":[],"mappings":"AAAA;EACI,YAAY;EACZ,oBAAoB;EACpB,iCAAiC,EAmBpC;EAtBD;IAMQ,cAAc;IACd,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,0BAAoB;QAApB,uBAAoB;YAApB,oBAAoB,EACvB;EATL;IAYQ,eAAe;IACf,iBAAiB;IACjB,kBAAkB,EACrB;EAfL;IAkBQ,YAAY;IACZ,mBAAmB;IACnB,eAAe,EAClB","file":"top-bar.scss","sourcesContent":[".top-bar {\r\n    width: 100%;\r\n    background: #073590;\r\n    border-bottom: 3px solid #F1C933;\r\n    \r\n    .slogan {\r\n        padding: 20px;\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n\r\n    h1 {\r\n        color: #f7f7f7;\r\n        font-size: 1.5em;\r\n        font-weight: bold;\r\n    }\r\n\r\n    i {\r\n        float: left;\r\n        margin-right: 10px;\r\n        color: #F1C933;\r\n    }\r\n}"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 23 */,
/* 24 */,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(14);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _flightsFinder = __webpack_require__(26);
	
	var _flightsForm = __webpack_require__(28);
	
	var _flightsForm2 = _interopRequireDefault(_flightsForm);
	
	var _results = __webpack_require__(192);
	
	var _results2 = _interopRequireDefault(_results);
	
	__webpack_require__(212);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _angular2.default.module('app.components.flightsFinder', [_flightsForm2.default, _results2.default]).component('flightsFinder', _flightsFinder.flightsFinder).name;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.flightsFinder = undefined;
	
	var _flightsFinder = __webpack_require__(27);
	
	var _flightsFinder2 = _interopRequireDefault(_flightsFinder);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var flightsFinder = exports.flightsFinder = {
	    template: _flightsFinder2.default
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<div class=\"flights-finder\">\r\n    <div>\r\n        <div flex=\"grow\">\r\n            <flights-form on-submit=\"$ctrl.handleFormSubmit($event)\"></flights-form>\r\n        </div>\r\n        <div flex=\"grow\">\r\n            <ui-view></ui-view>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(14);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _flightsForm = __webpack_require__(29);
	
	var _airportsBox = __webpack_require__(32);
	
	var _airportsBox2 = _interopRequireDefault(_airportsBox);
	
	var _dateWrapper = __webpack_require__(51);
	
	var _dateWrapper2 = _interopRequireDefault(_dateWrapper);
	
	var _spinner = __webpack_require__(187);
	
	var _spinner2 = _interopRequireDefault(_spinner);
	
	__webpack_require__(190);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _angular2.default.module('app.components.flightsForm', [_airportsBox2.default, _dateWrapper2.default, _spinner2.default]).component('flightsForm', _flightsForm.flightsForm).name;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.flightsForm = undefined;
	
	var _flightsForm = __webpack_require__(30);
	
	var _flightsForm2 = _interopRequireDefault(_flightsForm);
	
	var _flightsForm3 = __webpack_require__(31);
	
	var _flightsForm4 = _interopRequireDefault(_flightsForm3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var flightsForm = exports.flightsForm = {
	    template: _flightsForm2.default,
	    controller: _flightsForm4.default,
	    bindings: {
	        onSubmit: '&'
	    }
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "<div class=\"flights-form\" ng-cloak>\r\n    <form ng-if=\"$ctrl.loaded\" ng-submit=\"$ctrl.handleSubmit()\" autocomplete=\"off\">\r\n        <airports-box \r\n            all-airports=\"$ctrl.airports\"\r\n            routes=\"$ctrl.routes\"\r\n            on-change=\"$ctrl.handleAirportsChange($event)\">\r\n        </airports-box>\r\n        <date-wrapper on-change=\"$ctrl.handleDateChange($event)\"></date-wrapper>\r\n        <div flex=\"66\">\r\n            <button class=\"primary\" type=\"submit\">Find flights</button>\r\n        </div>\r\n    </form>\r\n    <spinner show=\"!$ctrl.loaded\"></spinner>\r\n</div>"

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var FlightsForm = function () {
	    FlightsForm.$inject = ["$state", "$location", "AirportsService"];
	    function FlightsForm($state, $location, AirportsService) {
	        'ngInject';
	
	        _classCallCheck(this, FlightsForm);
	
	        this._state = $state;
	        this._$location = $location;
	        this._airportsService = AirportsService;
	    }
	
	    FlightsForm.prototype.$onInit = function $onInit() {
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
	    };
	
	    FlightsForm.prototype._collectAirportsInfo = function _collectAirportsInfo() {
	        var _this = this;
	
	        this._airportsService.getAirportsInfo().then(function (response) {
	            if (!response) {
	                return;
	            }
	            _this.airports = response.airports;
	            _this.routes = response.routes;
	        }).catch(function (error) {
	            console.debug("Problem with getting airports info:", error);
	        }).finally(function () {
	            _this.loaded = true;
	        });
	    };
	
	    FlightsForm.prototype.handleSubmit = function handleSubmit() {
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
	    };
	
	    FlightsForm.prototype.handleAirportsChange = function handleAirportsChange() {
	        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	        if (!event.airports) {
	            return;
	        }
	
	        this.form.airports = {
	            departure: event.airports.departure,
	            destination: event.airports.destination
	        };
	    };
	
	    FlightsForm.prototype.handleDateChange = function handleDateChange() {
	        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	        if (!event.dates) {
	            return;
	        }
	
	        this.form.dates = {
	            start: event.dates.start,
	            end: event.dates.end
	        };
	    };
	
	    return FlightsForm;
	}();
	
	exports.default = FlightsForm;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(14);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _airportsBox = __webpack_require__(33);
	
	var _airportSelector = __webpack_require__(36);
	
	var _airportSelector2 = _interopRequireDefault(_airportSelector);
	
	__webpack_require__(49);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _angular2.default.module('app.components.airportsBox', [_airportSelector2.default]).component('airportsBox', _airportsBox.airportsBox).name;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.airportsBox = undefined;
	
	var _airportsBox = __webpack_require__(34);
	
	var _airportsBox2 = _interopRequireDefault(_airportsBox);
	
	var _airportsBox3 = __webpack_require__(35);
	
	var _airportsBox4 = _interopRequireDefault(_airportsBox3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var airportsBox = exports.airportsBox = {
	    template: _airportsBox2.default,
	    controller: _airportsBox4.default,
	    bindings: {
	        onChange: '&',
	        allAirports: '<',
	        routes: '<'
	    }
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "<div class=\"airports-box\">\r\n    <div layout-gt-xs=\"row\" layout-xs=\"column\">\r\n        <div flex-xs=\"grow\" flex-gt-xs=\"45\">\r\n            <airport-selector \r\n                label=\"$ctrl.inputs.departure.label\"\r\n                selected=\"$ctrl.inputs.departure.selectedAirport.name\"\r\n                on-filter-change=\"$ctrl.handleDepartureFilterChange($event)\"\r\n                on-select=\"$ctrl.handleDepartureAirportSelect($event)\"\r\n                options=\"$ctrl.inputs.departure.options\">\r\n            </airport-selector>\r\n        </div>\r\n        \r\n        <div flex-xs=\"grow\" flex-gt-xs=\"10\" >\r\n            <div layout=\"column\"\r\n                 class=\"swap-wrapper\"\r\n                 layout-padding\r\n                 layout-align-gt-xs=\"center center\">\r\n                    <div>\r\n                        <a href=\"#\" class=\"link\" title=\"Swap locations\">\r\n                            <i class=\"fa fa-exchange exchange\"\r\n                               ng-click=\"$ctrl.handleSwapButtonClick()\" \r\n                               aria-hidden=\"true\"></i>\r\n                        </a>\r\n                    </div>\r\n            </div>\r\n        </div>\r\n        \r\n        <div flex-xs=\"grow\" flex-gt-xs=\"45\">\r\n            <airport-selector\r\n                label=\"$ctrl.inputs.destination.label\"\r\n                selected=\"$ctrl.inputs.destination.selectedAirport.name\"\r\n                on-filter-change=\"$ctrl.handleDestinationFilterChange($event)\"\r\n                on-select=\"$ctrl.handleDestinationAirportSelect($event)\"\r\n                options=\"$ctrl.inputs.destination.options\">\r\n            </airport-selector>\r\n        </div>\r\n    </div>\r\n    </div>\r\n</div>"

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AirportsBoxController = function () {
	    AirportsBoxController.$inject = ["AirportsService"];
	    function AirportsBoxController(AirportsService) {
	        'ngInject';
	
	        _classCallCheck(this, AirportsBoxController);
	
	        this._airportsService = AirportsService;
	    }
	
	    AirportsBoxController.prototype.$onInit = function $onInit() {
	        this._filter = '';
	        this.inputs = {
	            departure: {
	                label: 'Departure',
	                selectedAirport: {
	                    name: '',
	                    iataCode: ''
	                },
	                limitedRoutes: [],
	                filter: '',
	                options: []
	            },
	            destination: {
	                label: 'Destination',
	                selectedAirport: {
	                    name: '',
	                    iataCode: ''
	                },
	                limitedRoutes: [],
	                filter: '',
	                options: []
	            }
	        };
	
	        this._updateAvailableAirports();
	    };
	
	    AirportsBoxController.prototype.handleSwapButtonClick = function handleSwapButtonClick() {
	        this._swapAirportsInInputs();
	        this._updateLimitedRoutes(this.inputs.destination, this.inputs.destination.selectedAirport.iataCode);
	        this._updateLimitedRoutes(this.inputs.departure, this.inputs.departure.selectedAirport.iataCode);
	        this._updateAvailableAirports();
	        this._updateParentState();
	    };
	
	    AirportsBoxController.prototype.handleDepartureFilterChange = function handleDepartureFilterChange(event) {
	        this.inputs.departure.filter = event.filter;
	        this._updateAvailableAirports();
	    };
	
	    AirportsBoxController.prototype.handleDestinationFilterChange = function handleDestinationFilterChange(event) {
	        this.inputs.destination.filter = event.filter;
	        this._updateAvailableAirports();
	    };
	
	    AirportsBoxController.prototype.handleDepartureAirportSelect = function handleDepartureAirportSelect(event) {
	        this.inputs.departure.selectedAirport = event.airport;
	        this._updateLimitedRoutes(this.inputs.departure, event.airport.iataCode);
	        this._updateAvailableAirports();
	        this._updateParentState();
	    };
	
	    AirportsBoxController.prototype.handleDestinationAirportSelect = function handleDestinationAirportSelect(event) {
	        this.inputs.destination.selectedAirport = event.airport;
	        this._updateLimitedRoutes(this.inputs.destination, event.airport.iataCode);
	        this._updateAvailableAirports();
	        this._updateParentState();
	    };
	
	    AirportsBoxController.prototype._updateLimitedRoutes = function _updateLimitedRoutes(obj, airportIATACode) {
	        obj.limitedRoutes = this._airportsService.getPossibleRoutes(this.routes, airportIATACode);
	    };
	
	    AirportsBoxController.prototype._swapAirportsInInputs = function _swapAirportsInInputs() {
	        var term = this.inputs.departure.selectedAirport;
	        this.inputs.departure.selectedAirport = Object.assign({}, this.inputs.destination.selectedAirport);
	        this.inputs.destination.selectedAirport = Object.assign({}, term);
	    };
	
	    AirportsBoxController.prototype._updateParentState = function _updateParentState() {
	        this.onChange({
	            $event: {
	                airports: {
	                    destination: this.inputs.destination.selectedAirport,
	                    departure: this.inputs.departure.selectedAirport
	                }
	            }
	        });
	    };
	
	    AirportsBoxController.prototype._updateAvailableAirports = function _updateAvailableAirports() {
	        this.inputs.departure.options = this._airportsService.getAirports(this.allAirports, this.inputs.destination.limitedRoutes, this.inputs.departure.filter);
	
	        this.inputs.destination.options = this._airportsService.getAirports(this.allAirports, this.inputs.departure.limitedRoutes, this.inputs.destination.filter);
	    };
	
	    return AirportsBoxController;
	}();
	
	exports.default = AirportsBoxController;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(14);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _airportSelector = __webpack_require__(37);
	
	var _airport = __webpack_require__(41);
	
	var _airport2 = _interopRequireDefault(_airport);
	
	__webpack_require__(47);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _angular2.default.module('app.components.airportSelector', [_airport2.default]).component('airportSelector', _airportSelector.airportSelector).name;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.airportSelector = undefined;
	
	var _airportSelector = __webpack_require__(38);
	
	var _airportSelector2 = _interopRequireDefault(_airportSelector);
	
	var _airportSelector3 = __webpack_require__(39);
	
	var _airportSelector4 = _interopRequireDefault(_airportSelector3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var airportSelector = exports.airportSelector = {
	    template: _airportSelector2.default,
	    controller: _airportSelector4.default,
	    bindings: {
	        options: '<',
	        label: '<',
	        onFilterChange: '&',
	        onSelect: '&',
	        selected: '<'
	    }
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "<div \r\n    class=\"airport-selector\" \r\n    click-outside=\"$ctrl.handleClickOutside()\">\r\n        <div class=\"label-wrapper\">\r\n            <i class=\"fa fa-map-marker\" hide-xs aria-hidden=\"true\"></i>\r\n            <label>{{ $ctrl.label }}:</label>\r\n        </div>\r\n        \r\n        <input \r\n            type=\"text\" \r\n            ng-model=\"$ctrl.selected\"\r\n            ng-click=\"$ctrl.handleInputClick()\"\r\n            placeholder=\"Choose your {{ $ctrl.label  }} Airport\"\r\n            ng-keydown=\"$ctrl.handleKeyDown($event)\"\r\n            required\r\n            ng-change=\"$ctrl.onFilterChange({ $event: { filter: $ctrl.selected } })\"/>\r\n        <div \r\n            class=\"options\" \r\n            ng-show=\"$ctrl.showOptions\">\r\n                <airport \r\n                    params=\"option\"\r\n                    filter=\"$ctrl.selected\"\r\n                    on-click=\"$ctrl.handleOptionClick(option)\"\r\n                    ng-repeat=\"option in $ctrl.options\">\r\n                </airport>\r\n        </div>\r\n</div>\r\n"

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(40);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AirportSelector = function () {
	    function AirportSelector() {
	        _classCallCheck(this, AirportSelector);
	    }
	
	    AirportSelector.prototype.$onInit = function $onInit() {
	        this.selected = '';
	        this.showOptions = false;
	        this._shouldBeOptionsVisible = false;
	    };
	
	    AirportSelector.prototype.$onChanges = function $onChanges() {
	        this._updateShowOptions();
	    };
	
	    AirportSelector.prototype.handleInputClick = function handleInputClick() {
	        this._shouldBeOptionsVisible = true;
	        this._updateShowOptions();
	    };
	
	    AirportSelector.prototype.handleInputBlur = function handleInputBlur() {
	        this._shouldBeOptionsVisible = false;
	        this._updateShowOptions();
	    };
	
	    AirportSelector.prototype.handleOptionClick = function handleOptionClick(airport) {
	        this._shouldBeOptionsVisible = false;
	        this._updateShowOptions();
	        this.selected = airport.name;
	        this.onFilterChange({ $event: { filter: this.selected } });
	        this.onSelect({ $event: { airport: airport } });
	    };
	
	    AirportSelector.prototype.handleClickOutside = function handleClickOutside() {
	        this._shouldBeOptionsVisible = false;
	        this._updateShowOptions();
	    };
	
	    AirportSelector.prototype.handleKeyDown = function handleKeyDown(event) {
	        if (event.key === 'Backspace') {
	            this._handleBackspace();
	        }
	    };
	
	    AirportSelector.prototype._handleBackspace = function _handleBackspace() {
	        this.onSelect({ $event: { airport: {} } });
	        this.onFilterChange({ $event: { filter: '' } });
	    };
	
	    AirportSelector.prototype._updateShowOptions = function _updateShowOptions() {
	        this.showOptions = this._shouldBeOptionsVisible && !!this.options.length;
	    };
	
	    return AirportSelector;
	}();
	
	exports.default = AirportSelector;

/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var debounce = exports.debounce = function debounce(callback, wait) {
	    var timeout = void 0;
	    return function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        var context = this;
	        clearTimeout(timeout);
	        timeout = setTimeout(function () {
	            callback.apply(context, args);
	        }, wait);
	    };
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(14);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _airport = __webpack_require__(42);
	
	__webpack_require__(45);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _angular2.default.module('app.components.airport', []).component('airport', _airport.airport).name;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.airport = undefined;
	
	var _airport = __webpack_require__(43);
	
	var _airport2 = _interopRequireDefault(_airport);
	
	var _airport3 = __webpack_require__(44);
	
	var _airport4 = _interopRequireDefault(_airport3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var airport = exports.airport = {
	    controller: _airport4.default,
	    bindings: {
	        params: '<',
	        onClick: '&',
	        filter: '<'
	    },
	    template: _airport2.default
	
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "<div class=\"airport\" ng-click=\"$ctrl.onClick()\">\r\n    <i class=\"fa fa-plane airport-icon\" aria-hidden=\"true\"></i>\r\n    <div class=\"airport-params\">\r\n        <span class=\"airport-name\" ng-bind-html=\"$ctrl.parseByFilter($ctrl.params.name)\">\r\n        </span>\r\n        <small ng-bind-html=\"$ctrl.parseByFilter($ctrl.params.iataCode)\">\r\n        </small>\r\n        <span class=\"airport-country\" ng-bind-html=\"$ctrl.parseByFilter($ctrl.params.country)\"></span>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Airport = function () {
	    Airport.$inject = ["$sce"];
	    function Airport($sce) {
	        'ngInject';
	
	        _classCallCheck(this, Airport);
	
	        this._$sce = $sce;
	    }
	
	    Airport.prototype.$onInit = function $onInit() {
	        this._highlightedPattern = '<span class="highlighted">$&</span>';
	    };
	
	    Airport.prototype.$onChanges = function $onChanges() {
	        this._filterRegex = new RegExp(this.filter, 'gi');
	    };
	
	    Airport.prototype.parseByFilter = function parseByFilter(text) {
	        if (!this.filter) {
	            return this._$sce.trustAsHtml(text);
	        }
	
	        return this._$sce.trustAsHtml(this._getParsedText(text));
	    };
	
	    Airport.prototype._getParsedText = function _getParsedText(text) {
	        return text.replace(this._filterRegex, this._highlightedPattern);
	    };
	
	    return Airport;
	}();
	
	exports.default = Airport;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(46);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/sass-loader/index.js?config=sassLoader!./airport.scss", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/sass-loader/index.js?config=sassLoader!./airport.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, ".airport {\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 3px 0 3px 0;\n  padding: 5px 0 5px 0;\n  border-bottom: 1px solid #eaeaea;\n  outline: none;\n  border-top: 1px solid transparent; }\n  .airport .airport-country {\n    display: block;\n    font-style: italic; }\n  .airport .airport-icon {\n    padding: 0 10px 0 10px;\n    color: #6f6f6f; }\n  .airport .highlighted {\n    color: #3c3b3b;\n    background: #f5e8b6;\n    font-weight: bold; }\n\n.airport:hover {\n  background: #f1c933;\n  border-bottom: 1px solid #969393;\n  border-top: 1px solid #969393; }\n\n.aiport:focus {\n  background: lightcoral; }\n", "", {"version":3,"sources":["/./src/app/components/airport-selector/src/app/components/airport-selector/airport/airport.scss"],"names":[],"mappings":"AAAA;EACI,gBAAgB;EAChB,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,0BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,oBAAoB;EACpB,qBAAqB;EACrB,iCAAiC;EACjC,cAAc;EACd,kCAAkC,EAiBrC;EAzBD;IAWQ,eAAe;IACf,mBAAmB,EACtB;EAbL;IAgBQ,uBAAuB;IACvB,eAAe,EAClB;EAlBL;IAqBQ,eAAe;IACf,oBAAe;IACf,kBAAkB,EACrB;;AAGL;EACI,oBAAoB;EACpB,iCAAiC;EACjC,8BAA8B,EACjC;;AAED;EACI,uBAAuB,EAC1B","file":"airport.scss","sourcesContent":[".airport {\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    margin: 3px 0 3px 0;\r\n    padding: 5px 0 5px 0;\r\n    border-bottom: 1px solid #eaeaea;\r\n    outline: none;\r\n    border-top: 1px solid transparent;\r\n\r\n    .airport-country {\r\n        display: block;\r\n        font-style: italic;\r\n    }\r\n\r\n    .airport-icon {\r\n        padding: 0 10px 0 10px;\r\n        color: #6f6f6f;\r\n    }\r\n\r\n    .highlighted {\r\n        color: #3c3b3b;\r\n        background: rgb(245, 232, 182);\r\n        font-weight: bold;\r\n    }\r\n}\r\n\r\n.airport:hover {\r\n    background: #f1c933;\r\n    border-bottom: 1px solid #969393;\r\n    border-top: 1px solid #969393;\r\n}\r\n\r\n.aiport:focus {\r\n    background: lightcoral;\r\n}"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(48);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js?config=sassLoader!./airport-selector.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js?config=sassLoader!./airport-selector.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, ".airport-selector {\n  position: relative; }\n  .airport-selector .label-wrapper {\n    box-sizing: border-box;\n    background: #bcd4e6;\n    border: 1px solid #5d5959;\n    border-bottom: 0;\n    width: 50%;\n    border-radius: 5px 5px 0 0;\n    padding: 5px 10px 5px 0; }\n    .airport-selector .label-wrapper i {\n      padding: 0 0 0 12px;\n      float: left; }\n    .airport-selector .label-wrapper label {\n      padding-left: 10px;\n      color: #545454; }\n  .airport-selector input {\n    padding: 15px;\n    color: #073590;\n    font-size: 1.2em;\n    font-weight: bold;\n    border: 0;\n    background: #fafafa;\n    width: 100%;\n    box-sizing: border-box;\n    outline: none;\n    border: 1px solid #5d5959; }\n  .airport-selector input:focus {\n    background: #f5e8b6; }\n  .airport-selector .options {\n    position: absolute;\n    width: 100%;\n    box-sizing: border-box;\n    max-height: 200px;\n    overflow-y: auto;\n    background: whitesmoke;\n    border: 1px solid black;\n    padding: 3px;\n    z-index: 5; }\n  .airport-selector *::-webkit-input-placeholder {\n    color: #b9b9b9;\n    font-size: 0.9em; }\n  .airport-selector *:-moz-placeholder {\n    color: #b9b9b9;\n    font-size: 0.9em; }\n", "", {"version":3,"sources":["/./src/app/components/src/app/components/airport-selector/airport-selector.scss"],"names":[],"mappings":"AAAA;EACI,mBAAmB,EA2DtB;EA5DD;IAIQ,uBAAuB;IACvB,oBAAoB;IACpB,0BAA0B;IAC1B,iBAAiB;IACjB,WAAW;IACX,2BAA2B;IAC3B,wBAAwB,EAW3B;IArBL;MAagB,oBAAoB;MACpB,YAAY,EACf;IAfb;MAkBgB,mBAAmB;MACnB,eAAe,EAClB;EApBb;IAwBQ,cAAc;IACd,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,oBAAoB;IACpB,YAAY;IACZ,uBAAuB;IACvB,cAAc;IACd,0BAA0B,EAC7B;EAlCL;IAqCQ,oBAAe,EAClB;EAtCL;IAyCQ,mBAAmB;IACnB,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,iBAAiB;IACjB,uBAAuB;IACvB,wBAAwB;IACxB,aAAa;IACb,WAAW,EACd;EAlDL;IAqDQ,eAAe;IACf,iBAAiB,EACpB;EAvDL;IAyDQ,eAAe;IACf,iBAAiB,EACpB","file":"airport-selector.scss","sourcesContent":[".airport-selector {\r\n    position: relative;\r\n\r\n    .label-wrapper {\r\n        box-sizing: border-box;\r\n        background: #bcd4e6;\r\n        border: 1px solid #5d5959;\r\n        border-bottom: 0;\r\n        width: 50%;\r\n        border-radius: 5px 5px 0 0;\r\n        padding: 5px 10px 5px 0;\r\n\r\n            i {\r\n                padding: 0 0 0 12px;\r\n                float: left;\r\n            }\r\n\r\n            label {\r\n                padding-left: 10px;\r\n                color: #545454;\r\n            }\r\n    }\r\n\r\n    input {\r\n        padding: 15px;\r\n        color: #073590;\r\n        font-size: 1.2em;\r\n        font-weight: bold;\r\n        border: 0;\r\n        background: #fafafa;\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n        outline: none;\r\n        border: 1px solid #5d5959;\r\n    }\r\n\r\n    input:focus {\r\n        background: rgb(245, 232, 182);\r\n    }\r\n\r\n    .options {\r\n        position: absolute;\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n        max-height: 200px;\r\n        overflow-y: auto;\r\n        background: whitesmoke;\r\n        border: 1px solid black;\r\n        padding: 3px;\r\n        z-index: 5;\r\n    }\r\n\r\n    *::-webkit-input-placeholder {\r\n        color: #b9b9b9;\r\n        font-size: 0.9em;\r\n    }\r\n    *:-moz-placeholder {\r\n        color: #b9b9b9;\r\n        font-size: 0.9em;\r\n    }\r\n}"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(50);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js?config=sassLoader!./airports-box.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js?config=sassLoader!./airports-box.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, ".airports-box .exchange {\n  color: whitesmoke;\n  cursor: pointer;\n  outline: none; }\n\n.airports-box a {\n  cursor: default; }\n\n.airports-box .swap-wrapper {\n  height: 100%; }\n", "", {"version":3,"sources":["/./src/app/components/src/app/components/airports-box/airports-box.scss"],"names":[],"mappings":"AAAA;EAEQ,kBAAkB;EAClB,gBAAgB;EAChB,cAAc,EACjB;;AALL;EAQQ,gBAAgB,EACnB;;AATL;EAYQ,aAAa,EAChB","file":"airports-box.scss","sourcesContent":[".airports-box {\r\n    .exchange {\r\n        color: whitesmoke;\r\n        cursor: pointer;\r\n        outline: none;\r\n    }\r\n\r\n    a {\r\n        cursor: default;\r\n    }\r\n\r\n    .swap-wrapper {\r\n        height: 100%;\r\n    }\r\n}\r\n\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(14);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _moment = __webpack_require__(52);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _dateWrapper = __webpack_require__(170);
	
	var _dateSelector = __webpack_require__(173);
	
	var _dateSelector2 = _interopRequireDefault(_dateSelector);
	
	__webpack_require__(185);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _angular2.default.module('app.components.dateWrapper', [_dateSelector2.default]).component('dateWrapper', _dateWrapper.dateWrapperComponent).name;

/***/ },
/* 52 */,
/* 53 */,
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./af": 55,
		"./af.js": 55,
		"./ar": 56,
		"./ar-dz": 57,
		"./ar-dz.js": 57,
		"./ar-kw": 58,
		"./ar-kw.js": 58,
		"./ar-ly": 59,
		"./ar-ly.js": 59,
		"./ar-ma": 60,
		"./ar-ma.js": 60,
		"./ar-sa": 61,
		"./ar-sa.js": 61,
		"./ar-tn": 62,
		"./ar-tn.js": 62,
		"./ar.js": 56,
		"./az": 63,
		"./az.js": 63,
		"./be": 64,
		"./be.js": 64,
		"./bg": 65,
		"./bg.js": 65,
		"./bn": 66,
		"./bn.js": 66,
		"./bo": 67,
		"./bo.js": 67,
		"./br": 68,
		"./br.js": 68,
		"./bs": 69,
		"./bs.js": 69,
		"./ca": 70,
		"./ca.js": 70,
		"./cs": 71,
		"./cs.js": 71,
		"./cv": 72,
		"./cv.js": 72,
		"./cy": 73,
		"./cy.js": 73,
		"./da": 74,
		"./da.js": 74,
		"./de": 75,
		"./de-at": 76,
		"./de-at.js": 76,
		"./de-ch": 77,
		"./de-ch.js": 77,
		"./de.js": 75,
		"./dv": 78,
		"./dv.js": 78,
		"./el": 79,
		"./el.js": 79,
		"./en-au": 80,
		"./en-au.js": 80,
		"./en-ca": 81,
		"./en-ca.js": 81,
		"./en-gb": 82,
		"./en-gb.js": 82,
		"./en-ie": 83,
		"./en-ie.js": 83,
		"./en-nz": 84,
		"./en-nz.js": 84,
		"./eo": 85,
		"./eo.js": 85,
		"./es": 86,
		"./es-do": 87,
		"./es-do.js": 87,
		"./es.js": 86,
		"./et": 88,
		"./et.js": 88,
		"./eu": 89,
		"./eu.js": 89,
		"./fa": 90,
		"./fa.js": 90,
		"./fi": 91,
		"./fi.js": 91,
		"./fo": 92,
		"./fo.js": 92,
		"./fr": 93,
		"./fr-ca": 94,
		"./fr-ca.js": 94,
		"./fr-ch": 95,
		"./fr-ch.js": 95,
		"./fr.js": 93,
		"./fy": 96,
		"./fy.js": 96,
		"./gd": 97,
		"./gd.js": 97,
		"./gl": 98,
		"./gl.js": 98,
		"./gom-latn": 99,
		"./gom-latn.js": 99,
		"./he": 100,
		"./he.js": 100,
		"./hi": 101,
		"./hi.js": 101,
		"./hr": 102,
		"./hr.js": 102,
		"./hu": 103,
		"./hu.js": 103,
		"./hy-am": 104,
		"./hy-am.js": 104,
		"./id": 105,
		"./id.js": 105,
		"./is": 106,
		"./is.js": 106,
		"./it": 107,
		"./it.js": 107,
		"./ja": 108,
		"./ja.js": 108,
		"./jv": 109,
		"./jv.js": 109,
		"./ka": 110,
		"./ka.js": 110,
		"./kk": 111,
		"./kk.js": 111,
		"./km": 112,
		"./km.js": 112,
		"./kn": 113,
		"./kn.js": 113,
		"./ko": 114,
		"./ko.js": 114,
		"./ky": 115,
		"./ky.js": 115,
		"./lb": 116,
		"./lb.js": 116,
		"./lo": 117,
		"./lo.js": 117,
		"./lt": 118,
		"./lt.js": 118,
		"./lv": 119,
		"./lv.js": 119,
		"./me": 120,
		"./me.js": 120,
		"./mi": 121,
		"./mi.js": 121,
		"./mk": 122,
		"./mk.js": 122,
		"./ml": 123,
		"./ml.js": 123,
		"./mr": 124,
		"./mr.js": 124,
		"./ms": 125,
		"./ms-my": 126,
		"./ms-my.js": 126,
		"./ms.js": 125,
		"./my": 127,
		"./my.js": 127,
		"./nb": 128,
		"./nb.js": 128,
		"./ne": 129,
		"./ne.js": 129,
		"./nl": 130,
		"./nl-be": 131,
		"./nl-be.js": 131,
		"./nl.js": 130,
		"./nn": 132,
		"./nn.js": 132,
		"./pa-in": 133,
		"./pa-in.js": 133,
		"./pl": 134,
		"./pl.js": 134,
		"./pt": 135,
		"./pt-br": 136,
		"./pt-br.js": 136,
		"./pt.js": 135,
		"./ro": 137,
		"./ro.js": 137,
		"./ru": 138,
		"./ru.js": 138,
		"./sd": 139,
		"./sd.js": 139,
		"./se": 140,
		"./se.js": 140,
		"./si": 141,
		"./si.js": 141,
		"./sk": 142,
		"./sk.js": 142,
		"./sl": 143,
		"./sl.js": 143,
		"./sq": 144,
		"./sq.js": 144,
		"./sr": 145,
		"./sr-cyrl": 146,
		"./sr-cyrl.js": 146,
		"./sr.js": 145,
		"./ss": 147,
		"./ss.js": 147,
		"./sv": 148,
		"./sv.js": 148,
		"./sw": 149,
		"./sw.js": 149,
		"./ta": 150,
		"./ta.js": 150,
		"./te": 151,
		"./te.js": 151,
		"./tet": 152,
		"./tet.js": 152,
		"./th": 153,
		"./th.js": 153,
		"./tl-ph": 154,
		"./tl-ph.js": 154,
		"./tlh": 155,
		"./tlh.js": 155,
		"./tr": 156,
		"./tr.js": 156,
		"./tzl": 157,
		"./tzl.js": 157,
		"./tzm": 158,
		"./tzm-latn": 159,
		"./tzm-latn.js": 159,
		"./tzm.js": 158,
		"./uk": 160,
		"./uk.js": 160,
		"./ur": 161,
		"./ur.js": 161,
		"./uz": 162,
		"./uz-latn": 163,
		"./uz-latn.js": 163,
		"./uz.js": 162,
		"./vi": 164,
		"./vi.js": 164,
		"./x-pseudo": 165,
		"./x-pseudo.js": 165,
		"./yo": 166,
		"./yo.js": 166,
		"./zh-cn": 167,
		"./zh-cn.js": 167,
		"./zh-hk": 168,
		"./zh-hk.js": 168,
		"./zh-tw": 169,
		"./zh-tw.js": 169
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 54;


/***/ },
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dateWrapperComponent = undefined;
	
	var _dateWrapper = __webpack_require__(171);
	
	var _dateWrapper2 = _interopRequireDefault(_dateWrapper);
	
	var _dateWrapper3 = __webpack_require__(172);
	
	var _dateWrapper4 = _interopRequireDefault(_dateWrapper3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dateWrapperComponent = exports.dateWrapperComponent = {
	  bindings: {
	    startDate: '=',
	    endDate: '=',
	    onChange: '&'
	  },
	  template: _dateWrapper2.default,
	  controller: _dateWrapper4.default
	};

/***/ },
/* 171 */
/***/ function(module, exports) {

	module.exports = "<div class=\"date-wrapper\">\r\n  <div layout-gt-xs=\"row\" layout-xs=\"column\" layout-align-xs=\"space-between none\">\r\n    <div flex-gt-xs=\"45\" flex-xs=\"grow\">\r\n      <date-selector \r\n        placeholder=\"$ctrl.dates.start.placeholder\"\r\n        max-date=\"$ctrl.dates.end.value\"\r\n        label=\"$ctrl.dates.start.label\"\r\n        date=\"$ctrl.dates.start.value\"\r\n        on-change=\"$ctrl.handleStartDateChange($event)\">\r\n      </date-selector>\r\n    </div>\r\n\r\n    <div flex-xs=\"grow\" flex-gt-xs=\"10\">&ensp;</div>\r\n\r\n    <div flex-gt-xs=\"45\" flex-xs=\"grow\">\r\n      <date-selector \r\n        placeholder=\"$ctrl.dates.end.placeholder\"\r\n        min-date=\"$ctrl.dates.start.value\"\r\n        label=\"$ctrl.dates.end.label\"\r\n        date=\"$ctrl.dates.end.value\"\r\n        on-change=\"$ctrl.handleEndDateChange($event)\">\r\n      </date-selector>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ },
/* 172 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DateWrapper = function () {
	  DateWrapper.$inject = ["DatesService"];
	  function DateWrapper(DatesService) {
	    'ngInject';
	
	    _classCallCheck(this, DateWrapper);
	
	    this._datesService = DatesService;
	  }
	
	  DateWrapper.prototype.$onInit = function $onInit() {
	
	    this.dates = {
	      start: {
	        label: 'Fly out:',
	        value: new Date()
	      },
	      end: {
	        label: 'Fly back:',
	        value: this._datesService.getDateWithOffset(7)
	      }
	    };
	
	    this._updateParentState();
	  };
	
	  DateWrapper.prototype.handleStartDateChange = function handleStartDateChange(event) {
	    this.dates.start.value = event.date;
	    this._updateParentState();
	  };
	
	  DateWrapper.prototype.handleEndDateChange = function handleEndDateChange(event) {
	    this.dates.end.value = event.date;
	    this._updateParentState();
	  };
	
	  DateWrapper.prototype._updateParentState = function _updateParentState(event) {
	    this.onChange({
	      $event: {
	        dates: {
	          end: this._datesService.getParsedISODate(this.dates.end.value),
	          start: this._datesService.getParsedISODate(this.dates.start.value)
	        }
	      }
	    });
	  };
	
	  return DateWrapper;
	}();
	
	exports.default = DateWrapper;

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(14);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularAria = __webpack_require__(174);
	
	var _angularAria2 = _interopRequireDefault(_angularAria);
	
	var _angularAnimate = __webpack_require__(176);
	
	var _angularAnimate2 = _interopRequireDefault(_angularAnimate);
	
	var _angularMaterial = __webpack_require__(178);
	
	var _angularMaterial2 = _interopRequireDefault(_angularMaterial);
	
	var _dateSelector = __webpack_require__(180);
	
	__webpack_require__(183);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _angular2.default.module('app.components.dateSelector', [_angularMaterial2.default]).component('dateSelector', _dateSelector.dateSelectorComponent).name;

/***/ },
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dateSelectorComponent = undefined;
	
	var _dateSelector = __webpack_require__(181);
	
	var _dateSelector2 = _interopRequireDefault(_dateSelector);
	
	var _dateSelector3 = __webpack_require__(182);
	
	var _dateSelector4 = _interopRequireDefault(_dateSelector3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dateSelectorComponent = exports.dateSelectorComponent = {
	  bindings: {
	    placeHolder: '<',
	    label: '<',
	    date: '<',
	    onChange: '&',
	    minDate: '<',
	    maxDate: '<'
	  },
	  template: _dateSelector2.default,
	  controller: _dateSelector4.default
	};

/***/ },
/* 181 */
/***/ function(module, exports) {

	module.exports = "<div class=\"date-selector\">\r\n    <div flex-xs=\"45\">\r\n        <i class=\"fa fa-calendar calendar\" aria-hidden=\"true\"></i>\r\n        <label>{{ $ctrl.label }}</label>\r\n    </div>\r\n\r\n    <div flex-xs=\"grow\">\r\n        <div class=\"date-picker-wrapper\">\r\n            <md-datepicker \r\n                md-open-on-focus=\"true\"\r\n                md-hide-icons=\"calendar\"\r\n                md-min-date=\"$ctrl.minDate\"\r\n                md-max-date=\"$ctrl.maxDate\"\r\n                required\r\n                ng-change=\"$ctrl.onChange({ $event: { date: $ctrl.date } })\"\r\n                ng-model=\"::$ctrl.date\">\r\n            </md-datepicker>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ },
/* 182 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DateSelector = function DateSelector() {
	  _classCallCheck(this, DateSelector);
	};
	
	exports.default = DateSelector;

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(184);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js?config=sassLoader!./date-selector.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js?config=sassLoader!./date-selector.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, ".date-selector {\n  background: #fafafa;\n  padding: 5px;\n  height: 35px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  outline: none;\n  border: 1px solid #5d5959; }\n  .date-selector .calendar {\n    margin-left: 10px; }\n  .date-selector label {\n    margin: 0 10px 0 10px; }\n  .date-selector .date-picker-wrapper {\n    margin-top: 5px;\n    margin-left: 15px; }\n", "", {"version":3,"sources":["/./src/app/components/src/app/components/date-selector/date-selector.scss"],"names":[],"mappings":"AAAA;EACI,oBAAoB;EACpB,aAAa;EACb,aAAa;EACb,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,0BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,cAAc;EACd,0BAA0B,EAc7B;EArBD;IAUQ,kBAAkB,EACrB;EAXL;IAcQ,sBAAsB,EACzB;EAfL;IAkBQ,gBAAgB;IAChB,kBAAkB,EACrB","file":"date-selector.scss","sourcesContent":[".date-selector {\r\n    background: #fafafa;\r\n    padding: 5px;\r\n    height: 35px;\r\n    display: flex;\r\n    align-items: center;\r\n    outline: none;\r\n    border: 1px solid #5d5959;\r\n\r\n    .calendar {\r\n        margin-left: 10px;\r\n    }\r\n\r\n    label {\r\n        margin: 0 10px 0 10px;\r\n    }\r\n\r\n    .date-picker-wrapper {\r\n        margin-top: 5px;\r\n        margin-left: 15px;\r\n    }\r\n}"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(186);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js?config=sassLoader!./date-wrapper.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js?config=sassLoader!./date-wrapper.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, ".date-wrapper {\n  margin: 20px 0 25px 0; }\n  .date-wrapper .empty-block {\n    content: 'sa'; }\n", "", {"version":3,"sources":["/./src/app/components/src/app/components/date-wrapper/date-wrapper.scss"],"names":[],"mappings":"AAAA;EACI,sBAAsB,EAKzB;EAND;IAIQ,cACH,EAAC","file":"date-wrapper.scss","sourcesContent":[".date-wrapper {\r\n    margin: 20px 0 25px 0;\r\n\r\n    .empty-block {\r\n        content: 'sa'\r\n    }\r\n}"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(14);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _spinner = __webpack_require__(188);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _angular2.default.module('app.components.spinner', []).component('spinner', _spinner.spinner).name;

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.spinner = undefined;
	
	var _spinner = __webpack_require__(189);
	
	var _spinner2 = _interopRequireDefault(_spinner);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var spinner = exports.spinner = {
	    template: _spinner2.default,
	    bindings: {
	        show: '<'
	    }
	};

/***/ },
/* 189 */
/***/ function(module, exports) {

	module.exports = "<div class=\"loader\" ng-show=\"$ctrl.show\">\r\n    <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n    <span class=\"sr-only\">Loading...</span>\r\n</div>"

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(191);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js?config=sassLoader!./flights-form.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js?config=sassLoader!./flights-form.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, ".flights-form {\n  padding: 15px;\n  background-image: linear-gradient(to top, #1e8adf, #2994e6);\n  border: 3px solid darkblue;\n  border-radius: 10px;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.66);\n  margin: 25px 0 25px 0; }\n  .flights-form button.primary {\n    background-color: #F1C933;\n    border: 2px solid #F1C933;\n    padding: 10px 40px 10px 40px;\n    font-size: 1.5em;\n    border-radius: 10px;\n    font-weight: bold;\n    color: #073590;\n    width: 100%; }\n  .flights-form button.primary:hover {\n    cursor: pointer;\n    background-color: #d8b120;\n    border: 2px solid #d8b120; }\n", "", {"version":3,"sources":["/./src/app/components/src/app/components/flights-form/flights-form.scss"],"names":[],"mappings":"AAAA;EACI,cAAc;EACd,4DAAiC;EACjC,2BAA2B;EAC3B,oBAAoB;EACpB,4CAA4B;EAC5B,sBAAsB,EAkBzB;EAxBD;IASQ,0BAA0B;IAC1B,0BAA0B;IAC1B,6BAA6B;IAC7B,iBAAiB;IACjB,oBAAoB;IACpB,kBAAkB;IAClB,eAAe;IACf,YAAY,EACf;EAjBL;IAoBQ,gBAAgB;IAChB,0BAA0B;IAC1B,0BAA0B,EAC7B","file":"flights-form.scss","sourcesContent":[".flights-form {\r\n    padding: 15px;\r\n    background-image: linear-gradient(to top,#1e8adf,#2994e6);\r\n    border: 3px solid darkblue;\r\n    border-radius: 10px;\r\n    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.66);\r\n    margin: 25px 0 25px 0;\r\n\r\n    button.primary {\r\n        background-color: #F1C933;\r\n        border: 2px solid #F1C933;\r\n        padding: 10px 40px 10px 40px;\r\n        font-size: 1.5em;\r\n        border-radius: 10px;\r\n        font-weight: bold;\r\n        color: #073590;\r\n        width: 100%;\r\n    }\r\n\r\n    button.primary:hover {\r\n        cursor: pointer;\r\n        background-color: #d8b120;\r\n        border: 2px solid #d8b120;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(14);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _results = __webpack_require__(193);
	
	var _results2 = __webpack_require__(196);
	
	var _headline = __webpack_require__(197);
	
	var _headline2 = _interopRequireDefault(_headline);
	
	var _flightsList = __webpack_require__(202);
	
	var _flightsList2 = _interopRequireDefault(_flightsList);
	
	var _spinner = __webpack_require__(187);
	
	var _spinner2 = _interopRequireDefault(_spinner);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _angular2.default.module('app.components.results', [_headline2.default, _flightsList2.default, _spinner2.default]).component('results', _results.results).config(_results2.resultsConfig).name;

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.results = undefined;
	
	var _results = __webpack_require__(194);
	
	var _results2 = _interopRequireDefault(_results);
	
	var _results3 = __webpack_require__(195);
	
	var _results4 = _interopRequireDefault(_results3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var results = exports.results = {
	    template: _results2.default,
	    controller: _results4.default
	};

/***/ },
/* 194 */
/***/ function(module, exports) {

	module.exports = "<div ng-show=\"$ctrl.areResultsAvailable\">\r\n    <headline\r\n        airports=\"$ctrl.airports\"\r\n        flights-length=\"$ctrl.flights.length\">\r\n    </headline>\r\n    <flights-list \r\n        flights=\"$ctrl.flights\">\r\n    </flights-list>\r\n</div>\r\n<spinner show=\"!$ctrl.areResultsAvailable\"><spinner>"

/***/ },
/* 195 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Results = function () {
	    Results.$inject = ["$state", "FlightsService"];
	    function Results($state, FlightsService) {
	        'ngInject';
	
	        _classCallCheck(this, Results);
	
	        this._$state = $state;
	        this._flightsService = FlightsService;
	        this._stateParams = this._getParsedStateParams(this._$state.params);
	    }
	
	    Results.prototype.$onInit = function $onInit() {
	        this.flights = [];
	        this.airports = {};
	        this.areResultsAvailable = false;
	        this._handleStateParams();
	    };
	
	    Results.prototype._handleStateParams = function _handleStateParams() {
	        if (!this._stateParams) {
	            return;
	        }
	
	        this._assignAirportsNames();
	        this._makeFlightsRequest();
	    };
	
	    Results.prototype._assignAirportsNames = function _assignAirportsNames() {
	        this.airports = this._stateParams.airportsNames;
	    };
	
	    Results.prototype._getParsedStateParams = function _getParsedStateParams(stateParams) {
	        if (!this._areStateParamsCorrect(stateParams)) {
	            return null;
	        }
	
	        return {
	            airportsCodes: {
	                destination: stateParams.codeTo,
	                departure: stateParams.codeFrom
	            },
	            dates: {
	                start: stateParams.dateFrom,
	                end: stateParams.dateTo
	            },
	            airportsNames: {
	                destination: stateParams.nameTo,
	                departure: stateParams.nameFrom
	            }
	        };
	    };
	
	    Results.prototype._areStateParamsCorrect = function _areStateParamsCorrect(stateParams) {
	        return !!stateParams && !!stateParams.dateFrom && !!stateParams.dateTo && !!stateParams.nameTo && !!stateParams.nameFrom && !!stateParams.codeFrom && !!stateParams.codeTo;
	    };
	
	    Results.prototype._makeFlightsRequest = function _makeFlightsRequest() {
	        var _this = this;
	
	        var params = Object.assign({}, this._stateParams, { limit: 15 });
	
	        this._flightsService.getFlights(params).then(function (response) {
	            _this.flights = response.flights;
	        }).catch(this._onError.bind(this)).finally(function () {
	            return _this.areResultsAvailable = true;
	        });
	    };
	
	    Results.prototype._onError = function _onError(error) {
	        console.debug("There's a problem with form submit:", error);
	    };
	
	    return Results;
	}();
	
	exports.default = Results;

/***/ },
/* 196 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var resultsConfig = exports.resultsConfig = ["$stateProvider", "$urlRouterProvider", function resultsConfig($stateProvider, $urlRouterProvider) {
	    'ngInject';
	
	    $stateProvider.state('app.home.flights', {
	        url: 'flights/:codeFrom/:codeTo/:nameFrom/:nameTo/:dateFrom/:dateTo',
	        component: 'results'
	
	    });
	}];

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(14);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _headline = __webpack_require__(198);
	
	__webpack_require__(200);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _angular2.default.module('app.components.headline', []).component('headline', _headline.headline).name;

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.headline = undefined;
	
	var _headline = __webpack_require__(199);
	
	var _headline2 = _interopRequireDefault(_headline);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var headline = exports.headline = {
	    template: _headline2.default,
	    bindings: {
	        flightsLength: '<',
	        airports: '<'
	    }
	};

/***/ },
/* 199 */
/***/ function(module, exports) {

	module.exports = "<div class=\"headline\">\r\n    <span class=\"form-result\" ng-show=\"!!$ctrl.flightsLength\">\r\n    Found {{ $ctrl.flightsLength }} {{ $ctrl.flightsLength === 1 ? 'flight' : 'flights' }} from \r\n        <strong>{{ $ctrl.airports.departure }}</strong>\r\n            to \r\n        <strong>{{ $ctrl.airports.destination }}</strong>:\r\n    </span>\r\n    <span class=\"form-result\" ng-show=\"!$ctrl.flightsLength\">\r\n        There aren't any flights that match your criteria.\r\n    </span>\r\n</div>"

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(201);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/sass-loader/index.js?config=sassLoader!./headline.scss", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/sass-loader/index.js?config=sassLoader!./headline.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, ".headline {\n  font-size: 1.8em;\n  padding: 15px 0 15px 0;\n  border-bottom: 1px solid #d8d8d8;\n  border-top: 1px solid #d8d8d8;\n  margin: 15px 0 30px 0; }\n", "", {"version":3,"sources":["/./src/app/components/results/src/app/components/results/headline/headline.scss"],"names":[],"mappings":"AAAC;EACG,iBAAiB;EACjB,uBAAuB;EACvB,iCAAiC;EACjC,8BAA8B;EAC9B,sBAAsB,EACzB","file":"headline.scss","sourcesContent":[" .headline {\r\n    font-size: 1.8em;\r\n    padding: 15px 0 15px 0;\r\n    border-bottom: 1px solid #d8d8d8;\r\n    border-top: 1px solid #d8d8d8;\r\n    margin: 15px 0 30px 0;\r\n}"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(14);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _flightsList = __webpack_require__(203);
	
	var _flight = __webpack_require__(205);
	
	var _flight2 = _interopRequireDefault(_flight);
	
	__webpack_require__(210);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _angular2.default.module('app.components.flightsList', [_flight2.default]).component('flightsList', _flightsList.flightsList).name;

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.flightsList = undefined;
	
	var _flightsList = __webpack_require__(204);
	
	var _flightsList2 = _interopRequireDefault(_flightsList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var flightsList = exports.flightsList = {
	    template: _flightsList2.default,
	    bindings: {
	        flights: '<'
	    }
	};

/***/ },
/* 204 */
/***/ function(module, exports) {

	module.exports = "<div class=\"flights-list\">\r\n    <flight \r\n        flight=\"flight\"\r\n        ng-repeat=\"flight in $ctrl.flights\">\r\n    </flight>\r\n</div>"

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(14);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _flight = __webpack_require__(206);
	
	__webpack_require__(208);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _angular2.default.module('app.components.flight', []).component('flight', _flight.flight).name;

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.flight = undefined;
	
	var _flight = __webpack_require__(207);
	
	var _flight2 = _interopRequireDefault(_flight);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var flight = exports.flight = {
	    template: _flight2.default,
	    bindings: {
	        flight: '<'
	    }
	};

/***/ },
/* 207 */
/***/ function(module, exports) {

	module.exports = "<div class=\"flight\" \r\n     layout-xs=\"column\" \r\n     layout-gt-xs=\"row\" \r\n     layout-align-gt-xs=\"start start\"\r\n     layout-align-xs=\"center none\">\r\n        <div class=\"date-info date-from\" \r\n             flex-gt-xs=\"40\"\r\n             flex-xs=\"grow\" \r\n             flex-order-xs=\"3\">\r\n                <i class=\"fa fa-plane\" aria-hidden=\"true\"></i><label>Fly out:</label>\r\n                <span>{{ $ctrl.flight.dateFrom }}</span>\r\n        </div>\r\n        <div class=\"date-info date-to\" \r\n             flex-gt-xs=\"40\"\r\n             flex-xs=\"grow\" \r\n             flex-order-xs=\"5\">\r\n                <i class=\"fa fa-plane\" aria-hidden=\"true\"></i><label>Fly back:</label>\r\n                <span>{{ $ctrl.flight.dateTo }}</span>\r\n        </div>\r\n        <div class=\"price\" \r\n             flex-offset-gt-xs=\"5\"\r\n             flex-gt-xs=\"15\"\r\n             flex-xs=\"25\" \r\n             flex-offset-xs=\"25\" \r\n             flex-order-xs=\"1\">\r\n                <i class=\"fa fa-credit-card\" aria-hidden=\"true\"></i>\r\n                <strong>{{ $ctrl.flight.currency }}{{ $ctrl.flight.price | number:2 }}</strong>    \r\n        </div>\r\n        <div flex-xs=\"grow\" flex-order-xs=\"2\" show-xs>&ensp;</div>\r\n        <div flex-xs=\"grow\" flex-order-xs=\"4\" show-xs>&ensp;</div>\r\n</div>"

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(209);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/postcss-loader/index.js!../../../../../../node_modules/sass-loader/index.js?config=sassLoader!./flight.scss", function() {
				var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/postcss-loader/index.js!../../../../../../node_modules/sass-loader/index.js?config=sassLoader!./flight.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, ".flight {\n  margin: 20px 0 20px 0;\n  border: 1px solid #d4d0d0;\n  padding: 30px 0 30px 15px;\n  font-size: 1.1em;\n  border-radius: 10px;\n  background: rgba(241, 241, 241, 0.98);\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); }\n  .flight .price {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding-top: 12px; }\n    .flight .price i {\n      vertical-align: middle;\n      margin-right: 10px; }\n    .flight .price strong {\n      font-size: 1.4em;\n      text-decoration: underline;\n      color: #da0f0f; }\n  .flight .date-info {\n    border: 1px solid #d2cfcf;\n    padding: 15px;\n    margin-right: 15px;\n    border-radius: 5px; }\n    .flight .date-info label {\n      font-weight: bold; }\n    .flight .date-info i {\n      margin-right: 10px; }\n  .flight .date-to i {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n", "", {"version":3,"sources":["/./src/app/components/results/flights-list/src/app/components/results/flights-list/flight/flight.scss"],"names":[],"mappings":"AAAA;EACI,sBAAsB;EACtB,0BAA0B;EAC1B,0BAA0B;EAC1B,iBAAiB;EACjB,oBAAoB;EACpB,sCAAgB;EAChB,2CAA4B,EAuC/B;EA9CD;IAUQ,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,0BAAoB;QAApB,uBAAoB;YAApB,oBAAoB;IACpB,kBAAkB,EAYrB;IAxBL;MAeY,uBAAuB;MACvB,mBAAmB,EACtB;IAjBT;MAoBY,iBAAiB;MACjB,2BAA2B;MAC3B,eAAe,EAClB;EAvBT;IA2BQ,0BAA0B;IAC1B,cAAc;IACd,mBAAmB;IACnB,mBAAmB,EAStB;IAvCL;MAiCY,kBAAkB,EACrB;IAlCT;MAqCY,mBAAmB,EACtB;EAtCT;IA2CY,kCAAiB;YAAjB,0BAAiB,EACpB","file":"flight.scss","sourcesContent":[".flight {\r\n    margin: 20px 0 20px 0;\r\n    border: 1px solid #d4d0d0;\r\n    padding: 30px 0 30px 15px;\r\n    font-size: 1.1em;\r\n    border-radius: 10px;\r\n    background: rgba(241, 241, 241, 0.98);\r\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n\r\n    .price {\r\n        display: flex;\r\n        align-items: center;\r\n        padding-top: 12px;\r\n\r\n        i {\r\n            vertical-align: middle;\r\n            margin-right: 10px;\r\n        }\r\n\r\n        strong {\r\n            font-size: 1.4em;   \r\n            text-decoration: underline;\r\n            color: #da0f0f;             \r\n        }\r\n    }\r\n\r\n    .date-info {\r\n        border: 1px solid #d2cfcf;\r\n        padding: 15px;\r\n        margin-right: 15px;\r\n        border-radius: 5px;\r\n\r\n        label {\r\n            font-weight: bold;\r\n        }   \r\n\r\n        i {\r\n            margin-right: 10px;\r\n        }\r\n    }\r\n\r\n     .date-to {\r\n        i {\r\n            transform: rotate(180deg);\r\n        }\r\n    }\r\n}"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(211);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/sass-loader/index.js?config=sassLoader!./flights-list.scss", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/sass-loader/index.js?config=sassLoader!./flights-list.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"flights-list.scss","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(213);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js?config=sassLoader!./flights-finder.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js?config=sassLoader!./flights-finder.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, ".flights-finder {\n  margin: 20px 0 20px 0; }\n  .flights-finder .loader {\n    text-align: center; }\n", "", {"version":3,"sources":["/./src/app/components/src/app/components/flights-finder/flights-finder.scss"],"names":[],"mappings":"AAAA;EACG,sBAAsB,EAKxB;EAND;IAIO,mBAAmB,EACtB","file":"flights-finder.scss","sourcesContent":[".flights-finder {\r\n   margin: 20px 0 20px 0;\r\n\r\n   .loader {\r\n       text-align: center;\r\n   }\r\n}"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(14);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _airports = __webpack_require__(215);
	
	var _airports2 = _interopRequireDefault(_airports);
	
	var _flights = __webpack_require__(217);
	
	var _flights2 = _interopRequireDefault(_flights);
	
	var _dates = __webpack_require__(218);
	
	var _dates2 = _interopRequireDefault(_dates);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _angular2.default.module('app.services', []).service('AirportsService', _airports2.default).service('FlightsService', _flights2.default).service('DatesService', _dates2.default).name;

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _api = __webpack_require__(216);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AirportsService = function () {
	  AirportsService.$inject = ["$http", "$q"];
	  function AirportsService($http, $q) {
	    'ngInject';
	
	    _classCallCheck(this, AirportsService);
	
	    this._$http = $http;
	    this._$q = $q;
	  }
	
	  AirportsService.prototype.getAirportsInfo = function getAirportsInfo() {
	    var deferred = this._$q.defer();
	    var URL = '' + _api.api.baseUrl + _api.api.paths.airports;
	
	    this._$http.get(URL).then(this._onGetAirportsSuccess.bind(this, deferred)).catch(this._onError);
	
	    return deferred.promise;
	  };
	
	  AirportsService.prototype.getAirports = function getAirports() {
	    var airports = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var limitedRoutes = arguments[1];
	    var filterTerm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	
	    var areLimitedRoutesDefined = !!limitedRoutes && !!limitedRoutes.length;
	    var availableAirports = areLimitedRoutesDefined ? this._getAvailableAirports(airports, limitedRoutes) : airports;
	    return this._getFilteredAirports(availableAirports, filterTerm);
	  };
	
	  AirportsService.prototype.getPossibleRoutes = function getPossibleRoutes() {
	    var routes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var airportIATACode = arguments[1];
	
	    return routes[airportIATACode];
	  };
	
	  AirportsService.prototype._getAvailableAirports = function _getAvailableAirports(airports, routes) {
	    return routes.map(function (iataCode) {
	      return airports.find(function (airport) {
	        return airport.iataCode === iataCode;
	      });
	    });
	  };
	
	  AirportsService.prototype._getFilteredAirports = function _getFilteredAirports(airports, filterTerm) {
	    var filter = filterTerm.toUpperCase();
	    return airports.filter(this._filterAirportsByTerm.bind(this, filter)).sort(this._compareAirportsByName);
	  };
	
	  AirportsService.prototype._filterAirportsByTerm = function _filterAirportsByTerm(filter, airport) {
	    return airport.country.toUpperCase().includes(filter) || airport.iataCode.toUpperCase().includes(filter) || airport.name.toUpperCase().includes(filter);
	  };
	
	  AirportsService.prototype._onGetAirportsSuccess = function _onGetAirportsSuccess(deferred) {
	    var response = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    var isResponseOk = response.data && response.data.airports && response.data.routes;
	
	    if (!isResponseOk) {
	      deferred.reject('EMPTY_RESPONSE');
	      return;
	    }
	
	    deferred.resolve({
	      airports: this._getParsedAirports(response.data.airports),
	      routes: this._routes = response.data.routes
	    });
	  };
	
	  AirportsService.prototype._onGetAirportsFail = function _onGetAirportsFail(response) {
	    console.debug('fail', response);
	  };
	
	  AirportsService.prototype._onError = function _onError(error) {
	    console.debug("There's a problem with request to server:", error);
	  };
	
	  AirportsService.prototype._getParsedAirports = function _getParsedAirports() {
	    var airports = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	    return airports.map(this._mapAirportObject).sort(this._compareAirportsByName);
	  };
	
	  AirportsService.prototype._mapAirportObject = function _mapAirportObject(airport) {
	    return {
	      country: airport.country.name,
	      iataCode: airport.iataCode,
	      name: airport.name
	    };
	  };
	
	  AirportsService.prototype._compareAirportsByName = function _compareAirportsByName(airportOne, airportTwo) {
	    var airportOneName = airportOne.name.toLowerCase();
	    var airportTwoName = airportTwo.name.toLowerCase();
	
	    if (airportOneName < airportTwoName) return -1;
	    if (airportOneName > airportTwoName) return 1;
	    return 0;
	  };
	
	  return AirportsService;
	}();
	
	exports.default = AirportsService;

/***/ },
/* 216 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var api = exports.api = {
	    baseUrl: 'https://murmuring-ocean-10826.herokuapp.com/en/api/2',
	    paths: {
	        airports: '/forms/flight-booking-selector',
	        flights: '/flights/from/'
	    }
	};
	
	var getFlightsUrl = exports.getFlightsUrl = function getFlightsUrl(_ref) {
	    var airportsCodes = _ref.airportsCodes,
	        dates = _ref.dates,
	        limit = _ref.limit;
	
	    return '' + api.baseUrl + api.paths.flights + airportsCodes.departure + '/to/' + airportsCodes.destination + '/' + dates.start + '/' + dates.end + '/250/unique/?limit=' + limit + '&offset-0';
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _api = __webpack_require__(216);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var FlightsService = function () {
	  FlightsService.$inject = ["$http", "$q", "DatesService"];
	  function FlightsService($http, $q, DatesService) {
	    'ngInject';
	
	    _classCallCheck(this, FlightsService);
	
	    this._$http = $http;
	    this._$q = $q;
	    this._datesService = DatesService;
	  }
	
	  FlightsService.prototype.getFlights = function getFlights() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    var URL = (0, _api.getFlightsUrl)(params);
	    var deferred = this._$q.defer();
	
	    this._$http.get(URL).then(this._onGetFlightsSuccess.bind(this, deferred)).catch(this._onError.bind(this, deferred));
	    return deferred.promise;
	  };
	
	  FlightsService.prototype._onGetFlightsSuccess = function _onGetFlightsSuccess(deferred, response) {
	    var isResponseOk = !!response && !!response.data && !!response.data.flights;
	
	    if (!isResponseOk) {
	      deferred.reject();
	      return;
	    }
	
	    deferred.resolve({
	      flights: this._getParsedFlights(response.data.flights)
	    });
	  };
	
	  FlightsService.prototype._getParsedFlights = function _getParsedFlights() {
	    var flights = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	    return flights.map(this._parseFlight.bind(this)).sort(this._compareFlightsByPrice);
	  };
	
	  FlightsService.prototype._parseFlight = function _parseFlight(flight) {
	    var parsedFlight = Object.assign({}, flight);
	
	    parsedFlight.dateFrom = this._datesService.getFormatedDate(flight.dateFrom);
	    parsedFlight.dateTo = this._datesService.getFormatedDate(flight.dateTo);
	
	    return parsedFlight;
	  };
	
	  FlightsService.prototype._compareFlightsByPrice = function _compareFlightsByPrice(flightOne, flightTwo) {
	    if (flightOne.price < flightTwo.price) return -1;
	    if (flightOne.price > flightTwo.price) return 1;
	    return 0;
	  };
	
	  FlightsService.prototype._onError = function _onError(deferred, error) {
	    deferred.reject();
	    console.debug("There's a problem with flights request:", error);
	  };
	
	  return FlightsService;
	}();
	
	exports.default = FlightsService;

/***/ },
/* 218 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DatesService = function () {
	    function DatesService() {
	        _classCallCheck(this, DatesService);
	    }
	
	    DatesService.prototype.getDateWithOffset = function getDateWithOffset() {
	        var dayOffset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	        var currentDate = new Date();
	        return new Date(currentDate.setDate(currentDate.getDate() + dayOffset));
	    };
	
	    DatesService.prototype.getParsedISODate = function getParsedISODate() {
	        var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
	
	        return date.toISOString().slice(0, 10);
	    };
	
	    DatesService.prototype.getFormatedDate = function getFormatedDate(dateInISO) {
	        var _getParsedDateParams2 = this._getParsedDateParams(dateInISO),
	            day = _getParsedDateParams2.day,
	            month = _getParsedDateParams2.month,
	            hour = _getParsedDateParams2.hour,
	            minute = _getParsedDateParams2.minute,
	            year = _getParsedDateParams2.year;
	
	        return day + "-" + month + "-" + year + " " + hour + ":" + minute;
	    };
	
	    DatesService.prototype._getParsedDateParams = function _getParsedDateParams(dateInISO) {
	        var date = new Date(dateInISO);
	        var year = date.getFullYear();
	        var month = date.getMonth() + 1;
	        var day = date.getDate();
	        var hour = date.getHours();
	        var minute = date.getMinutes();
	
	        return {
	            year: year,
	            minute: this._getParsedDigit(minute),
	            hour: this._getParsedDigit(hour),
	            month: this._getParsedDigit(month),
	            day: this._getParsedDigit(day)
	        };
	    };
	
	    DatesService.prototype._getParsedDigit = function _getParsedDigit(value) {
	        return value < 10 ? "0" + value : value;
	    };
	
	    return DatesService;
	}();
	
	exports.default = DatesService;

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(14);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _keyFocus = __webpack_require__(220);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _angular2.default.module('app.directives', []).directive('keyFocus', _keyFocus.keyFocus).name;

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.keyFocus = undefined;
	
	var _angular = __webpack_require__(14);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var keyFocus = exports.keyFocus = function keyFocus() {
	    var keyCodes = {
	        ARROW_UP: 38,
	        ARROW_DOWN: 40
	    };
	
	    var link = function link(scope, elem, attrs) {
	        elem.bind('keyup', handleKeyUp.bind(undefined, scope, elem));
	    };
	
	    var handleKeyUp = function handleKeyUp(scope, elem, e) {
	        if (e.keyCode == keyCodes.ARROW_UP) {
	            if (!scope.$first) {
	                elem[0].previousElementSibling.focus();
	            }
	        } else if (e.keyCode == keyCodes.ARROW_DOWN) {
	            if (!scope.$last) {
	                elem[0].nextElementSibling.focus();
	            }
	        }
	    };
	
	    return {
	        restrict: 'A',
	        link: link
	    };
	};

/***/ },
/* 221 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var appConfig = exports.appConfig = ["$stateProvider", "$urlRouterProvider", function appConfig($stateProvider, $urlRouterProvider) {
	    'ngInject';
	
	    $stateProvider.state('app', {
	        abstract: true
	    });
	}];

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(14);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(16);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _home = __webpack_require__(223);
	
	var _home2 = __webpack_require__(224);
	
	__webpack_require__(226);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _angular2.default.module('app.home', [_angularUiRouter2.default]).component('home', _home2.homeComponent).config(_home.homeConfig).name;

/***/ },
/* 223 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var homeConfig = exports.homeConfig = ["$stateProvider", "$urlRouterProvider", function homeConfig($stateProvider, $urlRouterProvider) {
	    'ngInject';
	
	    $stateProvider.state('app.home', {
	        url: '/',
	        component: 'home'
	    });
	
	    $urlRouterProvider.otherwise('/');
	}];

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.homeComponent = undefined;
	
	var _home = __webpack_require__(225);
	
	var _home2 = _interopRequireDefault(_home);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var homeComponent = exports.homeComponent = {
	    template: _home2.default
	};

/***/ },
/* 225 */
/***/ function(module, exports) {

	module.exports = "<div class=\"home\" layout=\"row\" layout-wrap>\r\n    <div flex=\"grow\">\r\n        <top-bar></top-bar>\r\n    </div>\r\n    <div \r\n        flex-gt-md=\"60\" \r\n        flex-offset-gt-md=\"20\" \r\n        flex-gt-xs=\"66\"\r\n        flex-offset-gt-xs=\"15\">\r\n            <flights-finder></flights-finder>\r\n    </div>\r\n</div>"

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(227);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js?config=sassLoader!./home.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js?config=sassLoader!./home.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, ".home {\n  background-color: #f4f4f4; }\n  .home a.link {\n    border-bottom: 0 !important; }\n  .home a.link:hover {\n    border-bottom: 0 !important; }\n  .home table {\n    width: auto !important; }\n", "", {"version":3,"sources":["/./src/app/src/app/home/home.scss"],"names":[],"mappings":"AAAA;EACI,0BAA0B,EAa7B;EAdD;IAIQ,4BAA4B,EAC/B;EALL;IAQQ,4BAA4B,EAC/B;EATL;IAYQ,uBAAuB,EAC1B","file":"home.scss","sourcesContent":[".home {\r\n    background-color: #f4f4f4;\r\n    \r\n    a.link {\r\n        border-bottom: 0 !important;\r\n    }\r\n\r\n    a.link:hover {\r\n        border-bottom: 0 !important;\r\n    }\r\n\r\n    table {\r\n        width: auto !important;\r\n    }\r\n}"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(240);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js?config=sassLoader!./app.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js?config=sassLoader!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	exports.i(__webpack_require__(241), "");
	
	// module
	exports.push([module.id, "body {\n  font-family: Roboto, Arial, Helvetica, sans-serif;\n  font-size: 13px;\n  color: #565454;\n  background-color: #f4f4f4; }\n", "", {"version":3,"sources":["/./src/src/app/app.scss"],"names":[],"mappings":"AAEA;EACI,kDAAkD;EAClD,gBAAgB;EAChB,eAAe;EACf,0BAA0B,EAC7B","file":"app.scss","sourcesContent":["@import '../../node_modules/angular-material/angular-material.css';\r\n\r\nbody {\r\n    font-family: Roboto, Arial, Helvetica, sans-serif;\r\n    font-size: 13px;\r\n    color: #565454;\r\n    background-color: #f4f4f4;\r\n}\r\n\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }
]);
//# sourceMappingURL=app.js.map