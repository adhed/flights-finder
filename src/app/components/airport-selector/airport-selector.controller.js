import { debounce } from '../../shared/utils';

class AirportSelector {
    constructor(AirportsService) {
        'ngInject';

        this.filterTerm = '';
        this.suggestions = [];
        this.showSuggestions = false;
        this.selectedAirport = null;

        this._AirportsService = AirportsService;
    }

    handleInputChange(event) {
       this.suggestions = this.resultsProvider({ filterTerm: this.filterTerm });
       this._showSuggestionsIfExist();
    }

    handleInputClick() {
        this.suggestions = this.resultsProvider({ filterTerm: '' });
        this._showSuggestionsIfExist();
    }

    handleInputBlur() {
        this.showSuggestions = false;
    }

    handleAirportClick(airport) {
        this.showSuggestions = false;
        this.selectedAirport = airport;
        this._AirportsService.setSelectedAirport(airport);
    }
    
    _showSuggestionsIfExist() {
        this.showSuggestions = !!this.suggestions.length
    }
}

export default AirportSelector