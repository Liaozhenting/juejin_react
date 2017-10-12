import React, { Component } from 'react';
import Container from "./container/index";
class App extends Component {

  render() {
    const {store} = this.props;
    return (
      <div className="App">
        <Container {...store}/>   
      </div>
    );
  }
}

export default App;
