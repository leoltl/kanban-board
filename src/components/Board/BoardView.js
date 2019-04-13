import React from "react";
import SwimLaneContainer from "../SwimLane/SwimLaneContainer";
import "./Board.css";

class BoardView extends React.Component {
  render() {
    const { swimlanes } = this.props;
    if (swimlanes) {
      return this.renderSwimLane(swimlanes);
    }
    return (
      <React.Fragment>
        <button
          className="btn btn-success SwimLane"
          onClick={this.props.createSwimlane}
        >
          + Create New Lanes
        </button>
      </React.Fragment>
    );
  }

  renderSwimLane = _swimlanes => {
    let lanes = _swimlanes.map(swimlane => {
      console.log(swimlane);
      return (
        <React.Fragment>
          <SwimLaneContainer
            swimlaneId={swimlane.swimlaneId}
            title={swimlane.title}
            todos={this.props.todos}
            createTask={this.props.createTask}
            updateTask={this.props.updateTask}
            removeTask={this.props.removeTask}
            updateSwimlane={this.props.updateSwimlane}
          />
        </React.Fragment>
      );
    });
    lanes.push(
      <React.Fragment>
        <button
          className="btn btn-success SwimLane"
          onClick={this.props.createSwimlane}
        >
          + Create New Lanes
        </button>
      </React.Fragment>
    );
    console.log(lanes);
    return lanes;
  };
}

export default BoardView;
