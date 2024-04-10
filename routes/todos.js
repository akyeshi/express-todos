const express = require("express");
const router = express.Router();
const todosCtrl = require('../controllers/todos'); 

// GET todos's view 
router.get("/", todosCtrl.index);

// GET /todos/new 
router.get("/new", todosCtrl.new); 

// GET /todos/:id (show funcationality/action -> display detail of a single todo)
router.get('/:id', todosCtrl.show); 

// POST /todos 
router.post("/", todosCtrl.create); 


module.exports = router;
