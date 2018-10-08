class BookmarksController {
  // @ngInject
  constructor(BookmarksModel, CategoriesModel, $scope) {
    this.$scope = $scope

    this.bookmarks = []

    this.BookmarksModel = BookmarksModel
    this.CategoriesModel = CategoriesModel
  }

  $onInit() {
    this.BookmarksModel.getBookmarks()
      .then(bookmarks => this.bookmarks = bookmarks)

    // this.$scope.$on('category.update', () => {
    //   this.resetBookmark()
    // })
  }

  getCurrentCategory() {
    return this.CategoriesModel.getCurrentCategory()
  }

  getCurrentCategoryName() {
    const currentCategory = this.getCurrentCategory()

    return currentCategory ? currentCategory.name : null
  }

  getCurrentCategorySlug() {
    const currentCategory = this.getCurrentCategory()

    return currentCategory ? currentCategory.slug : null
  }

  getCurrentCategoryProperty(property) {
    const currentCategory = this.getCurrentCategory()

    return currentCategory ? currentCategory[property] : null
  }

  getCurrentBookmark() {
    return this.BookmarksModel.getCurrentBookmark()
  }

  getCurrentBookmarkCategorySlug() {
    const currentBookmark = this.getCurrentBookmark()

    return currentBookmark ? currentBookmark.category : null
  }

  initNewBookmark() {
    return {
      title: '',
      url: '',
      category: this.getCurrentCategorySlug(),
    }
  }

  createBookmark() {
    const bookmark = this.initNewBookmark()

    this.BookmarksModel.setCurrentBookmark(bookmark)
  }

  editBookmark(bookmark) {
    this.BookmarksModel.setCurrentBookmark(bookmark)
  }

  resetBookmark() {
    this.BookmarksModel.setCurrentBookmark(null)
  }

  isCurrentBookmark(bookmark) {
    const currentBookmark = this.BookmarksModel.getCurrentBookmark()

    return currentBookmark && currentBookmark.id === bookmark.id
  }

  saveBookmark(bookmark) {
    if (bookmark.id !== undefined) {
      this.BookmarksModel.editBookmark(bookmark)
    } else {
      this.BookmarksModel.createBookmark(bookmark)
    }
  }

  deleteBookmark(bookmark) {
    this.BookmarksModel.deleteBookmark(bookmark)
  }

  onSave(bookmark) {
    this.saveBookmark(bookmark)

    this.resetBookmark()
  }

  onDelete(bookmark) {
    this.resetBookmark()

    this.deleteBookmark(bookmark)
  }
}

export default BookmarksController
