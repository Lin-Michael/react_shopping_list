import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, name: "", value: 0 },
      { id: 2, name: "", value: 0 },
      { id: 3, name: "", value: 0 },
    ],
  };

  handleNameChange = (counter, e) =>{
    const name = e.target.value;
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].name = name;
    this.setState({ counters });
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if(counter.name===""){
      counters[index].value =0;//Empty name means a count of 0
    }
    else{
      counters[index].value++;
    }
    
    this.setState({ counters });
  };

  handleAdd = () =>{
    const counters = this.state.counters;
    const maxId = Math.max.apply(Math, counters.map(x => x.id));
    counters.push({id: (maxId+1), name:"", value: 0});

    this.setState({counters});
  }

  // handleReset = () => {
  //   const counters = this.state.counters.map((c) => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ counters });
  // };

  handleDelete = (counterId) => {
    console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value >0).length} />
        <main className="container">
          <div className="row">
            <div className="col justify-content-center">
            <Counters
            counters={this.state.counters}
            onAdd = {this.handleAdd}
            // onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onNameChange={this.handleNameChange}
          />
            </div>
          </div>

        </main>
      </React.Fragment>
    );
  }
}

export default App;
