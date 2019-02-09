import React from 'react';

import './Button.css';

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <button
        type={this.props.type ? this.props.type : "button"}
        disabled={this.props.disabled || this.props.loading}
        onClick={this.props.onClick}
        className={this.props.className + " Button " + (this.props.disabled ? "inactive" : "")}
        style={this.props.style}
      >
        <div className={this.props.loading ? "invisible" : ""}>{this.props.children}</div>
        <span className={this.props.loading ? 'loader' : ''} />
      </button>
    )
  }
}
