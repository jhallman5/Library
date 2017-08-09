
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {id: 1, user_id: 1, book_id: 2, content:'I guess this made sense, but I don\'t know why frodo ran away.', created_on: '2011-04-18'},
        {id: 2, user_id: 1, book_id: 3, content:'Knew that guy was bad news.', created_on: '2011-07-24'},
        {id: 3, user_id: 1, book_id: 1, content:'The first book is always the best book.', created_on: '2011-04-18'},
        {id: 4, user_id: 3, book_id: 1, content:'NOT A FAN, not even going to watch the others.', created_on: '2013-06-03'},
        {id: 5, user_id: 2, book_id: 1, content:'I read this 4 times before moving on to the next book.', created_on: '2011-06-05'},
        {id: 6, user_id: 2, book_id: 2, content:'Read this one 6 times.', created_on: '2012-08-05'},
        {id: 7, user_id: 2, book_id: 3, content:'Now time to read all of them sequentially.', created_on: '2013-12-03'},
      ]);
    });
};
