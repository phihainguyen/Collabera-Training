import React, { Component } from "react";
import TodoItems from './TodoItems/TodoItems'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
    this.state = {
      items: []
    };
  }

  addItem(e) {
    e.preventDefault();
    if (this.inputElement.current.value !== "") {
      var newItem = {
        text: this.inputElement.current.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this.inputElement.current.value = "";
    }
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div>

        <form onSubmit={this.addItem.bind(this)}>
          <input type="text" ref={this.inputElement} placeholder="enter task" />
          <button type="submit">Add</button>
        </form>


        <TodoItems entries={this.state.items}
          delete={this.deleteItem.bind(this)} />
      </div>
    );
  }

}

export default App;
