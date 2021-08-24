import React from 'react';
import './counting-dash.css';

export default class CountingDash extends React.Component{


  render(){
    const classNames = 'square d-flex justify-content-center align-items-center h4 m-0 rounded';
    return(
    <div
    className={classNames}
    >
      <span>{this.props.firstNumber}</span>
      <span>{this.props.action}</span>
      <span>{this.props.secondNumber}</span>
    </div>
    );
  }
}