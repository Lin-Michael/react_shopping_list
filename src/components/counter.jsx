import React, { Component } from "react";

class Counter extends Component {

  render() {
    return (
      <div className="list-item">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() =>this.props.onDelete(this.props.counter.id)}//the onClick handler cannot be a direct reference to a function. To solve this, recreate it as an arrow function
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    return this.props.counter.value === 0
      ? "badge badge-warning"
      : "badge badge-primary";
  }

  formatCount(){
      const {value} = this.props.counter; // gets this.props.counter.value and assigns it to a local value variable
      return value === 0 ? "Zero" : value;
  }
}

export default Counter;
