import React from "react";
import TaskCardContainer from "../TaskCard/TaskCardContainer";
import SwimLaneTitle from "./SwimLaneTitle";
import Hover from "../Hover/Hover";
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
          <Hover
            render={hovering => (
              <SwimLaneTitle
                title={this.props.title}
                handleInput={this.props.handleInput}
                handleSubmit={this.props.handleSubmit}
                handleDeleteSwimlane={this.props.handleDeleteSwimlane}
                swimlaneId={this.props.swimlaneId}
                hovering={hovering}
              />
            )}
          />
        </h3>

        <ul className="list-group-flush">
          {this.returnTasksli(this.props.todos)}
          {this.createTaskPrompt(this.props.swimlaneId)}
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
