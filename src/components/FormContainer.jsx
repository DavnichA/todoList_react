import React, { useState, useEffect} from 'react';
import Form from './Form';


const FormContainer = ({status, setStatusCompleted, setStatusUncompleted, setStatusAll, todos, setTodos, setStatus}) => {
    const [inputText, setInputText] = useState("");

    useEffect(() => {
        filterHandler();
    }, [todos, status]);

    //input text todo
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    //add todo in store
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos(inputText);
        setInputText("");
    }

    // define status and in store
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    //choice option and create new arr in store
    const filterHandler = () => {
        switch (status) {
            case "completed":
                setStatusCompleted();
                break;
            case "uncompleted":
                setStatusUncompleted();
                break;
            default:
                setStatusAll();
                break;
        }
    }


    return (
        <Form 
        inputText={inputText}
        inputTextHandler={inputTextHandler}
        submitTodoHandler={submitTodoHandler}
        statusHandler={statusHandler}/>
    );
}

export default FormContainer;