import React from "react";

class Todo extends React.Component {

    handleClick = () => {
        this.props.handleToggleTask(this.props.item);
    }

    render(){
        return(
            <div onClick={this.handleClick} className={`${this.props.item.completed ? 'completed' : ''}`}>
                <p>{this.props.item.task}</p>
            </div>
        )
    }
}

export default Todo;