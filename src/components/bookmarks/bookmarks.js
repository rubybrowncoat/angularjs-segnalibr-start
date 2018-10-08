import angular from 'angular'

import BookmarkSaveModule from '../bookmark.save/bookmark.save'

import bookmarksComponent from './bookmarks.component'

const BookmarksModule = angular.module('segnalibr.bookmarks', [
  BookmarkSaveModule.name,
])
.component('bookmarks', bookmarksComponent)

export default BookmarksModule
