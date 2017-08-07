
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, title: 'The Fellowship of the Ring', author: 'J.R.R Tolkien', published: 1954, description: 'Returning Jewerly.'},
        {id: 2, title: 'The Two Towers', author: 'J.R.R Tolkien', published: 1954, description: 'Still determined to return that Jewerly.'},
        {id: 3, title: 'The Return of the King', author: 'J.R.R Tolkien', published: 1955, description: 'Decided not to return the jewley.'},
      ]);
    });
};
