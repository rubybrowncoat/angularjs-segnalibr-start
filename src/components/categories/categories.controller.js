class CategoriesController {
  // @ngInject
  constructor(CategoriesModel) {
    this.categories = CategoriesModel.categories
  }
}

export default CategoriesController
