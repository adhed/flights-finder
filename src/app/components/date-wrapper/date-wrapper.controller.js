class DateWrapper {
  $onInit() {
    this.dates = {
      start: {
        label: 'Fly out:',
        value: new Date()
      },
      end: {
        label: 'Fly back:',
        value: this._getTomorrowDate() 
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
          end: this._getParsedDate(this.dates.end.value),
          start: this._getParsedDate(this.dates.start.value)
        }
      }
    });
  }

  _getParsedDate(date = new Date()) {
    return date.toISOString().slice(0, 10);
  }

  _getTomorrowDate() {
    let currentDate = new Date();
    return new Date(currentDate.setDate(currentDate.getDate() + 1));
  }
}

export default DateWrapper

