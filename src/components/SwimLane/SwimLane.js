import React from "react";
import TaskCardContainer from "../TaskCard/TaskCardContainer";
import "./SwimLane.css";

class SwimLane extends React.Component {
  render() {
    return (
      <div className="SwimLane" key={this.props.id}>
        <h3>{this.props.title}</h3>
        <ul className="list-group-flush">
          {this.returnTasksli(this.props.todos)}
          {this.createTaskPrompt(this.props.id)}
        </ul>
      </div>
    );
  }

  createTaskPrompt = statusId => {
    if (!statusId) {
      return (
        <li className="list-group-item">
          <div className="add-card" onClick={this.props.createTask}>
            + Add a task
          </div>
        </li>
      );
    }
  };

  returnTasksli(tasks) {
    if (tasks) {
      return tasks.map(task => {
        return (
          <li className="list-group-item" key={task.id}>
            <TaskCardContainer
              task={task}
              updateTask={this.props.updateTask}
              removeTask={this.props.removeTask}
            />
          </li>
        );
      });
    }
  }
}

export default SwimLane;
