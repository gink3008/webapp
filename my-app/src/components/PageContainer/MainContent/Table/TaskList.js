import React, { Component } from 'react';
import TaskItem from './TaskList/TaskItem';
import axios from 'axios';
class TaskList extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            boxuser : [],
        }
    }
    
    componentDidMount = () => 
    {
        axios.get(`http://172.20.10.2:8080/api/users`)
      .then(res => {
          
        const user = res.data;
        // this.setState {
        //     username : user.username,
        //     password : username.password,
        //     status : true
        // };
        this.onSetState(user);
        console.log(user)
      })
      .catch(error => console.log(error));
    }
    
    onSetState = (user) =>
    {
        this.setState ( {
            boxuser : user
        });
        console.log(this.state.boxuser);
    }

    render() {
        var tasks = this.state.boxuser;
        console.log(tasks)
        var element = tasks.map((task, index) => {
            return <TaskItem key={index} index = {index} task = {task}/>
        });
        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Username</th>
                        <th className="text-center">Password</th>
                        <th className="text-center">Trang Thai</th>
                        <th className="text-center">Hanh Dong</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input  
                                type="text"
                                className="form-control"
                                name="filtername"
                            />
                        </td>
                        <td></td>
                        <td>
                            <select
                                className="form-control"
                                name="filtername"
                            >
                                <option value={-1}>Tat ca</option>
                                <option value={0}>An</option>
                                <option value={1}>Kich Hoat</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    
                    {element}
                </tbody>
            </table>
        );
    }

}

export default TaskList;
