import React from "./react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    // setInterval(() => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }, 1000);
  }

  componentWillMount() {
    console.log("component will mount");
  }
  componentDidMount() {
    console.log("component mounted");
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Increment
        </button>
      </div>
    );
  }
}
