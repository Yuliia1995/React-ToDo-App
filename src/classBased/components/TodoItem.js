import React from "react";
import styles from "./TodoItem.module.css"; //Declare the import as an object styles. 
//Object can be named anything we want

// In order to add module styles write them as className as below:
class TodoItem extends React.Component {
    state = {
        editing: false,
    }
    handleEditing = () => {
        this.setState({
            editing: true,
        })
    }
    handelUpdateDone = (event) => {
        if (event.key === "Enter") {
            this.setState({editing: false})
        }
    }
    componentWillUnmount() {
        console.log("cleaning up...")
    }
    render() {
        //This variable goes into render method as it will be converted to a function.
        //In a function component like Header we declare it in the block of function Header
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
          }
        const {completed, id, title} = this.props.todo // This is destructuring of the object
        //Note {} are a must and names have to match the properties of the object todo
        //This way we may sub the full path to this.props.todo property with only one of those variables
        let viewMode = {}
        let editMode = {}
        if (this.state.editing) {
            viewMode.display = "none"
        } else {
            editMode.display = "none"
        }
        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
                    <input type="checkbox" className={styles.checkbox} checked=/*{this.props.todo.completed}*/{completed} 
                    onChange={() => this.props.handleChangeProps(this.props.todo.id)}/>
                    <button onClick={() => this.props.delTodoProps(/*this.props.todo.id*/id)}>Delete</button>
                    <span style={this.props.todo.completed ? completedStyle : null}>
                        {/* {this.props.todo.title} */title}
                    </span>
                </div>
                <input type="text" className={styles.textInput} style={editMode} value={title}
                onChange = {e => {
                    this.props.setUpdate(e.target.value, id)
                }}
                onKeyDown = {this.handelUpdateDone}/>
            </li>
        )
    }
}
export default TodoItem