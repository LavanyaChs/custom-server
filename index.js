const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors')

const db = require('./db')
const todoRouter = require('./routes/todo-router')
const app = express();

const API_PORT = 8080

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(bodyParser.json())

db.on('error',console.error.bind(console,'MongoDB connection error.'))

app.get('/', (req, res) => {
    res.send("Custom-Server welcomes you")
})
app.use('/api', todoRouter)

app.listen(API_PORT,()=>console.log(`Custom-server running on ${API_PORT} `))