import angular from 'angular'

function WeatherService($http) {
  this.getWeatherForGroupOfCities = () => $http.get('http://api.openweathermap.org/data/2.5/group?id=524901,703448,264374&APPID=8aa65468f08e0a905a1c610bd074fbed');

  this.getWeatherByCityId = id => $http.get(`http://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=8aa65468f08e0a905a1c610bd074fbed`)
}

export default angular.module('services.weatherService', [])
.service('weatherService', WeatherService).name;
