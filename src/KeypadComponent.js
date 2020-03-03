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
        <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
        <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br />

        <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
        <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
        <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
        <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br />

        
      </div>
    )
  }
}

export default KeyPadComponent;