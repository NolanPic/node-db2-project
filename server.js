
const express = require('express');
const carsDb = require('./data/db');

const server = express();

server.use(express.json());

server.get('/api', (req, res) => {
    carsDb.get()
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Something went wrong getting cars" });
        });
});

server.get('/api/:id', (req, res) => {
    const { id } = req.params;
    carsDb.getById(id)
        .then(car => {
            res.status(200).json(car);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Something went wrong getting this car" });
        });
});

server.post('/api', (req, res) => {
    const car = req.body;
    carsDb.insert(car)
        .then(inserted => {
            return carsDb.getById(inserted[i])
                .then(insertedCar => res.status(201).json(insertedCar));
        })
        .catch(err => {
            res.status(500).json({ error: "Something went wrong creating this car" });
        });
});

module.exports = server;
