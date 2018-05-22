import React, { Component } from 'react';
import Header from './Header.js';

class ViewTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    render() {
        return (
            <div>
                <Header text="View Todo" />
            </div>
        );
    }
}

export default ViewTodo;