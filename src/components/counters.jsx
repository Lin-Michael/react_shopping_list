import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  render() {
      const {onAdd, counters, onDelete, onIncrement, onNameChange} = this.props;
    return (
      <div className="center-item">
        <button
        onClick={onAdd}
        className="btn btn-primary btn-sm m-2">Add Item</button>


        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onNameChange={onNameChange}
            counter={counter}
            //Instead of this, pass the entire counter as a props so 
            //that if the Counter objec changes in the future, it is also reflected in this parent
            //value={counter.value}
            //id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
