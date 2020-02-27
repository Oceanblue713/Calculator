import React from 'react';
import './App.css';
import ResultComponent from './ResultComponent';
import KeypadComponent from './KeypadComponent';

class App extends React.Component {
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
