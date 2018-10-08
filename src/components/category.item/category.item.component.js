import template from './category.item.html'

import './category.item.scss'

const categoryItemComponent = {
  bindings: {
    category: '<',
    select: '&',
  },

  template,

  controllerAs: 'categoryItemController',
}

export default categoryItemComponent
