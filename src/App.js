import React from 'react';
import './App.css';
import ListItems from './ListI';

class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state={
      tasks:[],
      currentTask:{
        item:"",
        key:""
      }
    }
    this.handleChange=this.handleChange.bind(this)
    this.submitTask=this.submitTask.bind(this)
    this.deleteTask=this.deleteTask.bind(this)
    this.updateTask=this.updateTask.bind(this)
  }

  handleChange(e){
    this.setState({
      currentTask:{
        item:e.target.value,
        key:Date.now()
      }
    })
  }

  submitTask(e){
    e.preventDefault();
    const newTask=this.state.currentTask;
    if(newTask.item)
      {
        const tasks=[...this.state.tasks,newTask]
        this.setState({
          tasks:tasks,
          currentTask:{
            item:'',
            key:''
          }
      })
    } 
    console.log(newTask)
  }

  deleteTask(key){
    const filteredTask=this.state.tasks.filter(item => item.key!==key)
    this.setState({
      tasks:filteredTask
    })
  }

  updateTask(text,key){
    console.log("items:"+this.state.tasks)
    const tasks=this.state.tasks

    tasks.map(item=>{
      if(text!==""){
      if(item.key===key)
      {
        console.log(item.key+ " "+ key)
        item.item=text
      }
    }
    })
    this.setState({
      tasks:tasks
    })
    }
  render(){
    return ( 
      <div className = "App" >
        <header>To-do <b>React</b> app</header>
        <form className="form">
          <input type="text" placeholder="Enter the task" id="task" value={this.state.currentTask.item} onChange={this.handleChange}></input>
          <input type="submit" onClick={this.submitTask} id="button" value="Add"></input>
        </form>
        <ListItems items={this.state.tasks} Ditems={this.deleteTask} Uitems={this.updateTask}></ListItems>
      </div>
    );
  }
}

export default App;