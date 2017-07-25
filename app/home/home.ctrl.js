export default function HomeController ($scope, $http, $location, weatherService) {
  $scope.weatherData = {};

  weatherService.getWeatherForGroupOfCities()
    .then(res => $scope.weatherData = res.data)
    .catch(err => window.alert(err.status.Text));

  $scope.goToDetailView = id => $location.path(`/details/${id}`);
  $scope.goToSurveyView = () => $location.path('/survey');

  $scope.tasks = [];
}
