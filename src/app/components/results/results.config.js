export const resultsConfig = ($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
     .state('home.flights', {
         url: 'flights/:codeFrom/:codeTo/:nameFrom/:nameTo/:dateFrom/:dateTo',
         component: 'results',

    });
}

