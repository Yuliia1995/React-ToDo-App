import React from "react";
import TodoItem from "../../functionBased/components/TodoItem";

class TodoList extends React.Component {
    render(){
        return (
            <ul>
                {this.props.todos.map(todo =>(
                    <TodoItem key={todo.id} setUpdate = {this.props.setUpdate} delTodoProps={this.props.delTodoProps} handleChangeProps={this.props.handleChangeProps} todo={todo} />
                ))}
            </ul>)

    }
}
export default TodoList