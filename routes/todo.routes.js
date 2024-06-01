const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller');

module.exports = router;

router.get('/', todoController.getAll);
router.get('/:id', todoController.getById);
router.post('/create', todoController.create);
router.put('/:id', todoController.update);
router.delete('/:id', todoController.deleteById);