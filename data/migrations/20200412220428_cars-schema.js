exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments();
    tbl.text("vin", 128).unique().notNullable();
    tbl.text("make", 128).notNullable();
    tbl.text("model", 128).notNullable();
    tbl.integer("year").notNullable();
    tbl.decimal("mileage").notNullable();
    tbl.text("transmission", 128);
    tbl.text("titleStatus", 128);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
