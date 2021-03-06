const { Pizza } = require(' ../models');
const res = require('express/lib/response');

const pizzaController = {
    //the functions will go here as methods
//get all pizzas
//createPizza
createPizza({ body }, res) {
    Pizza.create(body)
    .then(dbPizzaData => res.json(dbPizzaData))
    .catch(err => res.json(err));
},

//update pizza by id
updatePizza({ params, body }, res) {
    Pizza.findOneAndUpdate({ _id: params.id }, body, { new: true })
    .then(dbPizzaData => {
        if(!dbPizzaData) {
            res.status(404).json({ message: 'No pizza found with this id!' });
            return;
        }
        res.json(dbPizzaData);
})
.catch(err => res.status(400).json(err));
},
getAllPizza(req, res) {
    Pizza.find({})
    .then(dbPizzaData => res.json(dbPizzaData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
},

//get one pizza by id
getPizzaById({ params }, res) {
    Pizza.findOne({ _id: params.id })
    .then(dbPizzaData => {
        //if no pizza is found, send 404
        if (!dbPizzaData) {
            res.status(404).json({ message: 'No pizza found with this id!' });
            return;
        }
        res.json(dbPizzaData);
    });
},
}

module.exports =pizzaController;