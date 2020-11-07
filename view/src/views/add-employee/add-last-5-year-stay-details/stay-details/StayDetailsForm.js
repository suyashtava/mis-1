import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import InfoParagraph from "../../../../components/info-paragraph/InfoParagraph";
import "./StayDetailsForm.css";

class StayDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      residentialAddress: "",
      from: "",
      to: "",
      nameOfDistrictHeadquarters: ""
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
      this.state.residentialAddress.trim() !== "" &&
      this.state.from !== "" &&
      this.state.to !== "" &&
      this.state.nameOfDistrictHeadquarters !== ""
    ) {
      this.props.submitStayDetails(this.state);
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
    let infoMessage = (!this.props.id) ? (
      <div className="rmf-heading">
        <h2>Add Last 5 Year Stay Details</h2>
        <br />
        <InfoParagraph info={info} />
        <br />
      </div>
    ):(
      <br />
    );
    return (
      <div className="card previous-stay-top-blue-border">
        {infoMessage}
        <div className="stay-details-form">
          <div className="stay-details-residential-address">
            <label><b>Residential Address</b></label>
            <FormControl 
              type="text"
              className="remove-border-radius"
              name="residentialAddress"
              value={this.state.residentialAddress}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="from-to-district-headquarters">
            <div className="stay-details-from">
              <label><b>From</b></label>
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
            <div className="stay-details-to">
              <label><b>To</b></label>
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
            <div className="stay-details-district">
              <label><b>Name of District Headquarters</b></label>
              <FormControl 
                type="text"
                className="remove-border-radius"
                name="nameOfDistrictHeadquarters"
                value={this.state.nameOfDistrictHeadquarters}
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

export default StayDetailsForm;