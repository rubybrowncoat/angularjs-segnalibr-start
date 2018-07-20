angular.module('segnalibr.models.categories', [
  // No Dependencies
])
.service('CategoriesModel', function($http, $q) {
  let categories = []
  let currentCategory = null

  const ENDPOINTS = {
    FETCH: 'data/categories.json',
  }

  const extractData = response => response.data
  const gatherCategories = data => categories = data

  this.getCategories = () => $q.when(categories.length
    ? categories
    : $http.get(ENDPOINTS.FETCH)
      .then(extractData)
      .then(gatherCategories)
  )

  const findCategoryBySlug = categorySlug =>
    categories.find(category => category.slug === categorySlug)

  this.getCategoryBySlug = categorySlug => {
    const deferred = $q.defer()

    if (categories.length) {
      deferred.resolve(findCategoryBySlug(categorySlug))
    } else {
      this.getCategories()
        .then(() => deferred.resolve(findCategoryBySlug(categorySlug)))
    }

    return deferred.promise
  }

  this.setCurrentCategoryBySlug = categorySlug => {
    this.getCategoryBySlug(categorySlug)
      .then(category => currentCategory = category)
  }

  this.getCurrentCategory = () => currentCategory

  this.getCurrentCategoryName = () => currentCategory ? currentCategory.name : ''
  this.getCurrentCategorySlug = () => currentCategory ? currentCategory.slug : ''
})
