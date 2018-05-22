import React, { Component } from 'react';
import Moment from 'react-moment';

class Todo extends Component {
    render() {
        return (
            <tr key={this.props.index}>
                <th scope="row">{this.props.index}</th>
                <td>{this.props.name}</td>
                <td>{this.props.description}</td>
                <td>{this.props.priority}</td>
                <td><Moment format="YYYY/MM/DD">{this.props.dueDate}</Moment></td>
                <td><a className="btn btn-success mr-1" role="button" href="/viewtodo">View  </a>
                <a className="btn btn-primary mr-1" role="button" href="/edittodo">Edit</a>
                <a className="btn btn-danger mr-1" role="button" href="/deletetodo">Delete</a></td>
            </tr>
        );
    }
}

export default Todo;