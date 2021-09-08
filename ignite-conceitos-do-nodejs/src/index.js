const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUser(username) {
  return users.findIndex(u => u.username === username);

}

function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers;

  const existsUser = checksExistsUser(username);

  if(existsUser<0){
    return response.status(404).json({error: 'Mensagem do erro'})
  }

  request.user = users[existsUser]; 
  request.indexUser = existsUser 

  return next();
}

app.post('/users', (request, response) => {
  const {name, username} = request.body;

  const existsUser = checksExistsUser(username);

  if(existsUser >= 0) {
    return response.status(400).json({error: 'Mensagem do erro'})
  }

  const user = {
    id: uuidv4(), 
    name,
    username,
    todos: []
  }

  users.push(user)

  return response.json(user);
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  const {user: { todos }} = request;

  return response.json(todos);
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  const {title, deadline} = request.body;

  let {user, indexUser} = request;

  const todo = {
    id: uuidv4(),
    title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date()
  }

  user.todos.push(todo)

  users[indexUser] = user;
  
  return response.status(201).json(todo);
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  const {title, deadline} = request.body;
  const {id} = request.params;
  let {user, indexUser} = request;

  const { todos } = user;
  const existsTodo = todos.findIndex(t => t.id === id);

  if(existsTodo<0) {
    return response.status(404).json({error: 'Mensagem de erro'});
  }
  
   const todo = {
    id,
    title,
    done: todos[existsTodo].done,
    deadline: new Date(deadline),
    created_at: todos[existsTodo].created_at
  };
  todos[existsTodo] = todo
  user.todos = todos;
  users[indexUser] = user;

  return response.json(todo);
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  const { indexUser } = request;
  
  const { id } = request.params;

  const existsTodo = users[indexUser].todos.findIndex(t=> t.id === id); 

  if(existsTodo<0) {
    return response.status(404).json({error: 'Mensagem de erro'});
  }

  users[indexUser].todos[existsTodo].done = true;

  return response.json(users[indexUser].todos[existsTodo]);
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { indexUser } = request;
  
  const { id } = request.params;

  const existsTodo = users[indexUser].todos.findIndex(t=> t.id === id); 

  if(existsTodo<0) {
    return response.status(404).json({error: 'Mensagem de erro'});
  }

  users[indexUser].todos.splice(existsTodo, 1);

  return response.status(204).json(users[indexUser].todos);
});

module.exports = app;