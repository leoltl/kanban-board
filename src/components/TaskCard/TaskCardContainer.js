import React from "react";
import TaskCard from "./TaskCard";

class TaskCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: this.props.task.id, status: this.props.task.status };
  }

  render() {
    return (
      <TaskCard
        task={this.props.task}
        handleInput={this.onInputChange}
        handleSaveTask={this.saveTask}
        handleRemoveTask={this.removeTask}
      />
    );
  }
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
