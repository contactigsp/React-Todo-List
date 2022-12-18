import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  updateTask(id, updatedTask) {
    const updatedTodo = this.state.tasks.map((el) => {
      if (el.id === id) {
        return { ...el, task: updatedTask }; //The ...el is a way to not loose the ID. and 'task: updatedTask' is to overwrite only 'task' from the 'Todo,js'
      } else {
        return el; // Unchanged
      }
    });
    return this.setState({
      tasks: updatedTodo,
    });
  }

  toggleCompletion(id) {
    const updatedTodo = this.state.tasks.map((el) => {
      if (el.id === id) {
        return { ...el, completed: !el.completed }; //The ...el is a way to not loose the ID. and 'task: updatedTask' is to overwrite only 'task' from the 'Todo,js'
      } else {
        return el; // Unchanged
      }
    });
    return this.setState({
      tasks: updatedTodo,
    });
  }

  removeTask(id) {
    this.setState({
      tasks: this.state.tasks.filter((el) => el.id !== id),
    });
  }

  addTask(newTask) {
    // console.log("new task added!", newTask);
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
    // setTimeout(() => console.log(this.state));
  }

  render() {
    const tasks = this.state.tasks.map((el) => (
      <Todo
        taskText={el.task}
        key={el.id}
        id={el.id}
        removeTask={() => this.removeTask(el.id)}
        updateTask={this.updateTask}
        completed={el.completed}
        toggleTask={this.toggleCompletion}
      />
    ));

    return (
      <div className="TodoList">
        <h1>
          Todo List !<span>A Simple React Todo List App.</span>
        </h1>
        <ul className="todo-list">{tasks}</ul>
        <NewTodoForm addTask={this.addTask} />
      </div>
    );
  }
}

export default TodoList;
