angular.module('Segnalibr', [
  'ui.router',

  'segnalibr.models.bookmarks',

  'segnalibr.categories',
  'segnalibr.categories.bookmarks',
])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'segnalibr',
    url: '',
    abstract: true,
  })

  $urlRouterProvider.otherwise('/')
})
.controller('MainController', function($scope, BookmarksModel) {
  $scope.bookmarks = BookmarksModel.getBookmarks()

  $scope.currentCategory = null

  $scope.setCategory = category => {
    $scope.cancelForm()

    $scope.currentCategory = category
  }

  $scope.isCurrentCategory = category => {
    return $scope.currentCategory !== null
      && $scope.currentCategory.slug === category.slug
  }

  $scope.state = {
    create: false,
    edit: false,
  }

  $scope.canCreate = () =>
    $scope.currentCategory !== null
    && !$scope.state.edit

  $scope.isCreating = () =>
    $scope.state.create
    && !$scope.state.edit

  $scope.isEditing = () =>
    $scope.state.edit
    && !$scope.state.create

  $scope.doCreate = () => {
    $scope.state.create = true
    $scope.state.edit = false

    $scope.makeNewBookmark()
  }

  $scope.doEdit = bookmark => {
    $scope.state.create = false
    $scope.state.edit = true

    $scope.makeEditedBookmark(bookmark)
  }

  $scope.cancelForm = () => {
    $scope.state.create = false
    $scope.state.edit = false
  }

  // CRUD
  $scope.makeNewBookmark = () => {
    $scope.newBookmark = {
      title: '',
      url: '',
      category: $scope.currentCategory.slug,
    }
  }

  $scope.createBookmark = bookmark => {
    $scope.bookmarks.push({
      ...bookmark,

      id: $scope.bookmarks.length + 1,
    })

    $scope.makeNewBookmark()
  }

  $scope.currentBookmark = null

  $scope.makeEditedBookmark = (bookmark = {}) => {
    $scope.currentBookmark = bookmark
    $scope.editedBookmark = angular.copy(bookmark)
  }

  $scope.isCurrentBookmark = bookmark =>
    $scope.currentBookmark !== null
    && $scope.currentBookmark.id === bookmark.id
    && $scope.isEditing()

  $scope.editBookmark = editedBookmark => {
    const index = $scope.bookmarks.findIndex(bookmark => bookmark.id === editedBookmark.id)

    $scope.bookmarks.splice(index, 1, editedBookmark)

    $scope.cancelForm()
  }

  $scope.deleteBookmark = deletedBookmark => {
    if (confirm(`Stai per cancellare il bookmark "${deletedBookmark.title}". L'operazione non è reversibile.`)) {
      const index = $scope.bookmarks.findIndex(bookmark => bookmark.id === deletedBookmark.id)

      $scope.bookmarks.splice(index, 1)

      $scope.cancelForm()
    }
  }
})
