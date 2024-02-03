/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('todo').del();
  await knex('todo').insert([
    { todo_id: 1, description: 'Deploy my server & database on render' },
  ]);
};
