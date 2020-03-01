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

  onClick = (button) => {
    if(button = "C") {
      this.reset();
    }
  }
  
  reset = () => {
    this.setState({
      result: ""
    })
  };

  render() {
    return(
      <div>
        <div className="calculator-body">
          <h1>Calculator</h1>
          <ResultComponent result={this.state.result}/>
          <KeypadComponent onClick={this.onClick}/>
        </div>
      </div>
    )
  }
}

export default App;
