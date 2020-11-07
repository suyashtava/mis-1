import React from "react";
import { FormControl } from "react-bootstrap";
import "./AddressForm.css";

class AddressForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "Choose...",
      pincode: null,
      country: "",
      contact: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleValidation() {
    if(this.state.addressLine1.trim() === "" ||
    this.state.city.trim() === "" ||
    this.state.state === "Choose..." ||
    this.state.pincode === null ||
    this.state.country.trim() === "" ||
    this.state.contact === null) {
      return false;
    }
    return true;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    }, () => {
      if(this.handleValidation()) {
        this.props.submitAddress(this.state);
      }
    });
  }

  render() {
    const states = this.props.states.map(state => <option key={state}>{state}</option>);
    return (
      <div className="address-form">
        <div className="address-form-input">
          <label><b>Address Line 1 </b><span style={{color: "red"}}>*</span></label>
          <br />
          <FormControl 
            as="textarea"
            className="remove-border-radius"
            name="addressLine1"
            value={this.state.addressLine1}
            onChange={this.handleChange}
          />
        </div>
        <br />
        <div className="address-form-input">
          <label><b>Address Line 2</b></label>
          <br />
          <FormControl 
            type="text"
            className="remove-border-radius"
            name="addressLine2"
            value={this.state.addressLine2}
            onChange={this.handleChange}
          />
        </div>
        <br />
        <div className="address-form-input">
          <label><b>City </b><span style={{color: "red"}}>*</span></label>
          <br />
          <FormControl 
            type="text"
            className="remove-border-radius"
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
          />
        </div>
        <br />
        <div className="address-form-input">
          <label><b>State </b><span style={{color: "red"}}>*</span></label>
          <br />
          <FormControl
            as="select"
            className="remove-border-radius"
            name="state"
            value={this.state.state}
            onChange={this.handleChange}
          >
            <option>Choose...</option>
            {states}
          </FormControl>
        </div>
        <br />
        <div className="address-form-input">
          <label><b>Pin Code </b><span style={{color: "red"}}>*</span></label>
          <br />
          <FormControl 
            type="text"
            className="remove-border-radius"
            name="pincode"
            value={this.state.pincode}
            onChange={this.handleChange}
          />
        </div>
        <br />
        <div className="address-form-input">
          <label><b>Country </b><span style={{color: "red"}}>*</span></label>
          <br />
          <FormControl 
            type="text"
            className="remove-border-radius"
            name="country"
            value={this.state.country}
            onChange={this.handleChange}
          />
        </div>
        <br />
        <div className="address-form-input">
          <label><b>Contact No </b><span style={{color: "red"}}>*</span></label>
          <br />
          <FormControl 
            type="text"
            className="remove-border-radius"
            name="contact"
            value={this.state.contact}
            onChange={this.handleChange}
          />
        </div>
        <br />
      </div>
    );
  }
}

export default AddressForm;