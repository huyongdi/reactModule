import React, {Component} from 'react';
import PropTypes from 'prop-types';
import style from './index.less';

export default class Button2 extends Component {
  render() {
    return <button className={style.btn}>{this.props.text}</button>
  }
}
Button2.propTypes = {
  text: PropTypes.any
}




