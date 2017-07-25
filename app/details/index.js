import angular from 'angular'
import uirouter from 'angular-ui-router'

import routing from './details.routes';
import DetailsController from './details.ctrl';
import weatherService from '../services/weather.svc';

export default angular.module('app.details', [uirouter, weatherService])
  .config(routing)
  .controller('DetailsController', DetailsController)
  .name;
