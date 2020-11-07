import React from "react";
import "./RejectedParagraph.css";

class RejectedParagraph extends React.Component {
  render() {
    return (
      <div className="rejected-paragraph">
        {this.props.rejectionInfo}
      </div>
    );
  }
}

export default RejectedParagraph;