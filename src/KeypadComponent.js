import React, {Component} from 'react';

class KeyPadComponent extends Component{
  render() {
    return(
      <div className="button">
        <button name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
      </div>
    )
  }
}

export default KeyPadComponent;