import React, { Component } from "react";

//Stateles Functional Component
const NavBar = props => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Items In Cart{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};
// class NavBar extends Component {
//   //   state = {};
//   render() {

//   }
// }

export default NavBar;
