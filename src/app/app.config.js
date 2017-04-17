export const appConfig = ($stateProvider, $urlRouterProvider) => {
    'ngInject';
    
    $stateProvider
        .state('app', {
            abstract: true,
        });   
}