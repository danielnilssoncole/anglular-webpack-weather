export default function DetailsController ($scope, $location, weatherService) {
  $scope.cityData = {};
  $scope.cityId = $location.path().split('/')[2];

  weatherService.getWeatherByCityId($scope.cityId)
    .then(res => $scope.cityData = res.data)
    .catch(err => window.alert(err.status.Text));
}
