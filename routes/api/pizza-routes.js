const router = require('express').Router();

//Set up Get all and Post at /api/pizzas
router
.route('/')
.get()
.post();

//Set  up Get one. PUT, and DELETE at /api/pizzas/:id
router.route('/:id')
.get()
.put()
.delete();

module.exports = router;

