import React, {useState, useEffect} from "react";
import {RiDeleteBin6Line} from "react-icons/ri"
import styles from "../../classBased/components/TodoItem.module.css"; //Declare the import as an object styles. 
//Object can be named anything we want

// In order to add module styles write them as className as below:
const TodoItem = (props) => {
    const [editing, setEditing] = useState(false)
    const handleEditing = () => {
        setEditing(true)
    }
    const handelUpdateDone = (event) => {
        if (event.key === "Enter") {
            setEditing(false)
        }
    }
    
    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
        }
    const {completed, id, title} = props.todo // This is destructuring of the object
    //Note {} are a must and names have to match the properties of the object todo
    //This way we may sub the full path to this.props.todo property with only one of those variables
    let viewMode = {}
    let editMode = {}
    if (editing) {
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }
    useEffect(() => {
        return () => {
            console.log("cleaning up")
        }
    }, [])
    return (
        <li className={styles.item}>
            <div onDoubleClick={handleEditing} style={viewMode}>
                <input type="checkbox" className={styles.checkbox} checked=/*{props.todo.completed}*/{completed} 
                onChange={() => props.handleChangeProps(props.todo.id)}/>
                <button onClick={() => props.delTodoProps(/*props.todo.id*/id)}><RiDeleteBin6Line style={{ color: "red", fontSize: "16px" }}/></button>
                <span style={props.todo.completed ? completedStyle : null}>
                    {/* {props.todo.title} */title}
                </span>
            </div>
            <input type="text" className={styles.textInput} style={editMode} value={title}
            onChange = {e => {
                props.setUpdate(e.target.value, id)
            }}
            onKeyDown = {handelUpdateDone}/>
        </li>
    )
}
export default TodoItem