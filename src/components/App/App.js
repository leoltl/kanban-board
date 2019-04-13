import React, { Component } from "react";
import BoardContainer from "../Board/BoardContainer";
import Navbar from "../Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="board">
          <BoardContainer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
