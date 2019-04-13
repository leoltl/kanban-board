import React from "react";
import "./TaskCard.css";

class TaskCard extends React.Component {
  render() {
    return this.renderTaskHelper(this.props.task);
  }

  renderTaskHelper = task => {
    if (task.title || task.description || task.assignedTo) {
      return this.validTask(task);
    } else {
      return this.emptyTask();
    }
  };

  validTask = task => (
    <div className="card">
      <div className="card-body">
        <button
          className="btn btn-danger btn-small"
          onClick={() => this.props.handleRemoveTask(this.props.task.id)}
        >
          &times;
        </button>
        <h5 className="card-title">Title: {task.title}</h5>
        <p className="card-text">Description: {task.description}</p>
        <p className="card-text">
          <small className="text-muted">Assigned To: {task.assignedTo}</small>
        </p>
      </div>
    </div>
  );

  emptyTask = () => (
    <div className="card">
      <div className="card-body">
        <h4>Create New Task</h4>
        <h5 className="card-title">
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={e => this.props.handleInput(e)}
          />
        </h5>
        <p className="card-text">
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={e => this.props.handleInput(e)}
          />
        </p>
        <p className="card-text">
          <small className="text-muted">
            <input
              type="text"
              name="assignedTo"
              placeholder="Assign To"
              onChange={e => this.props.handleInput(e)}
            />
          </small>
        </p>
        <input
          onClick={this.props.handleSaveTask}
          className="btn btn-primary"
          type="submit"
          value="Save"
        />
        <button
          className="btn btn-light"
          onClick={() => this.props.handleRemoveTask(this.props.task.id)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
