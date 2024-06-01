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
    const { id } = req.params;
    console.log("Req...", req.params);
    if (!id) {
      return res.status(400).json({ error: 'Missing id property' });
    }
    const response = await todoService.getById(id);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while getting data" });
  }
}

async function create(req, res) {
  try {
    const { task } = req.body;
    if (!task) {
      return res.status(400).json({ error: 'Missing task property' });
    }
    const response = await todoService.create(task);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while creating new data" });
  }
}

async function update(req, res) {
  try {
    const id = parseInt(req.params.id);
    const { task, completed } = req.body;
    if (!id) {
      return res.status(400).json({ error: 'Missing id property' });
    }
    if (!task) {
      return res.status(400).json({ error: 'Missing task property' });
    }
    const response = await todoService.update(id, task, completed);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while updating new data" });
  }
}

async function deleteById(req, res) {
  try {
    const id = parseInt(req.params.id);
    if (!id) {
      return res.status(400).json({ error: 'Missing id property' });
    }
    const response = await todoService.deleteById(id);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while updating new data" });
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById
}