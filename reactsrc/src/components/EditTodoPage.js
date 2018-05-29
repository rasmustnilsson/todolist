import React, { Component } from 'react';
import Header from './Header.js';
import Radiobutton from './Radiobutton.js';

class Frontpage extends Component {

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
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const temp = this.state.todo;
        temp.priority = e.currentTarget.value;
        this.setState({todo: temp});
    }

    componentDidMount() {
        fetch("/gettodo/"+this.props.match.params.id)
            .then(res => res.json())
            .then((result) => {
                this.setState({ todo:result });
                document.getElementById('todoName').value = result.name;
                document.getElementsByName('priority').value=result.priority;
                document.getElementById('todoDescription').value=result.description;
                const d = new Date(result.dueDate);
                this.state.todo.dueDate = d.getFullYear()+'-' + ("0" + (d.getMonth()+1)).slice(-2) + '-'+d.getDate();
                document.getElementById('todoDueDate').value= this.state.todo.dueDate;

            })
    }

    render() {
        return(
            <div>
            <Header>Edit Todo</Header>
            <form action={"/edittodo/"+this.props.match.params.id} method="post">
                <div className="form-group">
                    <label htmlFor="name">Todo</label>
                    <input type="text" className="form-control" id='todoName' name="name" required/>
                    <small className="form-text text-muted">What's the activity?</small>
                </div>
                <div className="form-group">
                    <p className="mb-1">Priority</p>
                    <Radiobutton value="1" onChange={this.handleChange} colorClass="bg-success" prioritySelected={this.state.todo.priority} />
                    <Radiobutton value="2" onChange={this.handleChange} colorClass="bg-warning" prioritySelected={this.state.todo.priority} />
                    <Radiobutton value="3" onChange={this.handleChange} colorClass="bg-danger" prioritySelected={this.state.todo.priority} />
                    <small className="form-text text-muted">How important is it?</small>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="todoDescription" rows="3" name="description"></textarea>
                    <small className="form-text text-muted">What's it about?</small>
                </div>
                <div className="form-group">
                    <label htmlFor="dueDate">Due date</label>
                    <input type="date" name="dueDate" id="todoDueDate" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Edit</button>
            </form>
            </div>
        );
    }
}

export default Frontpage;