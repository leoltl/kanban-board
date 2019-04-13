import React from "react";
import TaskCardContainer from "../TaskCard/TaskCardContainer";
import "./SwimLane.css";

class SwimLane extends React.Component {
  render() {
    return (
      <div className="SwimLane" key={this.props.swimlaneId}>
        <h3>{this.emptyTitle(this.props.title)}</h3>
        <ul className="list-group-flush">
          {this.returnTasksli(this.props.todos)}
          {this.createTaskPrompt(this.props.swimlaneId)}
        </ul>
      </div>
    );
  }

  emptyTitle = title => {
    if (!title) {
      return (
        <React.Fragment>
          <input
            type="text"
            name="title"
            placeholder="Swimlane Name"
            onChange={e => this.props.handleInput(e)}
          />
          <button onClick={this.props.handleSubmit}>Confirm</button>
        </React.Fragment>
      );
    } else {
      return title;
    }
  };

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
