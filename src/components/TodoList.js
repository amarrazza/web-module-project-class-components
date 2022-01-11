import React from "react";
import Todo from "./Todo";
class TodoList extends React.Component {

    render(){
        // const { todos } = this.props;
        console.log(this.props.todos)
        return (
            <div>
                {this.props.todos.map(item => {
                    console.log(item)
                    return(
                        <Todo handleToggleTask={this.props.handleToggleTask} key={item.id} item={item} />
                    )
                })}
            </div>
            
            
        )
    }
}
export default TodoList;