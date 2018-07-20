angular.module('segnalibr.categories.bookmarks.create', [
  // No Dependencies
])
.config(function($stateProvider) {
  $stateProvider.state({
    name: 'segnalibr.categories.bookmarks.create',
    url: '/create',
    templateUrl: 'src/categories/bookmarks/create/bookmark.create.template.html',
    controller: 'BookmarkCreateController as bookmarkCreateController',
  })
})
.controller('BookmarkCreateController', function($stateParams, $state, BookmarksModel) {
  const returnToBookmarks = () => {
    $state.go('segnalibr.categories.bookmarks', {
      category: $stateParams.category,
    })
  }

  const makeNewBookmark = () => {
    this.newBookmark = {
      title: '',
      url: '',
      category: $stateParams.category,
    }
  }

  this.cancelCreate = () => returnToBookmarks()

  this.createBookmark = bookmark => {
    BookmarksModel.createBookmark(bookmark)

    makeNewBookmark()
  }

  makeNewBookmark()
})
