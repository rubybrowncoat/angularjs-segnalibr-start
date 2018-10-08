import angular from 'angular'

import CategoryItemModule from '../category.item/category.item'

import categoriesComponent from './categories.component'

const CategoriesModule = angular.module('segnalibr.categories', [
  CategoryItemModule.name,
])
.component('categories', categoriesComponent)

export default CategoriesModule
