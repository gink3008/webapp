import React, { Component } from 'react';

class TaskItem extends Component {
    constructor(props) {
        super(props) // eslint-disable-next-line
        this.state = {
            
        }
    }
    render() {
        return (
            <tr>
                <td>{this.props.index}</td>
                <td className="text-center">{this.props.task.username}</td>
                <td className="text-center">{this.props.task.password}</td>
                <td></td>
                {/* <td className="text-center"><span className={this.props.task.status === true ? 'label label-success' : 'label label-danger'}>{this.props.task.status === true ? 'kich hoat' : 'an'}</span></td> */}
                <td>
                    <button type="submit" className="btn btn-warning">
                        <span className="fa fa-plus mr-5"></span>Sua
                    </button>&nbsp;
                    <button type="submit" className="btn btn-danger">
                        <span className="fa fa-plus mr-5"></span>Xoa
                    </button>&nbsp;
                </td>
            </tr>

        );
    }

}

export default TaskItem;
