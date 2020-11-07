import React from "react";
import AddressForm from "./address/AddressForm";
import "./AddressDetailsForm.css";

class AddressDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      presentAddress: {
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "Choose...",
        pincode: "",
        country: "",
        contact: ""
      },
      permanentAddress: {
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "Choose...",
        pincode: "",
        country: "",
        contact: ""
      },
      gotPresentAddress: false,
      gotPermanentAddress: false
    };
  }

  handleSubmitPresentAddress = (presentAddress) => {
    this.setState({
      presentAddress: presentAddress,
      gotPresentAddress: true
    }, () => {
      if(this.state.gotPresentAddress && this.state.gotPermanentAddress) {
        this.props.submitAddressDetails({
          presentAddress: this.state.presentAddress,
          permanentAddress: this.state.permanentAddress
        });
      }
    });
  }

  handleSubmitPermanentAddress = (permanentAddress) => {
    this.setState({
      permanentAddress: permanentAddress,
      gotPermanentAddress: true
    }, () => {
      if(this.state.gotPresentAddress && this.state.gotPermanentAddress) {
        this.props.submitAddressDetails({
          presentAddress: this.state.presentAddress,
          permanentAddress: this.state.permanentAddress
        });
      }
    });
  }

  render() {
    return (
      <div className="card address-details">
      <div className="form-head">
        <b>Address Details</b>
      </div>
      <br />
      <div className="address-form-details">
        <div className="present-address-form">
          <label className="form-label">
            Present Address
          </label>
          <hr />
          <AddressForm 
            className="present-address" 
            submitAddress={this.handleSubmitPresentAddress} 
            states={this.props.states}
          />
        </div>
        <div className="permanent-address-form">
          <label className="form-label">
            Permanent Address
          </label>
          <hr />
          <AddressForm 
            className="permanent-address" 
            submitAddress={this.handleSubmitPermanentAddress}
            states={this.props.states}
          />
        </div>
      </div>
      </div>
    );
  }
}

export default AddressDetailsForm;