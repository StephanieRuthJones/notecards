
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const environment = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[environment];
const knex = require('knex')(config);

app.use(cors())

app.get('/', (req, res, next) => {
    knex('methods')
        //knex.select('*').from('methods') is longhand for knex('methods)
        .then((rows) => {
            res.send(rows);
        })
        .catch((err) => {
            next(err);
        });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))