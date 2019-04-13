import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h1">Kanban Board</span>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Create New Swimlane
      </button>
    </nav>
  );
};

export default Navbar;
