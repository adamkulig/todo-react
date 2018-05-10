import React, { Component } from 'react';
import classNames from 'classnames';
import './Button.scss';

export class Button extends Component {
  render() {
    const { type, onClick, icon } = this.props
    return (
      <button
        className={classNames('btn', `btn--${type}`)}
        onClick={onClick}>
        {icon}
      </button>
    );
  }
}
