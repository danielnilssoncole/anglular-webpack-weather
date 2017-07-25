import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.ctrl';
import weatherService from '../services/weather.svc';
import linkExample from '../directives/linkExample.directive';
import cityWeatherDetails from '../directives/cityWeatherDetails.directive';
import isolatedScopeWithTransclusion from '../directives/isolatedScopeWithTransclusion.directive';

export default angular.module('app.home', [uirouter, weatherService, cityWeatherDetails, linkExample, isolatedScopeWithTransclusion])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
