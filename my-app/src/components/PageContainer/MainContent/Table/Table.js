import React,{Component} from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

class System extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm : false
    }
  }

  onGenerateID= () => {
    var tasks = [
      {
        id : this.genID(),
        username :'le hoang',
        password: "123456",
        status : false
      },{
        id : this.genID(),
        username :'le hoang linh',
        password: "123456",
        status : true
      },{
        id : this.genID(),
        username :'le hoang hiep',
        password: "123456",
        status : true
      }

      
    ];
    this.setState= {
      tasks : tasks
    };
    console.log(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  componentWillMount() {
    if(localStorage &&  localStorage.getItem('tasks'))
    {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks : tasks
      });
    }
  }

  randomId(){
    return Math.floor((1 + Math.random()) * 0x010000).toString(16).substring(1);
  }
  
  genID(){
    return this.randomId() + this.randomId() + '-' + this.randomId() + this.randomId() + this.randomId() + '-' + this.randomId() + this.randomId() + '-' + this.randomId() + this.randomId() + this.randomId() + this.randomId() ; 
  }
  onAddUser = () => {
    this.setState({
      isDisplayForm : !this.state.isDisplayForm
    });
    console.log(this.state.isDisplayForm);
  }
  render(){
    var {tasks, isDisplayForm} = this.state;
    var elmTaskForm = isDisplayForm ? <TaskForm /> : '';
    return (
      <div className="container">
                <div className="text-center">
                    Quan ly User
                </div>
                <div className="row">
                    <div className={this.state.isDisplayForm === true ?"col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
                        {/* {form} */}
                        {elmTaskForm}
                    </div>
                    <div className={this.state.isDisplayForm === true ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button 
                          type="button" 
                          className="btn btn-primary"
                          onClick={this.onAddUser}
                          >
                            <span className="fa fa-plus mr-5"></span>
                            Them User
                        </button>
                        <button 
                        type="button" 
                        className="btn btn-danger ml-5"
                        onClick={ this.onGenerateID}
                        >
                            Generate data
                        </button>
                        {/* {Search - sort} */}
                        <Control/>
                       
                        {/* {List} */}
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList tasks = {tasks}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
  }
  
}

export default System;
