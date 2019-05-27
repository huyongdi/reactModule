import React, {Component} from 'react';
import PropTypes from 'prop-types';
import style from './index.less';

export default class Button1 extends Component {
  render() {
    return <button className={style.btn}>我是按钮1{this.props.text}</button>
  }
}
Button1.propTypes = {
  text: PropTypes.any
}
