import React from "react";
import { animateScroll } from "react-scroll";
import StayDetailsForm from "./stay-details/StayDetailsForm";
import AddButton from "../../../components/add-button/AddButton";
import NextButton from "../../../components/next-button/NextButton";
import axios from "axios";
import {API} from "../../../config";

class AddStayDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      httpStatus: 201,
      errorMessage: "",
      numberOfStays: 1,
      submit: false,
      previousStayDetails: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  scrollToBottom() {
    animateScroll.scrollToBottom({
      containerId: "ContainerElementId"
    });
  }

  handleAdd = () => {
    let numOfStays = this.state.numberOfStays + 1;
    this.setState({
      numberOfStays: numOfStays
    }, this.scrollToBottom());
  }

  submitStayDetails = (stayDetails) => {
    let prevStayDetails = this.state.previousStayDetails;
    prevStayDetails.push(stayDetails);
    this.setState({
      previousStayDetails: prevStayDetails
    });
  }

  handleSubmit(event) {
    this.setState({
      submit: true
    }, () => {
      let prevStayDetails = {
        employeeId: this.props.employeeId,
        previousStayDetails: this.state.previousStayDetails
      };
      axios({
        method: 'post',
        url: `${API}/add-employee-previous-stay-details`,
        timeout: 4000,
        headers: {
        Accepts:'application/json',
          "Content-Type":"application/json"
        },
        data: prevStayDetails
      })
      .then((response) => {
        this.setState({
          httpStatus: response.data.httpStatus,
          errorMessage: response.data.errorMessage
        }, () => {
          if(this.state.httpStatus === 201) {
            this.props.history.push("/addEmployee/addEducationalQualifications");
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
    let forms = [];
    for(var i = 0; i < this.state.numberOfStays; i++) {
      forms.push(
        <StayDetailsForm
          id={i}
          key={i}
          submit={this.state.submit}
          submitStayDetails={this.submitStayDetails}
        />
      );
    }
    return (<div>{forms}</div>);
  }

  render() {
    return (
      <div className="bg-page">
        {this.getForms()}
        <div className="submit-button-field">
          <div className="add-field">
            <AddButton onClick={this.handleAdd} />
          </div>
          <div className="button-field">
            <NextButton onClick={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default AddStayDetailsForm;