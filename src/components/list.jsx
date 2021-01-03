import React, { Component } from "react";

class ListFromArray extends Component {
  state = {
    tags: ["tag1", "tag2", "tag3"], //rendering lists
  };

  //renders a list from an array
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()}
      </div>
    );
  }
}

export default ListFromArray;
