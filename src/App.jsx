import { Component } from "react";
import "./styles.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      inputTxt: "",
      output: "Hello World",
      alertMsg: false
    };
  }
  handleInput = (event) => {
    this.setState({ inputTxt: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.inputTxt === "") {
      this.setState({ alertMsg: !this.state.alertMsg });
      setTimeout(() => {
        this.setState({ alertMsg: "" });
      }, 1500);
    } else {
      this.setState({ output: this.state.inputTxt });
    }
    this.setState({ inputTxt: "" });
    /* this.state.inputTxt === "" ? alert("Enter value") : null; */
  };

  render() {
    const { inputTxt, output } = this.state;

    return (
      <>
        <div className="container">
          <h3>A Message You Would Like To Pass</h3>
          <input
            id="input"
            type="text"
            onChange={this.handleInput}
            value={inputTxt}
          />
          <button id="submit" onClick={this.handleSubmit}>
            SUBMIT
          </button>
          <p id="errorMsg" className={this.state.alertMsg ? "show" : "hide"}>
            Enter a Input
          </p>
          <h2 id="last">Last Message Delivered</h2>
          <div id="display">{output.toUpperCase()}</div>
        </div>
      </>
    );
  }
}
