import React from "react";
import BoardView from "./BoardView";

class BoardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: null,
      swimlanes: [{ swimlaneId: 0, title: "" }]
    };
  }

  componentDidMount() {
    let todos = window.localStorage.getItem("todos");
    todos = JSON.parse(todos);
    let swimlanes = window.localStorage.getItem("swimlanes");
    swimlanes = JSON.parse(swimlanes);
    if (swimlanes === null) {
      this.updateLocalStorage([{ swimlaneId: 0, title: "" }], "swimlanes");
      this.setState({ swimlanes: [{ swimlaneId: 0, title: "" }] });
    } else {
      this.setState({ todos: todos, swimlanes: swimlanes });
    }
  }

  render() {
    return (
      <div className="d-flex mt-4 swimlanes">
        <BoardView
          swimlanes={this.state.swimlanes}
          todos={this.state.todos}
          createTask={this.createTask}
          createSwimlane={this.createSwimlane}
          updateTask={this.updateTask}
          removeTask={this.removeTask}
          updateSwimlane={this.updateSwimlane}
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
      this.updateLocalStorage(newTodos, "todos");
    }
  };

  removeTask = id => {
    if (this.state.todos) {
      let prevTodos = this.state.todos;
      let newTodos = prevTodos.filter(task => task.id !== id);
      this.setState({ todos: newTodos });
      this.updateLocalStorage(newTodos, "todos");
    }
  };

  createSwimlane = () => {
    if (this.state.swimlanes) {
      let statusMaxId = this.state.swimlanes
        .map(swimlane => swimlane.swimlaneId)
        .reduce((max, cur) => Math.max(max, cur));
      const newSwimlane = { swimlaneId: statusMaxId + 1, title: "" };
      const newSwimlanes = [...this.state.swimlanes, newSwimlane];
      this.setState({ swimlanes: newSwimlanes });
      this.updateLocalStorage(newSwimlanes, "swimlanes");
    }
  };

  updateSwimlane = newSwimlane => {
    console.log(newSwimlane);
    let prevSwimlanes = this.state.swimlanes;
    let newSwimlanes = prevSwimlanes.map(swimlane => {
      if (swimlane.swimlaneId === newSwimlane.swimlaneId) {
        return newSwimlane;
      }
      return swimlane;
    });
    this.setState({ swimlanes: newSwimlanes });
    this.updateLocalStorage(newSwimlanes, "swimlanes");
  };

  updateLocalStorage = (data, key) => {
    window.localStorage.setItem(key, JSON.stringify(data));
  };
}

export default BoardContainer;
