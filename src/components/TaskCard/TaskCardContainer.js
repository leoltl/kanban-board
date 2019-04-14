import React from "react";
import TaskCard from "./TaskCard";
import Hover from "../Hover/Hover";

class TaskCardContainer extends React.Component {
  componentDidMount() {
    this.setState({ task: this.props.task, edit: false });
  }
  // componentDidUpdate(prevProps) {
  //   if (prevProps !== this.props) {
  //     this.setState({
  //       task: this.props.task
  //     });
  //   }
  // }

  render() {
    if (this.state) {
      return (
        <Hover
          render={hovering => (
            <TaskCard
              task={this.state.task}
              handleInput={this.onInputChange}
              handleSaveTask={this.saveTask}
              handleRemoveTask={this.removeTask}
              hovering={hovering}
              onDragStart={this.onDragStart}
              edit={this.state.edit}
              editTask={this.editTask}
            />
          )}
        />
      );
    }
    return null;
  }

  onDragStart = e => {
    e.dataTransfer.setData("taskId", this.props.task.id);
  };

  editTask = () => {
    this.setState({ edit: true });
  };

  saveTask = () => {
    let savedTask = this.state.task;
    this.props.updateTask(savedTask);
    this.setState({ edit: false });
  };

  removeTask = id => {
    console.log("remove click", id);
  };

  onInputChange = e => {
    let prevTaskDetail = this.state.task;
    prevTaskDetail = { ...prevTaskDetail, [e.target.name]: e.target.value };
    this.setState({ task: prevTaskDetail });
  };
}

export default TaskCardContainer;
