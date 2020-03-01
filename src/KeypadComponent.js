import React, {Component} from 'react';

class KeyPadComponent extends Component{
  render() {
    return(
      <div className="button">
        <button name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
        <button name="CE" onClick={e=> this.props.onClick(e.target.name)}>CE</button>
        <button name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
        <button name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br />

        <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
        <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>

        
      </div>
    )
  }
}

export default KeyPadComponent;