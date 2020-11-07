import React from "react";
import { Button } from "react-bootstrap";
import { BiSave } from "react-icons/bi";
import "./AddButton.css";

class AddButton extends React.Component {
  render() {
    return (
      <div>
        <Button
          className="add-button"
          disabled={this.props.disabled}
          onClick={this.props.onClick}
          variant="success"
        >
          <BiSave size={20}/> <b>Add</b>
        </Button>
      </div>
    );
  }
}

export default AddButton;