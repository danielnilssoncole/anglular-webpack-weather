import angular from 'angular'

function cityWeatherDetails () {
  return {
    restrict: 'E',
    template: `<ul class="weatherDeatails">
      <li class="weatherDetailsListItem">City: <a href="" ng-click="goToDetailView(details.id)">{{details.name}}</a></li>
      <li class="weatherDetailsListItem">Lattitude: {{details.coord.lat}}</li>
      <li class="weatherDetailsListItem">Longitude: {{details.coord.lon}}</li>
      <li class="weatherDetailsListItem">Temp: {{details.main.temp}}</li>
    </ul>`
  }
}

export default angular.module('directives.cityWeatherDetails', [])
  .directive('cityWeatherDetails', cityWeatherDetails)
  .name
