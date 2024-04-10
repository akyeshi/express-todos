const express = require('express'); 
const router = express.Router(); 

/* Get today's calendar */
router.get('/today', function (req, res, next) {
  res.render('calendar', { title: 'express', today: new Date()})
} ); 


module.exports = router; 