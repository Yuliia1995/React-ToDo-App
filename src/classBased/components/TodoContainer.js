import React from "react";
import TodoList from "./TodoList";
import Header from "../../functionBased/components/Header";
import InputTodo from "../../functionBased/components/InputTodo";
import { v4 as uuidv4} from "uuid";
import "./App.css" // Way to import App.css to TodoContainer.js

class TodoContainer extends React.Component {
    state = {
        todos: [
        //     Commented out is the info we worked with to set up the app functionality
        //   {
        //     id: uuidv4(),
        //     title: "Setup development environment",
        //     completed: true
        //   },
        //   {
        //     id: uuidv4(),
        //     title: "Develop website and add content",
        //     completed: false
        //   },
        //   {
        //     id: uuidv4(),
        //     title: "Deploy to live server",
        //     completed: false
        //   }
        ]
       };
    setUpdate = (updatedTitle, id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
            return todo
            })
        })
    }
    addTodoItem = (title) => {
        const newTodo ={
            id: uuidv4(),
            title: title,
            compeleted: false
        };
        //We are adding the new item to the current todos list which can be grabbed using the spread operator 
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }
    delTodo = id =>{
        this.setState({
            todos: [
                //Spread operator ... below allows us to grab the current todos item(s) at every point
                //Observation if ... is omitted, then everything is getting deleted
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        })
    }
    handleChange = id => {
        //I am guessing setState refers to updating state object
        this.setState(prevState => ({ //prevState is React snippet. Also instead of ( return {} can be used to enclose the function inside
            todos: prevState.todos.map(todo => {
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
          }))
    }
    componentDidMount() {
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if (loadedTodos) {
            this.setState({
                todos: loadedTodos
            })
        }
    }
    //This is the exqample of working with API CDNs
    // componentDidMount() { //componentDidMount method of lifecycle. It gets executed immediately after virtual DOM birth
    //     fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    //         .then(response => response.json())
    //         .then(data => this.setState({
    //             todos: data
    //         }));
    // }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.todos !== this.state.todos) {
            const temp = JSON.stringify(this.state.todos)
            localStorage.setItem("todos", temp)
        }
    }
    
    //render method has to go last, as if any change occurs, I will render it
    render() {
        return (
            // Instead of class attribute JSX uses className
            <div className="container"> 
                <div className="inner">
                    <Header />
                    <InputTodo addTodoItem={this.addTodoItem}/>
                    <TodoList setUpdate={this.setUpdate} delTodoProps={this.delTodo} handleChangeProps={this.handleChange} todos={this.state.todos} />
                </div>
            </div>
        )
    }
}
export default TodoContainer