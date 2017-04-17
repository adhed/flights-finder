export const resultsConfig = ($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
     .state('app.home.flights', {
         url: 'flights/:codeFrom/:codeTo/:nameFrom/:nameTo/:dateFrom/:dateTo',
         component: 'results',

    });
}

