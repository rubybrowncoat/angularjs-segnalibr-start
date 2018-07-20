angular.module('segnalibr.categories.bookmarks.edit', [
  // No Dependencies
])
.config(function($stateProvider) {
  $stateProvider.state({
    name: 'segnalibr.categories.bookmarks.edit',
    url: '^/bookmarks/:bookmarkId/edit',
    templateUrl: 'src/categories/bookmarks/edit/bookmark.edit.template.html',
    controller: 'BookmarkEditController as bookmarkEditController',
    params: {
      bookmarkId: null,
    },
  })
})
.controller('BookmarkEditController', function($stateParams, $state, BookmarksModel) {
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

  this.currentBookmark = null

  makeEditedBookmark = (bookmark = {}) => {
    this.currentBookmark = bookmark
    this.editedBookmark = angular.copy(bookmark)
  }

  this.cancelEdit = () => returnToBookmarks()

  this.editBookmark = bookmark => {
    BookmarksModel.editBookmark(bookmark)

    returnToBookmarks()
  }

  BookmarksModel.getBookmarkById($stateParams.bookmarkId)
    .then(bookmark => bookmark
        ? makeEditedBookmark(bookmark)
        : returnToBookmarks()
    )
})
