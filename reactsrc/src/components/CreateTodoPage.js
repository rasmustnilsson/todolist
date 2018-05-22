import React, { Component } from 'react';
import Header from './Header.js';

class Frontpage extends Component {
    render() {
        return(
            <div>
            <Header text="Create Todo" />
            <form action="/createtodo" method="post">
                <div className="form-group">
                    <label htmlFor="name">Todo</label>
                    <input type="text" className="form-control" name="name" required placeholder="Todo..." />
                    <small className="form-text text-muted">What's the activity?</small>
                </div>
                <div className="form-group">
                    <label htmlFor="priority">Priority</label>
                    <select className="form-control" name="priority">
                        <option defaultValue>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <small className="form-text text-muted">How important is it?</small>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" rows="3" name="description"></textarea>
                    <small className="form-text text-muted">What's it about?</small>
                </div>
                <div className="form-group">
                    <label htmlFor="dueDate">Example textarea</label>
                    <input type="date" name="dueDate" className="form-control" defaultValue="2011-09-29"/>
                </div>
                <button type="submit" className="btn btn-primary">Create todo</button>
            </form>
            </div>
        );
    }
}

export default Frontpage;