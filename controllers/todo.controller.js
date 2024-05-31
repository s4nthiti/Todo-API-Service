const todoService = require("../services/todo.service");

async function getAll(req, res) {
  try {
    const response = await todoService.getAll();
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while getting all data" });
  }
}

async function getById(req, res) {
  try {
    const response = await todoService.getAll(req.params.id);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while getting data" });
  }
}

async function create(req, res) {
  try {
    const response = await todoService.create(req.body);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while creating new data" });
  }
}

async function update(req, res) {

}

async function deleteById(req, res) {

}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById
}