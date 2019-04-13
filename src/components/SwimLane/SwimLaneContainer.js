import React from "react";
import SwimLane from "./SwimLane";

class SwimLaneContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SwimLane
          id={this.props.id}
          title={this.props.title}
          todos={this.filterTasks(this.props.todos)}
          createTask={this.props.createTask}
          updateTask={this.props.updateTask}
          removeTask={this.props.removeTask}
          key={this.props.id}
        />
      </React.Fragment>
    );
  }

  filterTasks = tasks => {
    if (tasks) {
      return tasks.filter(task => {
        return task.status === this.props.id;
      });
    }
  };
}

export default SwimLaneContainer;
