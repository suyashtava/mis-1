import React from "react";
import "./InfoParagraph.css";

class InfoParagraph extends React.Component {
  render() {
    return (
      <div className="info-paragraph">
        {this.props.info}
      </div>
    );
  }
}

export default InfoParagraph;