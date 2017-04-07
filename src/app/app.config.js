export const appConfig = ($stateProvider) => {
    'ngInject';
    
    $stateProvider
        .state('app', {
            abstract: true,
        });   
}