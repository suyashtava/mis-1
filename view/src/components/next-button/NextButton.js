import React from "react";
import { Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import "./NextButton.css";

class NextButton extends React.Component {
  render() {
    return (
      <div>
        <Button
          className="next-button"
          disabled={this.props.disabled}
          onClick={this.props.onClick}
        >
          <FaArrowRight /> <b>Next</b>
        </Button>
      </div>
    );
  }
}

export default NextButton;