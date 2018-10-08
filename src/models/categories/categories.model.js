const endpoints = {
  fetch: 'data/categories.json',
}

class CategoriesModel {
  // @ngInject
  constructor($http, $q, $rootScope, BookmarksModel) {
    'ngInject'

    this.$http = $http
    this.$q = $q

    this.$rootScope = $rootScope

    this.BookmarksModel = BookmarksModel

    this.currentCategory = null
    this.categories = []
  }

  getData(response) {
    return response.data
  }

  gatherCategories(data) {
    this.categories = data

    return this.categories
  }

  getCategories() {
    return this.$q.when(this.categories.length
      ? this.categories
      : this.$http.get(endpoints.fetch)
        .then(response => this.getData(response))
        .then(data => this.gatherCategories(data))
    )
  }

  getCurrentCategory() {
    return this.currentCategory
  }

  setCurrentCategory(category) {
    this.getCategories()
      .then(() => {
        this.BookmarksModel.setCurrentBookmark(null)
        this.currentCategory = category
      })
  }
}

export default CategoriesModel
