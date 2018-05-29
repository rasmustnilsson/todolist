import React, { Component } from 'react';
import Header from './Header.js';
import TodoForm from './TodoForm.js';

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

    componentWillMount() {
        fetch("/gettodo/"+this.props.match.params.id)
            .then(res => res.json())
            .then((result) => {
                this.setState({ todo:result });
            })
    }

    render() {
        return(
            <div>
            <Header>Edit Todo</Header>
            <TodoForm action={"/edittodo/"+this.props.match.params.id} submitMessage="Edit todo" todo={this.state.todo} />
            </div>
        );
    }
}

export default Frontpage;