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
    },
    params: {
      category: null,
    },
  })
})
.controller('BookmarksListController', function($stateParams, $state, BookmarksModel, CategoriesModel) {
  const returnToBookmarks = () => {
    const { category } = $stateParams

    if (category) {
      $state.go('segnalibr.categories.bookmarks', {
        category,
      })
    } else {
      $state.go('segnalibr.categories')
    }
  }

  CategoriesModel.setCurrentCategoryBySlug($stateParams.category)

  BookmarksModel.getBookmarks()
    .then(bookmarks => this.bookmarks = bookmarks)

  this.cancelForms = () => returnToBookmarks()

  this.deleteBookmark = bookmark => {
    returnToBookmarks()

    BookmarksModel.deleteBookmark(bookmark)
  }

  this.getCurrentCategorySlug = CategoriesModel.getCurrentCategorySlug
  this.getCurrentCategoryName = CategoriesModel.getCurrentCategoryName
})
