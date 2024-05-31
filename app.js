const express = require('express')
const swagger = require('./swagger')
const todo = require('./todo')
const todoRoutes = require('./routes/todo.routes');

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello, world!')
});

app.use('/api/todos', todoRoutes);

// app.get('/todos', todo.getAll)
// app.post('/todos', todo.create)
// app.get('/todos/:id', todo.getById)
// app.put('/todos/:id', todo.update)
// app.delete('/todos/:id', todo.delete)

swagger(app)

app.listen(3000, () => {
  console.log('Server started on port 3000')
})