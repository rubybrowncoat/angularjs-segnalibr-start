angular.module('segnalibr.models.categories', [
  // No Dependencies
])
.service('CategoriesModel', function() {
  const categories = [
    { id: 42, slug: 'development', name: 'Development' },
    { id: 21, slug: 'design', name: 'Design' },
    { id: 84, slug: 'scifi', name: 'Science Fiction' },
    { id: 7, slug: 'videogames', name: 'Video Games' },
  ]

  this.getCategories = () => categories
})
