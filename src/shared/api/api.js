export const api = {
    baseUrl: 'https://murmuring-ocean-10826.herokuapp.com/en/api/2',
    paths: { 
        airports: '/forms/flight-booking-selector',
        flights: '/flights/from/'
    }
}

export const getFlightsUrl = (args) => {
    const { from, to, limit } = args;
    return `${api.baseUrl}${api.paths.flights}${from.airportCode}/to/${to.airportCode}/${from.date}/${to.date}/250/unique/?limit=${limit}&offset-0`;
}