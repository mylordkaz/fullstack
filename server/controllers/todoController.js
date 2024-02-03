const knex = require('../db/connection');

const postTodos = async (req, res) => {
  try {
    const description = req.body;
    console.log(description);
    const newTodo = await knex('todo')
      .insert(description)
      .returning('description');
    res.send(newTodo[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
};
const getAllTodos = async (req, res) => {
  try {
    const allTodos = await knex('todo').select('*');
    res.send(allTodos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
};
const getTodosById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await knex('todo').where({ todo_id: id }).first();
    res.send(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
};
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const description = req.body;
    await knex('todo').where({ todo_id: id }).update(description);
    res.send('todo was updated');
    console.log(description);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
};
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await knex('todo').where({ todo_id: id }).del();
    res.send('todo was deleted');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  postTodos,
  getAllTodos,
  getTodosById,
  updateTodo,
  deleteTodo,
};
