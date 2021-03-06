import React, {Component} from 'react';
import './App.css';
import ResultComponent from './ResultComponent';
import KeypadComponent from './KeypadComponent';

class App extends Component {
  constructor(){
    super();

    this.state = {
      result: ""
    }
  }

  onClick = button => {
    if(button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if(button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button
      })
    }
  }

  calculate = () => {
    let checkResult = '';
    if(this.state.result.includes('--')){
      checkResult = this.state.result.replace('--', '+' )
    } else {
      checkResult = this.state.result
    }
    try {
      this.setState({
        // eslint-disable-next-line no-eval
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
          <ResultComponent result={this.state.result} />
          <KeypadComponent onClick={this.onClick}/>
        </div>
      </div>
    )
  }
}

export default App;
