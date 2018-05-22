import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text
        };
    }

    render() {
        return (
            <h1 className="display-4 py-4">{this.state.text}</h1>
        );
    }
}

export default Header;