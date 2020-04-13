exports.seed = function (knex) {
  return knex("cars")
    .truncate()
    .then(function () {
      return knex("cars").insert([
        {
          vin: "00000000000000000000000000000000",
          make: "Ford",
          model: "Escort",
          year: 2010,
          mileage: 89000,
          transmission: "v4",
          titleStatus: "clean",
        },
        {
          vin: "1111111111111111111111111111111",
          make: "Toyota",
          model: "Tercel",
          year: 1997,
          mileage: 108800,
          transmission: "v4",
          titleStatus: "salvage",
        },
      ]);
    });
};
