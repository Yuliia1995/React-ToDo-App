import React, {Component} from "react";

class InputTodo extends Component {
    state = {
        title: ""
    };
    onChange = (e) => {
        this.setState({
            title: e.target.value
            //If form includes different form fields, set:
            //[e.target.name]: e.target.value  //instead of the above.
            //Also the name attribute has to be added to the input field
            //Since there is only one input field in InputTodo class, I am using simple static property name in state object.
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // This adds validation to the input field. As when after trim there is an empty string, the conditional statement fails and throws an alert
        if (this.state.title.trim()) {
            this.props.addTodoItem(this.state.title);
            //clears the input field after each submit
            this.setState({
                title: ""
            })
        }
        else {
            alert("Please write something")
        }
        //console.log(this.state.title)
    }
    render() { // converts it into a function
        return(
            <form onSubmit={this.handleSubmit} className="form-container">
                <input type="text" className="input-text" placeholder="Add Todo..." value={this.state.title} onChange={this.onChange}/>
                <button type="submit" className="input-submit">Submit</button>
            </form>

        )
    }
}
export default InputTodo