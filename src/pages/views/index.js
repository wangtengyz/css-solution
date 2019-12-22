import React from "react";
import CssSolution from "./componts/CssSolution";
import "./index.less";
const classPrefix = "Views";

export default class Views extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className={`${classPrefix}`}>
        <CssSolution />
      </div>
    );
  }
}
