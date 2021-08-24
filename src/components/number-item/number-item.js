import React from 'react';
import './number-item.css';

export default class NumberItem extends React.Component{
  render(){
    const classNames = 'd-flex justify-content-center align-items-center w-100 bg-dark h-100 h2';
    return(
      <div
        className={classNames}
        onClick={this.props.onClick}
      >{this.props.numberValue}</div>
    );
  }
}