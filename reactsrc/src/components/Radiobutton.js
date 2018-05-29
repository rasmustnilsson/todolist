import React, { Component } from 'react';

class Radiobutton extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    isSelected() {
        if(this.props.prioritySelected == this.props.value)
            return " active";
        return "";
    }

    handleChange(e) {
        this.props.onChange(e);
    }

    render() {
        return (
            <div className="form-check form-check-inline">
                <input className="form-check-input d-none" type="radio" onChange={this.handleChange} name="priority" id={"priority"+this.props.value} value={this.props.value} defaultChecked={this.props.value == 1}/>
                <label className={this.props.colorClass + " form-check-label priority_box" + this.isSelected()} htmlFor={"priority"+this.props.value}>{this.props.text}</label>
            </div>
        );
    }
}

export default Radiobutton;