import React from 'react';
import './App.css';
import ResultComponent from './ResultComponent';
import KeypadComponent from './KeypadComponent';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      result: ""
    }
  }
  
  render() {
    return(
      <div>
        <ResultComponent />
        <KeypadComponent />
      </div>
    )
  }
}

export default App;
