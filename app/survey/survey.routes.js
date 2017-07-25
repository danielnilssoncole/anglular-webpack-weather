routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('survey', {
      url: '/survey',
      template: require('./survey.html'),
      controller: 'SurveyController',
      controllerAs: 'survey'
    });
}
