import angular from 'angular'
import uirouter from 'angular-ui-router'

import routing from './survey.routes';
import SurveyController from './survey.ctrl';

export default angular.module('app.survey', [uirouter])
  .config(routing)
  .controller('SurveyController', SurveyController)
  .name;
