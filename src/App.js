import React from 'react';
import './App.css';
import Task from './components/Task'
import TaskInput from './components/TaskInput';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      tasks: [
        {id: 0, title: 'Create todo-react app', done: false},
        {id: 1, title: 'Create todo-react app', done: true},
        {id: 2, title: 'Create todo-react app', done: false}
      ]
    }
  }

  addTask =(task) =>{
    this.setState(state => {
      let {tasks} = state;
      tasks.push({
        id: tasks.length !== 0 ? task.length: 0,
        title: task,
        done: false
      })
      return tasks;
    })
  }

  doneTask = (id) => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let {tasks} = state;
      tasks[index].done = true;
      return tasks;
    })
  }

  deleteTask = (id) => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let {tasks} = state;
      delete tasks[index];
      return tasks;
    })
  }

  render(){

    const {tasks} = this.state;
    const activeTask = tasks.filter(task => !task.done);
    const doneTask = tasks.filter(task => task.done);

    return(
      <div className="App">
        <h1 className="top">Active tasks: {activeTask.length}</h1>
        {[...activeTask, ...doneTask].map(task => (
          <Task doneTask={() => this.doneTask(task.id)} deleteTask={() => this.deleteTask(task.id)} task={task} key={task.id}/>
        ))}
        <TaskInput addTask={this.addTask} />
      </div>
    )
  }
}

export default App;
