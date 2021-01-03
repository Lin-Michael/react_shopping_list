import React, { Component } from "react";

class Counter extends Component {
    state = {
        value: this.props.value,
        
    };
    //increments the state
    handleIncrement = () =>{
        console.log("Increment Clicked", this);
        this.setState({ value: this.state.value + 1});//setState is a React function
    }
  render() {
    return (
      <div className="list-item">
        <span className={this.getBadgeClasses()}>{this.state.value}</span>
        <button onClick={this.handleIncrement}
        className = "btn btn-secondary btn-sm">
            Increment
        </button>
        <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }
  getBadgeClasses(){
      return (this.state.count === 0) ? "badge badge-warning": "badge badge-primary";
  }

}

export default Counter;
