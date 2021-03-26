import React from 'react';
import './App.css';
import TaskForm from './Components/TaskForm';
import Control from './Components/Control';
import TaskList from './Components/TaskList';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      task: [],
      isDisplayForm : false
    }
  }

  componentWillMount() {
    if(localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));

      this.setState({
        task: tasks
      })
    }
  }

  

  s4() {
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
  }

generateID() {
  return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
}

onTOggleForm = () => {
  this.setState({
    isDisplayForm: !this.state.isDisplayForm
  });
}

onCloseForm = () => {
  this.setState({
    isDisplayForm: false
  });
}

onSubmit = (data) => {
  var { task } = this.state;
 data.id = this.generateID();
 task.push(data);
 this.setState({
   task: task
 });
 localStorage.setItem('tasks', JSON.stringify(task))

this.setState({
    isDisplayForm: false
  });


}


onUpdateStatus = (id) => {
  var { task } = this.state;
  var index = this.findIndex(id);
  if(index !==1) {
    task[index].status = !task[index].status;
    this.setState({
      task:task
    });
    localStorage.setItem('tasks', JSON.stringify(task));
  }

}

DeleteItem = (id) => {
  var { task } = this.state;
  var index = this.findIndex(id);
  if(index !==1) {
    task.splice(index, 1)
    this.setState({
      task:task,
      isDisplayForm: false
    });
    localStorage.setItem('tasks', JSON.stringify(task));
  }

}

findIndex = (id) => {
  var { task } = this.state;
   var result = -1;
  task.forEach((task, index) => {
    if(task.id === id) {
      result = index;
    }
   
  }) 
  return result; 
  
}


  render() {
    var { task, isDisplayForm } = this.state;
    var elmTaskForm = isDisplayForm
    ? 
    <TaskForm 
    onCloseForm={this.onCloseForm}
    onSubmit={this.onSubmit}
    /> 
    : '';
    return (
      <>
        <div className="container">
        <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr/>
        </div>
        <div className="row">
            <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
              { elmTaskForm }
          </div>
            <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                <button 
                type="button" 
                className="btn btn-primary"
                onClick={this.onTOggleForm}
                >
                    <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                </button>

                
                {/* search - sort */}
                <Control/>
                {/* list */}
                <div className="row mt-15">
                    <div className="col-xs-6 col-sm-9 col-md-12 col-lg-12">
                       <TaskList tasks = { task } onUpdateStatus={this.onUpdateStatus} DeleteItem={this.DeleteItem}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </>
    )
  }
}



export default App;
