class DatesService {
    getDateWithOffset(dayOffset = 0) {
        const currentDate = new Date();
        return new Date(currentDate.setDate(currentDate.getDate() + dayOffset));
    }

    getParsedISODate(date = new Date()) {
        return date.toISOString().slice(0, 10);
    }
    
    getFormatedDate(dateInISO) {
        const { day, month, hour, minute, year } = this._getParsedDateParams(dateInISO);
        return `${day}-${month}-${year} ${hour}:${minute}`;
    }

    _getParsedDateParams(dateInISO) {
        const date = new Date(dateInISO);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();

        return {
        year,
        minute: this._getParsedDigit(minute),
        hour: this._getParsedDigit(hour),
        month: this._getParsedDigit(month),
        day: this._getParsedDigit(day)
        }
        
    }

    _getParsedDigit(value) {
        return value < 10 ? `0${value}` : value;
    }
}

export default DatesService