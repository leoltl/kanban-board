import React from "react";
import BoardView from "./BoardView";

class BoardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: null, swimlanes: null };
  }

  componentDidMount() {
    let todos = window.localStorage.getItem("todos");
    todos = JSON.parse(todos);
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div className="d-flex mt-4 swimlanes">
        <BoardView
          todos={this.state.todos}
          createTask={this.createTask}
          updateTask={this.updateTask}
          removeTask={this.removeTask}
        />
      </div>
    );
  }

  createTask = () => {
    let newTask = {
      id: Math.floor(Math.random() * 1000 + 1),
      title: "",
      description: "",
      assignedTo: "",
      status: 0
    };
    if (this.state.todos) {
      this.setState({ todos: [...this.state.todos, newTask] });
    } else {
      this.setState({ todos: [newTask] });
    }
  };

  updateTask = newTask => {
    if (this.state.todos) {
      let prevTodos = this.state.todos;
      let newTodos = prevTodos.map(task => {
        if (task.id === newTask.id) {
          return newTask;
        }
        return task;
      });
      this.setState({ todos: newTodos });
      this.updateLocalStorage(newTodos);
    }
  };

  removeTask = id => {
    if (this.state.todos) {
      let prevTodos = this.state.todos;
      let newTodos = prevTodos.filter(task => task.id !== id);
      this.setState({ todos: newTodos });
      this.updateLocalStorage(newTodos);
    }
  };

  updateLocalStorage = todos => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  };
}

export default BoardContainer;
