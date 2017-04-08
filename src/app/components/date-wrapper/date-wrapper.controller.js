class DateWrapper {
  $onInit() {
    this.dates = {
      start: {
        placeholder: 'Fly out',
        label: 'Fly out:',
        value: new Date()
      },
      end: {
        placeholder: 'Back',
        label: 'Back:',
        value: this._getTomorrowDate() 
      }
    }

    this.updateParentState();
  }

  updateParentState() {
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

