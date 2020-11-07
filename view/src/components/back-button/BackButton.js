import React from "react";
import { Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import "./BackButton.css";

class BackButton extends React.Component {
  render() {
    return (
      <div>
        <Button
          className="back-button"
          disabled={this.props.disabled}
          onClick={this.props.onClick}
        >
          <FaArrowLeft /> <b>Back</b>
        </Button>
      </div>
    );
  }
}

export default BackButton;