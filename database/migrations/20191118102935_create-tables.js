exports.up = async function(knex) {
  await knex.schema

    .createTable("users", users => {
      users.increments();

      users
        .string("email", 128)
        .notNullable()
        .unique();

      users
        .string("username", 128)
        .notNullable()
        .unique();
      users.string("password", 128).notNullable();
    })

    .createTable("tourists", tourists => {
      tourists.increments();

      tourists.string("firstname", 128).notNullable();
      tourists.string("lastname", 128).notNullable();
      tourists
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users");
    })

    .createTable("guides", guides => {
      guides.increments();

      guides.string("firstname", 128).notNullable();
      guides.string("lastname", 128).notNullable();
      guides
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users");
    })

    .createTable("trips", trips => {
      trips.increments();

      trips.string("tourname", 128).notNullable();

      trips.string("description", 255).notNullable();
      trips.string("price", 128).notNullable();
      trips.string("duration", 128).notNullable();
      trips.string("location", 128).notNullable();
      trips.string("language", 128);
      trips
        .integer("guide_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("guides");
    })

    .createTable("users_trips", tbl => {
      tbl.increments();
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users");
      tbl
        .integer("guide_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("guides");
      tbl
        .integer("trip_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("trips");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("users_trips")
    .dropTableIfExists("trips")
    .dropTableIfExists("guides")
    .dropTableIfExists("tourists")
    .dropTableIfExists("users");
};
