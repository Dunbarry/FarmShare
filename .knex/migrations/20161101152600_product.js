
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('product', function (table) {
      table.increments('id')
      table.string('item')
      table.integer('farm_id')
      table.integer('amount_available')
      table.integer('price')
      table.boolean('available')
    }),
    knex.schema.createTable('consumer', function (table) {
      table.increments('id')
      table.string('name')
      table.string('location')
      table.string('subscriptions')
      table.string('seeking')
      table.string('image_url')
    }),
    knex.schema.createTable('producer', function (table) {
      table.increments('id')
      table.string('name')
      table.string('location')
      table.string('info')
      table.string('produce')
      table.string('image_url')
    })
  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('product'),
    knex.schema.dropTable('consumer'),
    knex.schema.dropTable('producer')
  ])
};
