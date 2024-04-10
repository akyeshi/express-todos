const express = require("express");
const router = express.Router();
const todosCtrl = require('../controllers/todos'); 

// GET todos's view 
router.get("/", todosCtrl.index);

// GET /todos/:id (show funcationality/action -> display detail of a single todo)
router.get('/:id', todosCtrl.show); 



module.exports = router;
