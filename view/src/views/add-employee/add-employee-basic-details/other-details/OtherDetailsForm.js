import React, { useEffect } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import "./OtherDetailsForm.css"

class OtherDetailsForm extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      hobbies: "",
      favoritePastTime: "",
      fax: null,
      officeNo: null,
      email: "",
      mobileNo: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    }, this.props.submitOtherDetails(this.state));
  }

  render() {
    return (
      <div className="card other-details">
        <div className="form-details">
          <br />
          <div className="hobbies-fav-past-time-fax">
            <div className="other-details-input">
              <label><b>Hobbies</b></label>
              <br />
              <FormControl 
                className="remove-border-radius"
                name="hobbies"
                value={this.state.hobbies}
                onChange={this.handleChange}
              />
            </div>
            <div className="other-details-input">
              <label><b>Favorite Past Time</b></label>
              <br />
              <FormControl 
                className="remove-border-radius"
                name="favoritePastTime"
                value={this.state.favoritePastTime}
                onChange={this.handleChange}
              />
            </div>
            <div className="other-details-input">
              <label><b>Fax</b></label>
              <br />
              <FormControl 
                className="remove-border-radius"
                name="fax"
                value={this.state.fax}
                onChange={this.handleChange}
              />
            </div>
            </div>
            <br />
            <div className="contact-info">
              <div className="other-details-input">
                <label><b>Office No</b></label>
                <br />
                <FormControl 
                  className="remove-border-radius"
                  name="officeNo"
                  value={this.state.officeNo}
                  onChange={this.handleChange}
                />
              </div>
              <div className="other-details-input">
                <label><b>Email</b></label>
                <br />
                <InputGroup>
                  <InputGroup.Prepend>
                    <div className="email-icon">
                      <MdEmail size={20}/>
                    </div>
                  </InputGroup.Prepend>
                  <FormControl 
                    className="remove-border-radius"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </InputGroup>
              </div>
              <div className="other-details-input">
                <label><b>Mobile No</b></label>
                <br />
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text className="remove-border-radius">+91</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    className="remove-border-radius"
                    name="mobileNo"
                    value={this.state.mobileNo}
                    onChange={this.handleChange}
                  />
                </InputGroup>
              </div>
            </div>
          <br />
        </div>
      </div>
    );
  }
}

export default OtherDetailsForm;