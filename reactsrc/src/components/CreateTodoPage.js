import React, { Component } from 'react';
import Header from './Header.js';
import TodoForm from './TodoForm.js';

class CreateTodoPage extends Component {

    render() {
        return(
            <div>
            <Header>Create Todo</Header>
            <TodoForm action="/createtodo" submitMessage="Create todo" />
            </div>
        );
    }
}

export default CreateTodoPage;