import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./EmploymentDetailsForm.css";

class EmploymentDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeType: "Choose...",
      dateOfJoining: "",
      designation: "Choose...",
      department: "Choose...",
      researchInterest: "",
      natureOfEmployment: "Choose...",
      dateOfRetirement: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleValidation() {
    if(this.state.employeeType === "Choose..." ||
    this.state.dateOfJoining.trim() === "" ||
    this.state.designation === "Choose..." ||
    this.state.department === "Choose..." ||
    this.state.natureOfEmployment === "Choose..." ||
    this.state.dateOfRetirement.trim() === "") {
      return false;
    }
    return true;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    }, () => {
      if(this.handleValidation()) {
        this.props.submitEmploymentDetails(this.state);
      }
    });
  }

  render() {
    const employeeTypes = this.props.employeeTypes.map(employeeType => <option key={employeeType}>{employeeType}</option>);
    const designations = this.props.designations.map(designation => <option key={designation}>{designation}</option>);
    const departments = this.props.departments.map(department => <option key={department}>{department}</option>);
    const naturesOfEmployment = this.props.naturesOfEmployment.map(natureOfEmployment => <option key={natureOfEmployment}>{natureOfEmployment}</option>)
    return (
      <div className="card employment-details">
        <div className="form-head">
          <b>Employment Details</b>
        </div>
        <br />
        <div className="form-details">
          <div className="text-align-left">
            <label><b>Employee Type </b><span style={{color: "red"}}>*</span></label>
            <br />
            <FormControl
              as="select"
              className="remove-border-radius"
              name="employeeType"
              value={this.state.employeeType}
              onChange={this.handleChange}
            >
                <option>Choose...</option>
                {employeeTypes}
            </FormControl>
          </div>
          <br />
          <div className="text-align-left">
            <label><b>Date of Joining </b><span style={{color: "red"}}>*</span></label>
            <br />
            <InputGroup>
              <FormControl 
                type="date"
                className="remove-border-radius"
                name="dateOfJoining"
                value={this.state.dateOfJoining}
                onChange={this.handleChange}
              />
              <InputGroup.Append>
                <InputGroup.Text className="remove-border-radius">
                  <div className="calendar-icon">
                    <FaCalendarAlt size={20} />
                  </div>
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </div>
          <br />
          <div className="text-align-left">
            <label><b>Designation </b><span style={{color: "red"}}>*</span></label>
            <br />
            <FormControl
              as="select"
              className="remove-border-radius"
              name="designation"
              value={this.state.designation}
              onChange={this.handleChange}
            >
                <option>Choose...</option>
                {designations}
            </FormControl>
          </div>
          <br />
          <div className="text-align-left">
            <label><b>Department/Section </b><span style={{color: "red"}}>*</span></label>
            <br />
            <FormControl
              as="select"
              className="remove-border-radius"
              name="department"
              value={this.state.department}
              onChange={this.handleChange}
            >
                <option>Choose...</option>
                {departments}
            </FormControl>
          </div>
          <br />
          <div className="text-align-left">
            <label><b>Research Interest</b></label>
            <br />
            <FormControl 
              type="text"
              className="remove-border-radius"
              name="researchInterest"
              value={this.state.researchInterest}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="text-align-left">
            <label><b>Nature of Employment </b><span style={{color: "red"}}>*</span></label>
            <br />
            <FormControl
              as="select"
              className="remove-border-radius"
              name="natureOfEmployment"
              value={this.state.natureOfEmployment}
              onChange={this.handleChange}
            >
                <option>Choose...</option>
                {naturesOfEmployment}
            </FormControl>
          </div>
          <br />
          <div className="text-align-left">
            <label><b>Date of Retirement </b><span style={{color: "red"}}>*</span></label>
            <br />
            <InputGroup>
              <FormControl 
                type="date"
                className="remove-border-radius"
                name="dateOfRetirement"
                value={this.state.dateOfRetirement}
                onChange={this.handleChange}
              />
              <InputGroup.Append>
                <InputGroup.Text className="remove-border-radius">
                  <div className="calendar-icon">
                    <FaCalendarAlt size={20} />
                  </div>
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default EmploymentDetailsForm;