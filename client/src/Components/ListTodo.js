import React, {Fragment, useEffect, useState} from 'react';
// component
import EditTodo from "./EditTodo";


const ListTodo = () => {

    //criando Estado de lista de Todos
    const [todos, setTodos] = useState([]);

    //delete todo function
    const deleteTodo = async (id) => {
        try {
            // Especificando o metodo DELETE
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });

            //se existe um todo com id igual o id que eu Deletelei
            setTodos(todos.filter(todo => todo.todo_id !== id));

        } catch (err) {
            console.error(err.message)
        }
    }

    // jogano todos no estado de lista
    const getTodos = async() => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();

            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    } 

    useEffect( () => {
        getTodos();
    }, []);

    
    return(
        <Fragment>
             <table className="table mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {/*<tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr> */}
      {todos.map(todo => (
          <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td><EditTodo todo = {todo}></EditTodo></td>
              <td><button className="btn btn-danger" 
              onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
          </tr>
      ))}
      
    </tbody>
  </table>
        </Fragment>
    )
}

export default ListTodo;