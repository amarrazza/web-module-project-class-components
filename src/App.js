import React from 'react';
import './style.css'

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const initialToDos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: initialToDos
    };
  }

  handleClearCompleted = () => {

    this.setState({
      ...this.state,
      todos: this.state.todos.filter(item => {
        return !item.completed;
      })
    })
  }

  handleAddTask = (taskName) => {

    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTask]
    });
  }

  handleToggleTask = (selectedTask) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(taskMap => {
        if(taskMap.id === selectedTask.id){
          return({
            ...taskMap,
            completed: !taskMap.completed
          })
        } else {
          return taskMap;
        }
      })
    });
  }
 
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} handleToggleTask={this.handleToggleTask} />
        <TodoForm handleAddTask={this.handleAddTask}/>
        <button onClick={this.handleClearCompleted}>Clear completed</button>
      </div>
    );
  }
}

export default App;
