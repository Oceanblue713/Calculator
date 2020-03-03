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
    if(button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else if(button === "=") {
      this.calculate();
    }
  }

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      })
    } catch(e) {
      this.setState({
        result: "Error"
      })
    }
  }
  
  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
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
