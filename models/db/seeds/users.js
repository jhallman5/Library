
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'jhallman5@gmail.com', username: 'jhallman5', password: '$2a$12$TVerbCKf97n/8YTWrdnpkuaNecg/s9a6bLhh9jUrJ4sJeh95ifRQe', member_since: '1996-10-30'},
        {id: 2, email: 'steven4@gmail.com', username: 'steven4', password: '$2a$12$GcTuX0gfS.yD1PfqltzKV.3gw1N4ccr8vzx63ARDYlTAyrkNcfNbu', member_since: '1998-01-03'},
        {id: 3, email: 'lisa3@gmail.com', username: 'lisa3', password: '$2a$12$8KS8ODVh5ad2qcf1uCjnk.yp1neqGRP/9mUI1Bq0eQpfT42K.YZfW', member_since: '2001-08-17'},
      ]);
    });
};

/* Password Key
id: 1, password: tomato
id: 2, password: orange
id: 3, password: banana
*/
