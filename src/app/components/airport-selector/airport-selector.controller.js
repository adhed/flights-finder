import { debounce } from '../../shared/utils';

class AirportSelector {
    $onInit() {
        this.input = {
            value: ''
        }
        this.showOptions = false;
        this.selectedAirport = {};
        this._shouldBeOptionsVisible = false;
    }

    $onChanges() {
        this._updateShowOptions();
    }

    handleInputClick() {
        this._shouldBeOptionsVisible = true;
        this._updateShowOptions();
    }

    handleInputBlur() {
        this._shouldBeOptionsVisible = false;
        this._updateShowOptions();
    }

    handleOptionClick(airport) {
        this._shouldBeOptionsVisible = false;
        this._updateShowOptions();
        this.input.value = airport.name;
        this.onSelect({ $event: { airport } });
    }

    handleClickOutside() {
        this._shouldBeOptionsVisible = false;
        this._updateShowOptions();
    }
    
    _updateShowOptions() {
        this.showOptions = this._shouldBeOptionsVisible && !!this.options.length;
    }
}

export default AirportSelector