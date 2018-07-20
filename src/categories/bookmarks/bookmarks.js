angular.module('segnalibr.categories.bookmarks', [
  'segnalibr.models.category',
  'segnalibr.models.bookmark',

  'segnalibr.categories.bookmarks.create',
  'segnalibr.categories.bookmarks.edit',
])
.config(function($stateProvider) {
  $stateProvider.state({
    name: 'segnalibr.categories.bookmarks',
    url: 'categories/:category',
    views: {
      'bookmarks@': {
        templateUrl: 'src/categories/bookmarks/bookmarks.template.html',
        controller: 'BookmarksController',
      }
    }
  })
})
.controller('BookmarksController', function($scope, $stateParams) {
  $scope.currentCategorySlug = $stateParams.category
})
