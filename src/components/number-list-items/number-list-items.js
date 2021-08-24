import React from 'react';

import NumberItem from '../number-item'
import './number-list-items.css'

export default class NumberListItems extends React.Component{


    onClickHappen(item){
        console.log(item);
    }
    render(){
        const {onClickNumberHappen} = this.props;
        const classNames = "d-flex list-unstyled flex-wrap h-100 w-100";
        let liStyle = "w-25 border border-primary";
        const divClassName = 'height-numbers d-flex m-0';
        let counter = 1;
        const numbers = this.props.numberValues.map((item) =>{
          if(item === "="){
            liStyle = "w-50 border border-primary";
          }
          return (
          <li 
          className = {liStyle}
          key={counter++}>
            <NumberItem
            numberValue={item}
            onClick={() => onClickNumberHappen(item)}
            ></NumberItem>
          </li>);
        });
        return(
          <div className={divClassName}>
            <ul
            className={classNames}
            >{numbers}</ul>
          </div>
        );
    }
}