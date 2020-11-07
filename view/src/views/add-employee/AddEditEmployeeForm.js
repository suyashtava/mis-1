import React from "react";
import { FormControl } from "react-bootstrap";
import NextButton from "../../components/next-button/NextButton";
import axios from "axios";
import {API} from '../../config';
import InfoParagraph from "../../components/info-paragraph/InfoParagraph";
import "./AddEditEmployeeForm.css";

class AddEditEmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      httpStatus: 201,
      employeeId: "",
      errorMessage: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    if(this.state.employeeId === "") {
      this.setState({
        httpStatus: 400,
        errorMessage: "Please enter valid employee id."
      });
    }
    else {
    axios({
      method: 'post',
      url: `${API}/add-employee`,
      timeout: 4000,
      headers: {
      Accepts:'application/json',
        "Content-Type":"application/json"
      },
      data:{
        employeeId: this.state.employeeId
      }
    })
    .then((response) => {
      this.setState({
        httpStatus: response.data.httpStatus,
        errorMessage: response.data.errorMessage
      }, () => {
        if(this.state.httpStatus === 201) {
          const details = {
            employeeId: this.state.employeeId/*,
            salutations: response.data.salutations,
            maritalStatuses: response.data.maritalStatuses,
            categories: response.data.categories,
            employeeTypes: response.data.employeeTypes,
            designations: response.data.designations,
            departments: response.data.departments,
            naturesOfEmployment: response.data.naturesOfEmployment,
            payBands: response.data.payBands,
            gradePays: response.data.gradePays,
            states: response.data.states,
            relationships: response.data.relationships,
            examinations: response.data.examinations*/
          };
          this.props.getDetails(details);
          this.props.history.push("/addEmployee/employeeDetails");
        }
      });
    })
    .catch((error) => {
      this.setState({
        httpStatus: 400,
        errorMessage: "Request Failed! Please try again."
      });
    });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.httpStatus !== 201) {
      alert(this.state.errorMessage);
      this.setState({
        httpStatus: 201,
        errorMessage: ""
      });
    } 
  }

  render() {
    const info = (
      <p>
        Enter a valid employee id.
      </p>
    );
    return (
      <div className="card bg-page-first">
        <div className="add-employee-page">
          <h3>Add Employee</h3>
          <br />
          <InfoParagraph info={info}/>
          <br />
          <div>
            Enter Employee Id: 
            <br />
            <FormControl 
              className="remove-border-radius"
              name="employeeId"
              value={this.state.employeeId}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="submit-button-field">
            <div className="button-field">
              <NextButton onClick={this.handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    );  
  }
}

export default AddEditEmployeeForm;