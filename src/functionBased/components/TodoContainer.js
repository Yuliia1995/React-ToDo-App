import React, {useState, useEffect} from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4} from "uuid";
import "./App.css" // Way to import App.css to TodoContainer.js
import {Route, Switch} from 'react-router-dom';
import About from "../../pages/About";
import NotMatch from "../../pages/NotMatch";
import Navbar from "./Navbar";


const TodoContainer = () => {
    const [todos, setTodos] = useState(getInitialTodos())

    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
            return todo
            })
        )
    }

    const addTodoItem = (title) => {
        const newTodo ={
            id: uuidv4(),
            title: title,
            compeleted: false
        };
        //We are adding the new item to the current todos list which can be grabbed using the spread operator 
        setTodos(
            [...todos, newTodo]
        )
    }

    const delTodo = id =>{
        setTodos([
            ...todos.filter(todo => {
                    return todo.id !== id;
                })]
        )
    }

    const handleChange = id => {
        //I am guessing setState refers to updating state object
        setTodos(prevState => 
            prevState.map(todo => {
              if (todo.id === id) {
                return {
                    //If ... is omitted, then when checked, name disappers and checkbox toggle behaves weird
                    //WHY? 
                    //In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.
                    ...todo, //ANSWER: this includes id and title keys from todos array for each todo
                    /* Alternatively ...todo can be writen like below:
                    id: todo.id,
                    title: todo.title,
                    */
                    completed: !todo.completed,
                  }
              }
              return todo;
            }),
        )
    }
    //useEffect is used instead of componentDidMount/DidUpdate/WillUnmount class methods
    //can use multiple useEffect statements
    // useEffect(() => {//Render items from the local storage
    //     console.log("test run")
    //     const temp = localStorage.getItem("todos");
    //     const loadedTodos = JSON.parse(temp);
    //     if (loadedTodos) {
    //         setTodos(loadedTodos)
    //     }
    // }, [setTodos]) // Although setTodos never changes, we're passing it as a dependency ???? WHY?
    function getInitialTodos() {
        const temp = localStorage.getItem("todos");
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
    }
    useEffect(() => {
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    }, [todos]) // Only when todos change, the useEffect will execute the function (save the updates todos to the local storage)
    return (
        <>
            <Navbar />
            <Switch> 
                {/* W/o the SWITCH, the path will always match the urls, so that all the views will render */}
            <Route exact path="/React-ToDo-App/">
                {/* Instead of class attribute JSX uses className */}
                <div className="container"> 
                    <div className="inner">
                        <Header />
                        <InputTodo addTodoItem={addTodoItem}/>
                        <TodoList setUpdate={setUpdate} delTodoProps={delTodo} handleChangeProps={handleChange} todos={todos} />
                    </div>
                </div>
            </Route>
            {/* <Route path="/about">
                <About /> */}
            <Route exact path="/React-ToDo-App/about" component={About} > 
            {/* component attribute allows to access url, path, params for nested routing */}
            </Route>
            <Route path="*">
                {/* path="*" serves as a fall back, if switch doesn't match anything, instead of rendering null or nothing, it will render this page below */}
                <NotMatch />
            </Route>

            </Switch>
        </>
    )
}

export default TodoContainer