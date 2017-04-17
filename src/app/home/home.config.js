export const homeConfig = ($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
     .state('app.home', {
         url: '/',
         component: 'home'
    });

    $urlRouterProvider.otherwise('/');
}