import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <h1 className="display-4 py-4">{this.props.children}</h1>
        );
    }
}

export default Header;