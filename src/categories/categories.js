angular.module('segnalibr.categories', [
  'segnalibr.models.category',
])
.config(function($stateProvider) {
  $stateProvider.state({
    name: 'segnalibr.categories',
    url: '/',

    views: {
      'categories@': {
        templateUrl: 'src/categories/categories.template.html',
        controller: 'CategoriesController',
      },
      'bookmarks@': {
        templateUrl: 'src/categories/bookmarks/bookmarks.template.html',
        controller: 'BookmarksController',
      }
    }
  })
})
.controller('CategoriesController', function($scope) {})
