import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [{ name: " SVt ", age: 27 }, { name: "matchMedia", age: 28 }],
    otherState: "some other value"
  };

  switchNameHandler = () => {
    // console.log("was clicked!");
    //this.state.persons[0] = "max millan";
    this.setState({
      persons: [{ name: newName, age: 27 }, { name: "mill", age: 28 }]
    });
  };

  render() {
    return (
      <div className="App">
        <h1> Hi,I am react app</h1>
        <p>Tis , is really working!</p>
        <button onClick={() => this.switchNameHandler("MaxMiliam")}>
          Switch Names
        </button>
        <Person name={this.state.persons[0].name} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[1].name}
          click={this.switchNameHandler.bind(this, "Max!")}
        >
          Hobbies:travelling
        </Person>
        <Person name=" subbarao" />
      </div>
    );
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", { className: "App" }, " Does This Work now ?")
    // );
  }
}

export default App;
