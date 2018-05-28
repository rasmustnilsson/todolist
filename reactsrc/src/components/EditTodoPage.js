import React, { Component } from 'react';
import Header from './Header.js';

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
    }

    componentDidMount() {
        fetch("/gettodo/"+this.props.match.params.id)
            .then(res => res.json())
            .then((result) => {
                this.setState({ todo:result });
                document.getElementById('todoName').value = result.name;
                document.getElementById('todoPriority').value=result.priority;
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
                    <label htmlFor="priority">Priority</label>
                    <select className="form-control" id="todoPriority" name="priority">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
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