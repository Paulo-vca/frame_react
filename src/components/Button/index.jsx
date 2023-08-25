import { Component } from "react";

import "./styles.css";

export class Button extends Component {
  render() {
    const { text, action } = this.props;
    return <button onClick={action}>{text}</button>;
  }
}
