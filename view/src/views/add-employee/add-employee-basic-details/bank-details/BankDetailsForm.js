import React from "react";
import { FormControl } from "react-bootstrap";
import "./BankDetailsForm.css";

class BankDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bankName: "",
      accountNumber: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    }, this.props.submitBankDetails(this.state));
  }

  render() {
    return (
      <div className="card bank-details">
        <div className="form-head">
          <b>Enter Your Bank Details</b>
        </div>
        <div className="bank-form-details">
          <div className="bank-name">
            <label><b>Bank Name</b></label>
            <br />
            <FormControl 
              type="text"
              className="remove-border-radius"
              placeholder="Bank Name"
              name="bankName"
              value={this.state.bankName}
              onChange={this.handleChange}
            />
          </div>
          <div className="account-number">
            <label><b>Account Number</b></label>
            <br />
            <FormControl 
              type="text"
              className="remove-border-radius"
              placeholder="Account Number"
              name="accountNumber"
              value={this.state.accountNumber}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BankDetailsForm;