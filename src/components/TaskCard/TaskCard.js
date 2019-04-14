import React from "react";
import "./TaskCard.css";

const TaskCard_fun = props => {
  let { title, description, assignedTo, id } = props.task;
  let {
    hovering,
    onDragStart,
    handleRemoveTask,
    handleInput,
    handleSaveTask,
    editTask,
    edit
  } = props;

  const validTask = (
    <div
      className={hovering ? "card bg-light" : "card"}
      draggable
      onDragStart={e => onDragStart(e)}
      onClick={() => editTask()}
    >
      <div className="card-body">
        <button
          className="btn btn-danger btn-small"
          onClick={() => handleRemoveTask(id)}
        >
          &times;
        </button>
        <h5 className="card-title">Title: {title}</h5>
        <p className="card-text">Description: {description}</p>
        <p className="card-text">
          <small className="text-muted">Assigned To: {assignedTo}</small>
        </p>
      </div>
    </div>
  );

  const EditTask = (
    <div className="card">
      <div className="card-body">
        <h4>Create New Task</h4>
        <h5 className="card-title">
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={e => handleInput(e)}
            value={title}
          />
        </h5>
        <p className="card-text">
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={e => handleInput(e)}
            value={description}
          />
        </p>
        <p className="card-text">
          <small className="text-muted">
            <input
              type="text"
              name="assignedTo"
              placeholder="Assign To"
              onChange={e => handleInput(e)}
              value={assignedTo}
            />
          </small>
        </p>
        <input
          onClick={handleSaveTask}
          className="btn btn-primary"
          type="submit"
          value="Save"
        />
      </div>
    </div>
  );

  return <React.Fragment>{edit ? EditTask : validTask}</React.Fragment>;
};

export default TaskCard_fun;
