import React, { Component } from "react";
import "../style/style.css";
class Counter extends Component {
  render() {
    return (
      <div className="list-item">

        <input type="text" className="form-control text-box d-inline m-2"></input>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)} //the onClick handler cannot be a direct reference to a function. To solve this, recreate it as an arrow function
          className="btn btn-danger btn-sm m-2"
        >
            
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash "
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </button>
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
