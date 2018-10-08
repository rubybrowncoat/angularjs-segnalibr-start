class AppController {
  // @ngInject
  constructor(CategoriesModel) {
    this.CategoriesModel = CategoriesModel
  }

  resetCategory() {
    this.CategoriesModel.setCurrentCategory(null)
  }
}

export default AppController
