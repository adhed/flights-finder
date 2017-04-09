class DateWrapper {
  constructor(DatesService) {
    'ngInject';

    this._datesService = DatesService;
  }

  $onInit() {

    this.dates = {
      start: {
        label: 'Fly out:',
        value: new Date()
      },
      end: {
        label: 'Fly back:',
        value: this._datesService.getDateWithOffset(7)
      }
    }

    this._updateParentState();
  }

  handleStartDateChange(event) {
    this.dates.start.value = event.date;
    this._updateParentState();
  }

  handleEndDateChange(event) {
    this.dates.end.value = event.date;
    this._updateParentState();
  }

  _updateParentState(event) {
    this.onChange({ 
      $event: {
        dates: {
          end: this._datesService.getParsedISODate(this.dates.end.value),
          start: this._datesService.getParsedISODate(this.dates.start.value)
        }
      }
    });
  }
}

export default DateWrapper

