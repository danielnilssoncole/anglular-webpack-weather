import angular from 'angular'
import uirouter from 'angular-ui-router'
import routes from './app.routes'
import home from './home'
import details from './details'
import survey from './survey'

angular.module('myApp', [uirouter, home, details, survey])
  .config(routes)
