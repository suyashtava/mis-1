import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import InfoParagraph from "../../../../components/info-paragraph/InfoParagraph";
import "./PreviousEmploymentDetailsForm.css";

class PreviousEmploymentDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullAddressOfEmployer: "",
      from: "",
      to: "",
      positionHeld: "",
      payScale: "",
      remarks: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  componentDidUpdate(prevProps) {
    if(this.props.submit && !prevProps.submit &&
      this.state.fullAddressOfEmployer.trim() !== "" &&
        this.state.from !== "" &&
        this.state.to !== "" &&
        this.state.positionHeld.trim() !== "" &&
        this.state.payScale.trim() !== ""
    ) {
      this.props.submitPreviousEmploymentDetails(this.state);
    }
  }

  render() {
    const info = (
      <p>
        Please click on <b>ADD</b> to add multiple employment details.
        <br />
        Please click on <b>NEXT</b> to move to next step.
      </p>
    );
    const infoMessage = (!this.props.id) ? (
      <div className="rmf-heading">
        <h2>Add Previous Employment Details</h2>
        <br />
        <InfoParagraph info={info}/>
        <br />
      </div>
    ):(
      <br />
    );
    return (
      <div className="card previous-employment-details-top-blue-border">
        {infoMessage}
        <div className="form-details">
          <div className="employer-address">
            <label><b>Full address of Employer</b></label>
            <br />
            <FormControl
              type="text"
              className="remove-border-radius"
              name="fullAddressOfEmployer"
              value={this.state.fullAddressOfEmployer}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="from-to">
            <div className="from">
              <label><b>From</b></label>
              <br />
              <InputGroup>
                <FormControl
                  type="date"
                  className="remove-border-radius"
                  name="from"
                  value={this.state.from}
                  onChange={this.handleChange}
                />
                <InputGroup.Append>
                  <InputGroup.Text className="remove-border-radius">
                    <FaCalendarAlt size={20}/>
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </div>
            <div className="to">
              <label><b>To</b></label>
              <br />
              <InputGroup>
                <FormControl
                  type="date"
                  className="remove-border-radius"
                  name="to"
                  value={this.state.to}
                  onChange={this.handleChange}
                />
                <InputGroup.Append>
                  <InputGroup.Text className="remove-border-radius">
                    <FaCalendarAlt size={20}/>
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </div>
          </div>
          <br />
          <div className="position-pay-remark">
            <div className="position-held">
              <label><b>Position Held</b></label>
              <br />
              <FormControl 
                type="text"
                className="remove-border-radius"
                name="positionHeld"
                value={this.state.positionHeld}
                onChange={this.handleChange}
              />
            </div>
            <div className="pay-scale">
              <label><b>Pay Scale</b></label>
              <br />
              <FormControl 
                type="text"
                className="remove-border-radius"
                name="payScale"
                value={this.state.payScale}
                onChange={this.handleChange}
              />
            </div>
            <div className="remarks">
              <label><b>Remarks</b></label>
              <br />
              <FormControl 
                type="text"
                className="remove-border-radius"
                name="remarks"
                value={this.state.remarks}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default PreviousEmploymentDetailsForm;