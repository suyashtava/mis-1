import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import "./SalaryDetailsForm.css";

class SalaryDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payBand: "Choose...",
      gradePay: null,
      basicPay: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleValidation() {
    if(this.state.payBand === "Choose..." ||
    this.state.gradePay === null ||
    this.state.basicPay === null) {
      return false;
    }
    return true;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    }, () => {
      if(this.handleValidation()) {
        this.props.submitSalaryDetails(this.state);
      }
    });
  }

  render() {
    const payBands = this.props.payBands.map(payBand => <option key={payBand}>{payBand}</option>);
    const gradePays = this.props.gradePays.map(gradePay => <option key={gradePay}>{gradePay}</option>);
    return (
      <div className="card salary-details">
        <div className="form-head">
          <b>Salary Details</b>
        </div>
        <br />
        <div className="form-details">
          <div className="text-align-left">
            <label><b>Pay Band </b><span style={{color: "red"}}>*</span></label>
            <br />
            <FormControl
              as="select"
              className="remove-border-radius"
              name="payBand"
              value={this.state.payBand}
              onChange={this.handleChange}
            >
              <option>Choose...</option>
              {payBands}
            </FormControl>
          </div>
          <br />
          <div className="text-align-left">
            <label><b>Grade Pay </b><span style={{color: "red"}}>*</span></label>
            <br />
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text className="remove-border-radius">&#8377;</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl 
                as="select" 
                name="gradePay" 
                value={this.state.gradePay}
                onChange={this.handleChange}
              >
                <option>Choose...</option>
                {gradePays}
              </FormControl>
              <InputGroup.Append>
                <InputGroup.Text className="remove-border-radius">.00</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </div>
          <div className="text-align-left">
            <label><b>Basic Pay </b><span style={{color: "red"}}>*</span></label>
            <br />
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text className="remove-border-radius">&#8377;</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl 
                type="text" 
                name="basicPay" 
                value={this.state.basicPay}
                onChange={this.handleChange}
              />
              <InputGroup.Append>
                <InputGroup.Text className="remove-border-radius">.00</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default SalaryDetailsForm;