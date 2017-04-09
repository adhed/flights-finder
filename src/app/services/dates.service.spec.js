import DatesService from './dates.service';

let datesService = new DatesService();

describe('DatesService', () => {

    describe('_getParsedDigit()', () => {
        it('should add 0 for given one-digit number', () => {
            const oneDigitNumber = '6';
            const expectedNumber = '06';
            const parsedNumber = datesService._getParsedDigit(oneDigitNumber);

            expect(parsedNumber).equal(expectedNumber);
        });
        it('should not add 0 for given one-digit number', () => {
            const twoDigitsNumber = '16';
            const expectedNumber = '16';
            const parsedNumber = datesService._getParsedDigit(twoDigitsNumber);

            expect(parsedNumber).equal(expectedNumber);
        });
    });
    
    describe('getParsedISODate()', () => {
        it('should return first 10 chars of ISO date', () => {
            const expectedDateString = '10/04/2017';
            const date = new Date(expectedDateString);
            const parsedDateString = datesService.getParsedISODate(date);

            expect(expectedDateString, parsedDateString);
        });
    });
});