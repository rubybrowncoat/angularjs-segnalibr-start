import angular from 'angular'

import bookmarkSaveComponent from './bookmark.save.component'

const BookmarkSaveModule = angular.module('bookmarkSave', [
  // No Deps
])
.component('bookmarkSave', bookmarkSaveComponent)

export default BookmarkSaveModule
