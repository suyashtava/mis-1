import React from "react";
import { Button } from "react-bootstrap";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import "./ValidationButtons.css";

class ValidataionButtons extends React.Component {
  render() {
    return (
      <div>
        <div className="approve-button">
          <Button variant="success"><AiFillLike size={20}/> Approve</Button>
        </div>
        <div className="reject-button">
          <Button variant="danger"><AiFillDislike size={20}/> Reject</Button>
        </div>
      </div>
    );
  }
}

export default ValidataionButtons;