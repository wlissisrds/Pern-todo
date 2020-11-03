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
        const newTodo = await pool.query
        ("INSERT INTO todo (description) VALUES($1) RETURNING *",
        [description]); //RETURNING * só para retornar os dados mais organizados

        res.json(newTodo.rows[0]);

        //mostrar o corpo da requisição
        // console.log(req.body)
    } catch (error) {
        console.error(error.message);
    }
})

// get all todos
app.get("/todos", async (req, res) => {
    try {
        //Selecionando toda a tabela todo
        const allTodo = await pool.query
        ("SELECT * FROM todo");

        //respondendo todas as linhas da tabela
        res.json(allTodo.rows);
        
    } catch (error) {
        console.error(error.message);
    }
})


// get a todo
app.get("/todos/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const todo = await pool.query
        ("SELECT * FROM todo WHERE todo_id = $1", [id]);

        res.json(todo.rows[0])

    } catch (error) {
        console.error(error.message);
    }
})

// update a todo
app.put("/todos/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {description} = req.body;

        const updateTodo = await pool.query
        ("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);

        res.json("Todo was updated!");

    } catch (error) {
        console.error(error.message);
    }
})

// delete a todo
app.delete("/todos/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const deleteTodo = await pool.query
        ("DELETE FROM todo WHERE todo_id = $1", [id]);

        res.json("Todo was deleted!")

    } catch (error) {
        console.error(error.message);
    }
})



app.listen(5000, ()=> {
    console.log("server has started on port 5000")
})