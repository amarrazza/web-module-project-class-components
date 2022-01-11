import React from "react";

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            input: ""
        }
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            input: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddTask(this.state.input)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='task' onChange={this.handleChanges} />
                    <button>Add task</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;