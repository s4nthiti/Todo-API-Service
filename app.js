const express = require('express')
const swagger = require('./swagger')
const todoRoutes = require('./routes/todo.routes');

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello, world!')
});

app.use('/api/todos', todoRoutes);

swagger(app)

app.listen(3000, () => {
  console.log('Server started on port 3000')
})