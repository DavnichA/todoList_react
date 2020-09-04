import React from 'react';


const Form = (props) => {

    return (
        <form>
            <input value={props.inputText} onChange={props.inputTextHandler} type="text" className="todo-input" />
            <button onClick={props.submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus"></i>
            </button>
            <div className="select">
                <select onChange={props.statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;