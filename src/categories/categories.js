angular.module('segnalibr.categories', [
  'segnalibr.models.categories',
])
.config(function($stateProvider) {
  $stateProvider.state({
    name: 'segnalibr.categories',
    url: '/',

    views: {
      'categories@': {
        templateUrl: 'src/categories/categories.template.html',
        controller: 'CategoriesListController as categoriesListController',
      },
      'bookmarks@': {
        templateUrl: 'src/categories/bookmarks/bookmarks.template.html',
        controller: 'BookmarksListController as bookmarksListController',
      }
    }
  })
})
.controller('CategoriesListController', function(CategoriesModel) {
  this.categories = CategoriesModel.getCategories()
})
