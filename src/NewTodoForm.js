import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./NewTodoForm.css"

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ task: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const newTask = { ...this.state, id: uuidv4(), completed: false };
    this.props.addTask(newTask);
    this.setState({ task: "" });
  }
  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="todo">New Todo</label>
        <input
          type="text"
          id="todo"
          name="todo"
          placeholder="  New Todo"
          value={this.state.task}
          onChange={this.handleChange}
        ></input>
        <button>Add Todo</button>
      </form>
    );
  }
}

export default Todo;
