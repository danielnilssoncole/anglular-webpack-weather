routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('details', {
      url: '/details/:id',
      template: require('./details.html'),
      controller: 'DetailsController',
      controllerAs: 'detail'
    });
}
