const Todo = require("../models/todo");

module.exports = {
  // first index is the name of the property on the todosCtrl(controller)
  // second index is the name of the function below
  index: index,
  show,
  new: newTodo, 
  create
};

function show(req, res) {
  // res.send(req.params);
  // res.send(req.body);
  res.render("todos/show", {
    todo: Todo.getOne(req.params.id),
    title: `To-Do Detail (#${req.params.id})`,
  });
}

// controllers/todos.js
function index(req, res) {
  // ejs by default looks into /views folder
  // DO NOT use a leading slash when rendering !
  // render view, also pass in data
  res.render("todos/index", {
    todos: Todo.getAll(),
    title: "All To-Dos",
  });
}

function newTodo(req, res){
  res.render("todos/new", {title: 'New Todo'})
}

function create(req, res){
  console.log(req.body); 
  // the model is responsible for creating data 
  Todo.create(req.body); 
  // do a redirect anytime data is changed i.e. post/put 
  res.redirect('/todos'); 
}