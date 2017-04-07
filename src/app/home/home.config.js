export const homeConfig = ($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
     .state('home', {
         url: '/',
         component: 'home'
    });

    $urlRouterProvider.otherwise('/');

}