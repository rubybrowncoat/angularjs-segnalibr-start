angular.module('segnalibr.categories.bookmarks', [
  'segnalibr.models.categories',
  'segnalibr.models.bookmarks',

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
        controller: 'BookmarksListController as bookmarksListController',
      }
    }
  })
})
.controller('BookmarksListController', function($stateParams, BookmarksModel) {
  this.currentCategorySlug = $stateParams.category || null

  this.bookmarks = BookmarksModel.getBookmarks()
})
