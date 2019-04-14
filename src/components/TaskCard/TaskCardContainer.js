import React from "react";
import TaskCard from "./TaskCard";
import Hover from "../Hover/Hover";

class TaskCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: this.props.task.id, status: this.props.task.status };
  }

  render() {
    return (
      <Hover
        render={hovering => (
          <TaskCard
            task={this.props.task}
            handleInput={this.onInputChange}
            handleSaveTask={this.saveTask}
            handleRemoveTask={this.removeTask}
            hovering={hovering}
            onDragStart={this.onDragStart}
          />
        )}
      />
    );
  }

  onDragStart = e => {
    e.dataTransfer.setData("taskId", this.props.task.id);
    console.log(this.props.task);
  };

  saveTask = () => {
    this.props.updateTask(this.state);
  };

  removeTask = id => {
    console.log("remove click", id);
    this.props.removeTask(id);
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
}

export default TaskCardContainer;
