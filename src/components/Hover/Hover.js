import React from "react";

class Hover extends React.Component {
  state = { hovering: false };
  mouseOver = () => {
    console.log("over");
    this.setState({ hovering: true });
  };
  mouseOut = () => {
    console.log("out");
    this.setState({ hovering: false });
  };

  render() {
    return (
      <div onMouseEnter={this.mouseOver} onMouseLeave={this.mouseOut}>
        {this.props.render(this.state.hovering)}
      </div>
    );
  }
}

export default Hover;
