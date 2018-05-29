import React, { Component } from 'react';
import Todo from './Todo.js';

class TodoBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    componentWillMount() {
        fetch("/gettodos")
            .then(res => res.json())
            .then((result) => {
                this.setState({ todos:result.todos });
            })
    }

    render() {
        return (
            <tbody>
            {this.state.todos.map(function(todo, i){
                i = i + 1;
                return <Todo index={i} key={i}
                    name={todo.name}
                    priority={todo.priority}
                    description={todo.description}
                    dueDate={todo.dueDate.date}
                    id={todo.id}
                />;
            })}
            </tbody>
        );
    }
}

export default TodoBody;