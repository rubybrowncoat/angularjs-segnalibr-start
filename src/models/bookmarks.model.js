angular.module('segnalibr.models.bookmarks', [
  // No Dependencies
])
.service('BookmarksModel', function() {
  const bookmarks = [
    { id: 1, title: 'AngularJS', url: 'https://angularjs.org', category: 'development' },
    { id: 2, title: 'Node.js', url: 'https://nodejs.org', category: 'development' },
    { id: 3, title: 'GitHub', url: 'https://github.com', category: 'development' },
    { id: 4, title: 'Material Design', url: 'https://material.io/design/', category: 'design' },
    { id: 5, title: 'Dwarf Fortress', url: 'http://www.bay12games.com/dwarves/', category: 'videogames' },
    { id: 6, title: 'The Noun Project', url: 'https://thenounproject.com', category: 'design' },
    { id: 7, title: 'Rocket League', url: 'https://www.rocketleague.com', category: 'videogames' },
    { id: 8, title: 'Honorverse', url: 'https://en.wikipedia.org/wiki/Honorverse', category: 'scifi' },
  ]

  this.getBookmarks = () => bookmarks
})
