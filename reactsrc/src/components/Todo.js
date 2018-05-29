import React, { Component } from 'react';
import Moment from 'react-moment';

class Todo extends Component {

    getPriorityClass() {
        switch(this.props.priority) {
            case 1:
                return "bg-success"
            case 2:
                return "bg-warning"
            case 3:
                return "bg-danger"
        }
    }

    render() {
        return (
            <tr key={this.props.index}>
                <th scope="row">{this.props.index}</th>
                <td>{this.props.name}</td>
                <td>{this.props.description}</td>
                <td><div className={"circle " + this.getPriorityClass()}></div></td>
                <td><Moment format="YYYY/MM/DD">{this.props.dueDate}</Moment></td>
                <td><a className="btn btn-success mr-1" role="button" href={"/viewtodo/" + this.props.id}>View</a>
                <a className="btn btn-primary mr-1" role="button" href={"/edittodo/" + this.props.id }>Edit</a>
                <a className="btn btn-danger mr-1" role="button" href={"/deletetodo/" + this.props.id}>Delete</a></td>
            </tr>
        );
    }
}

export default Todo;