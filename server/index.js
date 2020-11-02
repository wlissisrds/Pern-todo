const express = require('express');
const cors = require('cors');
const pool = require('./db');
const app = express();


// middleware
app.use(cors()); //req.body
// permissao para acessar dados tipo JSON
app.use(express.json());

// ROUTES

// create todo
app.post("/todos", async(req, res) => {
    try {
        const {description} = req.body;

        // query -> buscar informação para o pool
        // VALUES($1, $2) correspondente aos valores [v1, v2];
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1)",
        [description]);

        res.json(newTodo);

        //mostrar o corpo da requisição
        // console.log(req.body)
    } catch (error) {
        console.error(error.message);
    }
})

// get all todos

// get a todo

// update a todo

// delete a todo



app.listen(5000, ()=> {
    console.log("server has started on port 5000")
})