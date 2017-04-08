export const api = {
    baseUrl: 'https://murmuring-ocean-10826.herokuapp.com/en/api/2',
    paths: { 
        airports: '/forms/flight-booking-selector',
        flights: '/flights/from/'
    }
}

export const getFlightsUrl = ({ airportsCodes, dates, limit }) => {
    return `${api.baseUrl}${api.paths.flights}${airportsCodes.departure}/to/${airportsCodes.destination}/${dates.start}/${dates.end}/250/unique/?limit=${limit}&offset-0`;
}