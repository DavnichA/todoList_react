import React from 'react';


const Todo = (props) => {
    


    const deleteHandler = () => {
        props.deleteTodos(props.todo.id);
    };

    const competeHandler = () => {
        props.completeTodos(props.todo.id)
    }

    return (
        <div className="todo">
            <li className={`todo-item ${props.todo.completed ? "completed" : ''} `}>{props.text}</li>
            <button onClick={competeHandler} className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>
            <button onClick={deleteHandler} className='trash-btn' >
                <i className='fas fa-trash'></i>
            </button>
        </div>
    );
}

export default Todo;