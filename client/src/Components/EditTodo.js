import React, { Fragment, useState } from 'react';

//recebendo a PROPS todo de listTodo
const EditTodo = ({todo}) => {
    
    const [description, setDescription] = useState(todo.description);

    //update function
    const updateDescription = async (e) => {
        //evento
        e.preventDefault();

        try {
            const body = {description};
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
        } catch (err) {
            console.error(err.message)
        }
    }
    
    return (
        <Fragment>
            <button 
            type="button" 
            className="btn btn-warning" 
            data-toggle="modal" 
            data-target={`#id${todo.todo_id}`}>
                Edit
            </button>

            {/*
                id = id5
            */}
            <div className="modal" id={`id${todo.todo_id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Todo</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control" value={description} 
                            onChange={e => setDescription(e.target.value)}></input>
                        </div>
                        <div className="modal-footer">
                            <button 
                            type="button" 
                            className="btn btn-secondary" 
                            data-dismiss="modal"
                            onClick={e => updateDescription(e)}>Close</button>

                            <button 
                            type="button" 
                            className="btn btn-warning">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default EditTodo;