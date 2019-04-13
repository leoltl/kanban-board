import React from "react";
import SwimLaneContainer from "../SwimLane/SwimLaneContainer";
import "./Board.css";

const swimLaneData = [
  { id: 0, title: "To-Do" },
  { id: 1, title: "In-Progress" },
  { id: 2, title: "Done" }
];

class BoardView extends React.Component {
  render() {
    return this.renderSwimLane(swimLaneData);
  }

  renderSwimLane = todos => {
    let lanes = swimLaneData.map(swimlane => (
      <React.Fragment>
        <SwimLaneContainer
          id={swimlane.id}
          title={swimlane.title}
          todos={this.props.todos}
          createTask={this.props.createTask}
          updateTask={this.props.updateTask}
          removeTask={this.props.removeTask}
        />
      </React.Fragment>
    ));
    console.log(this.props.todos);
    lanes.push(
      <React.Fragment>
        <button className="btn btn-success newLane">+ Create New Lanes</button>
      </React.Fragment>
    );
    return lanes;
  };
}

export default BoardView;
