import React from "react";

const SwimLaneTitle = props => {
  const title = props.title;
  const hovering = props.hovering;

  if (!title) {
    return (
      <React.Fragment>
        <div className="newLane">
          <input
            type="text"
            name="title"
            placeholder="Enter Name"
            onChange={e => props.handleInput(e)}
          />
          <button
            className="btn btn-success"
            type="submit"
            onClick={props.handleSubmit}
          >
            Confirm
          </button>
        </div>
      </React.Fragment>
    );
  } else if (hovering) {
    return (
      <React.Fragment>
        {title}
        <button
          className="btn btn-danger btn-small btn-title"
          onClick={() => props.handleDeleteSwimlane(props.swimlaneId)}
        >
          &times;
        </button>
      </React.Fragment>
    );
  } else {
    return <div>{title}</div>;
  }
};

export default SwimLaneTitle;
