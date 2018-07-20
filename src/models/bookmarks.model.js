angular.module('segnalibr.models.bookmarks', [
  // No Dependencies
])
.service('BookmarksModel', function($http, $q) {
  let bookmarks = []

  const ENDPOINTS = {
    FETCH: 'data/bookmarks.json',
  }

  const extractData = response => response.data
  const gatherBookmarks = data => bookmarks = data

  this.getBookmarks = () => $q.when(bookmarks.length
    ? bookmarks
    : $http.get(ENDPOINTS.FETCH)
      .then(extractData)
      .then(gatherBookmarks)
  )

  const findBookmarkById = bookmarkId => bookmarks.find(bookmark => bookmark.id === +bookmarkId)

  this.getBookmarkById = bookmarkId => {
    const deferred = $q.defer()

    if (bookmarks.length) {
      deferred.resolve(findBookmarkById(bookmarkId))
    } else {
      this.getBookmarks()
        .then(() => deferred.resolve(findBookmarkById(bookmarkId)))
    }

    return deferred.promise
  }

  this.createBookmark = bookmark => {
    bookmarks.push({
      ...bookmark,

      id: bookmarks.length,
    })
  }

  this.editBookmark = editedBookmark => {
    const index = bookmarks.findIndex(bookmark => bookmark.id === editedBookmark.id)

    bookmarks.splice(index, 1, editedBookmark)
  }

  this.deleteBookmark = deletedBookmark => {
    if (confirm(`Stai per cancellare il bookmark "${deletedBookmark.title}". L'operazione non è reversibile.`)) {
      const index = bookmarks.findIndex(bookmark => bookmark.id === deletedBookmark.id)

      bookmarks.splice(index, 1)
    }
  }
})
