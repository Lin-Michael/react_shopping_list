import React, { Component } from "react";
import "../style/style.css";
class Counter extends Component {
  render() {
    const isNameEmpty = (this.props.counter.name ==="");
    return (
      <div className="counter-width">
        <input
          type="text"
          className="form-control text-box d-inline m-2"
          value={this.props.counter.name}
          onChange={(e) => this.props.onNameChange(this.props.counter,e)}
        ></input>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)} //the onClick handler cannot be a direct reference to a function. To solve this, recreate it as an arrow function
          className="btn btn-danger btn-sm m-2 d-inline"
        >
         X
        </button>
        {isNameEmpty && <p className="text-danger error-msg d-inline m-2">Please enter an item name.</p>}
          
        
      </div>
    );
  }
  getBadgeClasses() {
    return this.props.counter.value === 0
      ? "badge m-2 num-items badge-warning"
      : "badge m-2 num-items badge-primary";
  }

  formatCount() {
    const { value } = this.props.counter; // gets this.props.counter.value and assigns it to a local value variable
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
