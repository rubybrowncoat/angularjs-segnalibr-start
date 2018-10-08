import UidGenerator from '../../utils/uid'
const bookmarkUids = new UidGenerator('bookmark-')

const endpoints = {
  fetch: () => `http://localhost:4242/bookmarks`,
  post: () => `http://localhost:4242/bookmarks`,
  put: (bookmark) => `http://localhost:4242/bookmarks/${bookmark.id}`,
  delete: (bookmark) => `http://localhost:4242/bookmarks/${bookmark.id}`,
}

class BookmarksModel {
  constructor($http, $q) {
    'ngInject'

    this.$http = $http
    this.$q = $q

    this.currentBookmark = null
    this.bookmarks = []
  }

  getData(response) {
    return response.data
  }

  gatherBookmarks(data) {
    this.bookmarks = data

    return this.bookmarks
  }

  getBookmarks() {
    return this.$q.when(this.bookmarks.length
      ? this.bookmarks
      : this.$http.get(endpoints.fetch())
        .then(response => this.getData(response))
        .then(data => this.gatherBookmarks(data))
    )
  }

  getCurrentBookmark() {
    return this.currentBookmark
  }

  setCurrentBookmark(bookmark) {
    this.getBookmarks()
      .then(() => this.currentBookmark = bookmark)
  }

  createBookmark(bookmark) {
    return this.$http.post(endpoints.post(), bookmark)
      .then(response => this.getData(response))
      .then(createdBookmark => {
        console.log(createdBookmark)

        this.bookmarks.push(createdBookmark)
      })
  }

  editBookmark(bookmark) {
    return this.$http.put(endpoints.put(bookmark), bookmark)
      .then(response => this.getData(response))
      .then(editedBookmark => {
        console.log(editedBookmark)

        const index = this.bookmarks.findIndex(findBookmark => findBookmark.id === editedBookmark.id)

        this.bookmarks.splice(index, 1, editedBookmark)
      })
  }

  deleteBookmark(bookmark) {
    if (confirm('Stai per cancellare un bellissimo bookmark. Ne sei davvero sicuro?')) {
      return this.$http.delete(endpoints.delete(bookmark), bookmark)
        .then(() => {
          const index = this.bookmarks.findIndex(findBookmark => findBookmark.id === bookmark.id)

          this.bookmarks.splice(index, 1)
        })
    }
  }
}

export default BookmarksModel
