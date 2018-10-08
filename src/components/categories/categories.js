import angular from 'angular'

import categoriesComponent from './categories.component'

const CategoriesModule = angular.module('segnalibr.categories', [
  // No Deps
])
.component('categories', categoriesComponent)

export default CategoriesModule
