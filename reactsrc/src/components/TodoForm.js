import React, { Component } from 'react';
import Radiobutton from './Radiobutton.js';


class TodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            prioritySelected: 1,
        }
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        this.setState({prioritySelected: e.currentTarget.value});
    }

    componentWillReceiveProps(nextProps) {
        document.getElementsByName('name')[0].value = nextProps.todo.name;
        document.getElementsByName('description')[0].value = nextProps.todo.description;
        const d = new Date(nextProps.todo.dueDate);
        document.getElementsByName('dueDate')[0].value= d.getFullYear()+'-' + ("0" + (d.getMonth()+1)).slice(-2) + '-'+d.getDate();
        this.setState({prioritySelected: nextProps.todo.priority});
    } 

    render() {
        return (
        <form action={this.props.action} method="post">
            <div className="form-group">
                <label htmlFor="name">Todo</label>
                <input type="text" className="form-control" name="name" required placeholder="Todo..."/>
                <small className="form-text text-muted">What's the activity?</small>
            </div>
            <div className="form-group">
                <p className="mb-1">Priority</p>
                <Radiobutton value="1" onChange={this.handleChange} colorClass="bg-success" prioritySelected={this.state.prioritySelected}/>
                <Radiobutton value="2" onChange={this.handleChange} colorClass="bg-warning" prioritySelected={this.state.prioritySelected} />
                <Radiobutton value="3" onChange={this.handleChange} colorClass="bg-danger" prioritySelected={this.state.prioritySelected} />
                <small className="form-text text-muted">How important is it?</small>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" rows="3" name="description"></textarea>
                <small className="form-text text-muted">What's it about?</small>
            </div>
            <div className="form-group">
                <label htmlFor="dueDate">Due date</label>
                <input type="date" name="dueDate" className="form-control" defaultValue={new Date().toISOString().substr(0, 10)}/>
                <small className="form-text text-muted">When is it due?</small>

            </div>
            <button type="submit" className="btn btn-primary">{this.props.submitMessage}</button>
        </form>
        );
    }
}

export default TodoForm;