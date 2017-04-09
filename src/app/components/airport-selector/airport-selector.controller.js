import { debounce } from '../../shared/utils';

class AirportSelector {
    $onInit() {
        this.selected = '';
        this.showOptions = false;
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
        this.selected = airport.name;
        this.onFilterChange({ $event: { filter: this.selected } })
        this.onSelect({ $event: { airport } });
    }

    handleClickOutside() {
        this._shouldBeOptionsVisible = false;
        this._updateShowOptions();
    }

    handleKeyDown(event) {
        if (event.key === 'Backspace') {
            this._handleBackspace();
        }
    }

    _handleBackspace() {
        this.onSelect({ $event: { airport: {} }});
        this.onFilterChange({ $event: { filter: '' } })
    }
    
    _updateShowOptions() {
        this.showOptions = this._shouldBeOptionsVisible && !!this.options.length;
    }
}

export default AirportSelector