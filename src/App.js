import React from 'react';
import './App.css';
import { connect } from 'react-redux';
//components
import FormContainer from './components/FormContainer';
import TodoList from './components/TodoList';
//actions
import {
  setTodos, deleteTodos, completeTodos,
  setStatus, setStatusCompleted, setStatusUncompleted, setStatusAll
} from './components/redux/reducer';


function App(props) {


  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <FormContainer
        setTodos={props.setTodos}
        todos={props.todos}
        status={props.status}
        setStatus={props.setStatus}
        setStatusCompleted={props.setStatusCompleted}
        setStatusUncompleted={props.setStatusUncompleted}
        setStatusAll={props.setStatusAll}/>
      <TodoList
        todos={props.todos}
        deleteTodos={props.deleteTodos}
        completeTodos={props.completeTodos}
        filteredTodos={props.filteredTodos}  />
    </div>
  );
}


let mapStateToProps = (state) => {
  return {
    todos: state.todoPage.todos,
    status: state.todoPage.status,
    filteredTodos: state.todoPage.filteredTodos
  }
}

export default connect(mapStateToProps, {
  setTodos, deleteTodos, completeTodos,
  setStatus, setStatusCompleted, setStatusUncompleted, setStatusAll
})(App);
