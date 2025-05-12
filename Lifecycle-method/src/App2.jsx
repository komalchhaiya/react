import React, { Component } from 'react';

class App2 extends Component {
  constructor(props) {
super(props);
  this.state = {
      count: 0,
    }; }

  componentDidUpdate(prevProps, prevState) {
  if (prevState.count !== this.state.count) {
  console.log('Component updated, current :', this.state.count);
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount.');
  }

  increment = () => {this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
     <h1>Count: {this.state.count}</h1>
    <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default App2;
