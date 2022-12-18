import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.taskText,
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(evt) {
    this.props.toggleTask(this.props.id);
  }

  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateTask(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  handleChange(evt) {
    this.setState({ task: evt.target.value });
  }

  render() {
    if (this.state.isEditing) {
      return (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input
              type="text"
              // name="task"
              onChange={this.handleChange}
              value={this.state.task}
            ></input>
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="Todo">
          <li
            className={
              this.props.completed ? "Todo-task completed" : "Todo-task"
            }
            // className={this.props.completed && "completed"} This is the refactored version of above's className
            onClick={this.handleToggle}
          >
            {this.props.taskText}
          </li>
          <div className="Todo-buttons">
            <button onClick={this.toggleForm}>
              <i class="fas fa-pen" />
            </button>
            <button onClick={this.props.removeTask}>
            <i class="fas fa-trash" />
            </button>
          </div>
        </div>
      );
    }
  }
}

export default Todo;
