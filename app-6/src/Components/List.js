import React, {Component} from 'react';

export default class List extends Component {
  render() {
    return <p>{this.props.task}</p>;
  }
}

