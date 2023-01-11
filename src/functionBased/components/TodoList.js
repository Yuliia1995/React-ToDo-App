import React from "react";
import TodoItem from "./TodoItem";


const TodoList = (props) => {
        return (
            <ul>
                {props.todos.map(todo =>(
                    <TodoItem key={todo.id} setUpdate = {props.setUpdate} delTodoProps={props.delTodoProps} handleChangeProps={props.handleChangeProps} todo={todo} />
                ))}
            </ul>)
}
export default TodoList