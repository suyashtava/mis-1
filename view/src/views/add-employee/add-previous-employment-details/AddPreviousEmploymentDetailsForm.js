import React from "react";
import { animateScroll } from "react-scroll";
import axios from "axios";
import {API} from "../../../config";
import PreviousEmploymentDetailsForm from "./previous-employment-details/PreviousEmploymentDetailsForm";
import NextButton from "../../../components/next-button/NextButton";
import AddButton from "../../../components/add-button/AddButton";
import "./AddPreviousEmploymentDetailsForm.css";

class AddPreviousEmploymentDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      httpStatus: 201,
      errorMessage: "",
      numberOfEmployments: 1,
      previousEmploymentDetails: [],
      submit: false
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  scrollToBottom() {
    animateScroll.scrollToBottom({
      containerId: "ContainerElementID"
    });
  }

  handleAdd(event) {
    let numberOfForms = this.state.numberOfEmployments + 1;
    this.setState({
      numberOfEmployments: numberOfForms
    }, this.scrollToBottom());
  }

  submitPreviousEmploymentDetails = (previousEmploymentDetails) => {
    let employmentDetails = this.state.previousEmploymentDetails;
    employmentDetails.push(previousEmploymentDetails);
    this.setState({prevEmploymentDetails: employmentDetails});
  }

  handleSubmit(event) {
    this.setState({
      submit: true
    }, () => {
      axios({
        method: 'post',
        url: `${API}/add-employee-previous-employment-details`,
        timeout: 4000,
        headers: {
        Accepts:'application/json',
          "Content-Type":"application/json"
        },
        data: {
          employeeId: this.props.employeeId,
          previousEmploymentDetails: this.state.previousEmploymentDetails
        }
      })
      .then((response) => {
        this.setState({
          httpStatus: response.data.httpStatus,
          errorMessage: response.data.errorMessage
        }, () => {
          if(this.state.httpStatus === 201) {
            this.props.history.push("/addEmployee/addPreviousStayDetails");
          }
        });
      })
      .catch((error) => {
        this.setState({
          httpStatus: 400,
          errorMessage: "Request Failed! Please try again.",
          submit: false
        });
      });
    });
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

  getForms = () => {
    var forms = [];
    for(var i = 0; i < this.state.numberOfEmployments; i++) {
      forms.push(
        <PreviousEmploymentDetailsForm
          id={i}
          key={i}
          submitPreviousEmploymentDetails={this.submitPreviousEmploymentDetails}
          submit={this.state.submit}
        />
      );
    }
    return (<div>{forms}</div>);
  }

  render() {
    return (
      <div className="bg-page" style={{fontSize: "0.8em"}}>
        <div>{this.getForms()}</div>
        <div className="submit-button-field">
          <div className="add-field">
            <AddButton onClick={this.handleAdd}/>
          </div>
          <div className="button-field">
            <NextButton onClick={this.handleSubmit}/>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPreviousEmploymentDetailsForm;