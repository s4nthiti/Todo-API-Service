const path = require('path');
const dataPath = path.join('./dataStore/data.json');
const fs = require('fs');

// ฟังก์ชันอ่านข้อมูลจากไฟล์ JSON
const readTodos = () => {
  try {
    const data = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// ฟังก์ชันเขียนข้อมูลลงในไฟล์ JSON
const saveTodos = (todos) => {
  const data = JSON.stringify(todos, null, 2);
  fs.writeFileSync(dataPath, data);
};

async function getAll() {
  const data = readTodos();
  return data;
}

async function getById(id) {
  const data = readTodos();
  const todo = data.find((todo) => todo.id == id);
  return todo;
}

async function create(task) {
  const data = readTodos();
  data.push({ id: data.length + 1, task, completed: false });
  saveTodos(data);
  return {
    message: 'Task added successfully',
    data: data[data.length - 1]
  };
}

async function update(id, task, completed) {
  const data = readTodos();
  const index = data.findIndex((x) => x.id == id);

  if(index === -1) {
    return {
      message: "Index not found"
    }
  }

  data[index] = { id, task, completed: completed ? completed : false };
  saveTodos(data);
  return {
    message: 'Task updated successfully',
    data
  }
}

async function deleteById(id) {
  const data = readTodos();
  const index = data.findIndex((x) => x.id == id);

  if(index === -1) {
    return {
      message: "Index not found"
    }
  }

  data.splice(index, 1);
  saveTodos(data);
  return {
    message: 'Task deleted successfully',
    id
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById
};