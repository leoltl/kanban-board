import React from "react";
import SwimLane from "./SwimLane";

class SwimLaneContainer extends React.Component {
  componentDidMount() {
    this.setState({ swimlaneId: this.props.swimlaneId });
  }

  render() {
    return (
      <React.Fragment>
        <SwimLane
          swimlaneId={this.props.swimlaneId}
          title={this.props.title}
          todos={this.filterTasks(this.props.todos)}
          createTask={this.props.createTask}
          updateTask={this.props.updateTask}
          removeTask={this.props.removeTask}
          key={this.props.swimlaneId}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          handleDeleteSwimlane={this.handleDeleteSwimlane}
          onDragOver={this.onDragOver}
          onDrop={this.onDrop}
        />
      </React.Fragment>
    );
  }

  onDrop = e => {
    let id = e.dataTransfer.getData("taskId");
    let taskToUpdate = this.props.todos.find(task => task.id === parseInt(id));
    taskToUpdate.status = this.props.swimlaneId;
    this.props.updateTask(taskToUpdate);
  };

  onDragOver = e => {
    e.preventDefault();
    console.log("dragged Over");
  };

  filterTasks = tasks => {
    if (tasks) {
      return tasks.filter(task => {
        return task.status === this.props.swimlaneId;
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateSwimlane(this.state);
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDeleteSwimlane = id => {
    this.props.removeSwimlane(id);
  };
}

export default SwimLaneContainer;
