import React, {useState} from "react";
import {IoMdAdd} from "react-icons/io";

const InputTodo = (props) => {
    //console.log(useState("Hello")) //useState accepts one arg = initial state (but initial state does not have to be an object)
    //useState returns an array where [0] is the current state (can be anything) and [1] is a function for the update of the state
    const [title, setTitle] = useState("") //[0] - instead of this.state.title [1] - used to update the title
    const onChange = e => {
        setTitle(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (title.trim()) {
            props.addTodoItem(title)
            setTitle("")
        } else {
            alert("Please enter something")
        }
    }
    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input type="text" className="input-text" placeholder="Add todo..." value={title} name="title" onChange={onChange}/>
            <button className="input-submit"><IoMdAdd style={{color:"#336566fa"}}/></button>

        </form>

    )
}


// //======================================================
// //Below is the example of handling multiple input fields
// //====================================================== 
// const InputTodo = props => {
//     const [inputText, setInputText] = useState({
//       fName: "",
//       lastName: "",
//     })
  
//     const onChange = e => {
//       setInputText({
//         ...inputText, // corrects the state override (meaning that each new entry in a new input field will overwrite the value of the prev  ones)
//         [e.target.name]: e.target.value, //name has to be appended to the input fields
//       })
//       /*Alternatively, use:
//       setInputText(prevState => {
//         ...prevState,
//         [e.target.name]: e.target.value.
//       })*/
//     }
  
//     const handleSubmit = e => {
//       e.preventDefault()
//       console.log("submitted")
//     }
  
//     return (
//       <>
//         <form onSubmit={handleSubmit} className="form-container">
//           <input
//             type="text"
//             className="input-text"
//             placeholder="Add first name"
//             value={inputText.fName}
//             name="fName"
//             onChange={onChange}
//           />
//           <input
//             type="text"
//             className="input-text"
//             placeholder="Add last name"
//             value={inputText.lastName}
//             name="lastName"
//             onChange={onChange}
//           />
  
//           <button className="input-submit">Submit</button>
//         </form>
//         <h2>{inputText.fName}</h2>
//         <h2>{inputText.lastName}</h2>
//       </>
//     )
//   }

export default InputTodo