import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  render() {
    return (
      <div>
          <button
           onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2">Reset</button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
            //Instead of this, pass the entire counter as a props so that if the Counter objec changes in the future, it is also reflected in this parent
            //value={counter.value}
            //id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
