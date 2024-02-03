const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todoController');

router.post('/todos', todosController.postTodos);
router.get('/todos', todosController.getAllTodos);
router.get('/todos/:id', todosController.getTodosById);
router.put('/todos/:id', todosController.updateTodo);
router.delete('/todos/:id', todosController.deleteTodo);

module.exports = router;
