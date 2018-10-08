import angular from 'angular'

import ngAnimate from 'angular-animate'
import uiRouter from '@uirouter/angularjs'

angular.module('Segnalibr', [
  ngAnimate,
  uiRouter,
])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'segnalibr',
    url: '',
    abstract: true,
  })

  $urlRouterProvider.otherwise('/')
})
.controller('MainController', function($scope, $stateParams) {
  console.log('Hello da Babel e Webpack')
})
