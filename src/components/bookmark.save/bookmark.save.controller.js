class BookmarkSaveController {
  $onChanges() {
    this.editedBookmark = {
      ...this.bookmark
    }
  }

  isCreating() {
    return this.editedBookmark.id === undefined
  }

  isEditing() {
    return this.editedBookmark.id !== undefined
  }
}

export default BookmarkSaveController
