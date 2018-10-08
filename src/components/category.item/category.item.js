import angular from 'angular'

import categoryItemComponent from './category.item.component'

const CategoryItemModule = angular.module('categoryItem', [
  // No Deps
])
.component('categoryItem', categoryItemComponent)

export default CategoryItemModule
