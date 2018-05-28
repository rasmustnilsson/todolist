import React, { Component } from 'react';
import Todo from './Todo.js';
import TodoBody from './TodoBody.js';
import Header from './Header.js';

class Frontpage extends Component {
    render() {
        return(
            <div>
                <Header>Latest Todos</Header>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Todo</th>
                            <th scope="col">Description</th>
                            <th scope="col">Priority</th>
                            <th scope="col">Due Date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <TodoBody/>
                </table>
            </div>
        );
    }
}

export default Frontpage;