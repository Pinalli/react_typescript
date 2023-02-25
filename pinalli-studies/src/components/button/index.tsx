import React from 'react';
import style from './Button.module.scss';

class Button extends React.Component <any, any>{
  constructor (props: any) {
    super (props);
    this.state = {
      value: null,
    }
  }
  render() {
    return (
      <button className={style.button}>
     {this.props.children}
      </button>
    )
  }
}

export default Button;

