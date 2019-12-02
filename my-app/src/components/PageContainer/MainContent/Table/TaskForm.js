import React, { Component } from 'react';
import axios from 'axios';
class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
            status: false
        }
    }
    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState = {
            [name ] : value
        };
        console.log(this.state)
    }

    onHandleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    }

    componentDidMount = () => {
        axios.post(`http://172.20.10.2/api/users`)
            .then(res => {
                var user = JSON.stringify(res.data);
                console.log(user);
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        Them User
                        <span className="fa fa-time-circle text-right"></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form action="" method="POST" role="form">
                        <legend>Add User</legend>

                        <div className="form-group">
                            <label>Ten :</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                placeholder="Input field"
                                onChange={this.onHandleChange} />
                            <label>password :</label>
                            <input
                                type="password"
                                className="form-control"
                                name="username"
                                placeholder="Input field" />
                        </div>
                        <label>Trang thai :</label>
                        <select name="status" id="input" className="form-control" onChange={this.onHandleChange}>
                            <option value={true} selected={this.state.status === true}>Kich hoat</option>
                            <option value={false} selected={this.state.status === false}>An</option>
                        </select>
                        <div className="text-center mt-15">
                            <button type="submit" className="btn btn-warning">Luu
                                <span className="fa fa-plus mr-5"></span>
                            </button>&nbsp;
                            <button type="submit" className="btn btn-danger">Huy
                                <span className="fa fa-close mr-5"></span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default TaskForm;
