class BookmarksController {
  // @ngInject
  constructor(BookmarksModel) {
    this.bookmarks = BookmarksModel.bookmarks
  }
}

export default BookmarksController
