import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {props.filteredTodos.map(todo => (
                    <Todo
                        text={todo.text}
                        key={todo.id}
                        todos={props.todos}
                        setTodos={props.setTodos}
                        todo={todo}
                        deleteTodos={props.deleteTodos}
                        completeTodos={props.completeTodos}
                         />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;