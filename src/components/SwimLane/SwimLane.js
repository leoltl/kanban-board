import React from "react";
import TaskCardContainer from "../TaskCard/TaskCardContainer";
import "./SwimLane.css";

class SwimLane extends React.Component {
  render() {
    return (
      <div
        className="SwimLane"
        key={this.props.swimlaneId}
        onDragOver={e => this.props.onDragOver(e)}
        onDrop={e => this.props.onDrop(e)}
      >
        <h3>
          {this.emptyTitle(this.props.title)}
          <button
            className="btn btn-danger btn-small"
            onClick={() =>
              this.props.handleDeleteSwimlane(this.props.swimlaneId)
            }
          >
            &times;
          </button>
        </h3>

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
          <div class="newLane">
            <input
              type="text"
              name="title"
              placeholder="Type Swimlane Name"
              onChange={e => this.props.handleInput(e)}
            />
            <button
              class="btn btn-success"
              type="submit"
              onClick={this.props.handleSubmit}
            >
              Confirm
            </button>
          </div>
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
