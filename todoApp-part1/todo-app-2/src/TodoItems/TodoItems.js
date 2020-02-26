import React, { Component } from "react";

class TodoItems extends Component {

  createTasks(item) {
    return <li onClick={() => this.delete(item.key)} 
                key={item.key}>{item.text}</li>
  }

  delete(key) {
    this.props.delete(key);
  }
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks.bind(this));

    return (
      <ul>
        {listItems}
      </ul>
    );
  }
};

export default TodoItems;