import React, { Component } from 'react';
import Header from './Header.js';
import Moment from 'react-moment';


class ViewTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
           todo: {
               name: null,
               description: null,
               dueDate: null,
               priority: null,
               reg_date: null,
           }
        };
    }
    componentDidMount() {
        fetch("/gettodo/"+this.props.match.params.id)
            .then(res => res.json())
            .then((result) => {
                this.setState({ todo:result });
            })
    }

    render() {
        return (
            <div>
                <Header>{this.state.todo.name}</Header>
                <h4>Description</h4>
                <p>{this.state.todo.description}</p>
                <h4>Priority</h4>
                <p>{this.state.todo.priority}</p>
                <h4>Due Date</h4>
                <p><Moment format="YYYY/MM/DD">{this.state.todo.dueDate}</Moment></p>
                <h4>Created</h4>
                <p><Moment format="YYYY/MM/DD">{this.state.todo.reg_date}</Moment></p>
                <a class="btn btn-primary" href={"/edittodo/"+this.props.match.params.id} role="button">Edit</a>
            </div>
        );
    }
}

export default ViewTodo;