class CategoriesController {
  // @ngInject
  constructor(CategoriesModel) {
    this.categories = []

    this.CategoriesModel = CategoriesModel
  }

  onCategorySelect(category) {
    this.CategoriesModel.setCurrentCategory(category)
  }

  isCurrentCategory(category) {
    const currentCategory = this.CategoriesModel.getCurrentCategory()

    return currentCategory && currentCategory.slug === category.slug
  }

  $onInit() {
    this.CategoriesModel.getCategories()
      .then(categories => this.categories = categories)
  }
}

export default CategoriesController
