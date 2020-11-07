import React from "react";
import { animateScroll } from "react-scroll";
import EducationalQualificationsForm from "./educational-qualifications/EducationalQualificationsForm";
import AddButton from "../../../components/add-button/AddButton";
import NextButton from "../../../components/next-button/NextButton";
import axios from "axios";
import {API} from "../../../config";

class AddEducationalQualificationsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      httpStatus: 201,
      errorMessage: "",
      numberOfQualifications: 1,
      submit: false,
      educationalQualifications: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  scrollToBottom() {
    animateScroll.scrollToBottom({
      containerId: "ContainerElementId"
    });
  }

  handleAdd(event) {
    let numOfQualifications = this.state.numberOfQualifications + 1;
    this.setState({
      numberOfQualifications: numOfQualifications
    }, this.scrollToBottom());
  }

  submitEducationalQualifications = (educationalQualifications) => {
    let eduQualifications = this.state.educationalQualifications;
    eduQualifications.push(educationalQualifications);
    this.setState({
      educationalQualifications: eduQualifications
    });
  }

  getForms = () => {
    let forms = [];
    for(var i = 0; i < this.state.numberOfQualifications; i++) {
      forms.push(
        <EducationalQualificationsForm
          id={i}
          key={i}
          submit={this.state.submit}
          submitEducationalQualifications={this.submitEducationalQualifications}
          examinations={this.props.examinations}
        />
      )
    }
    return (<div>{forms}</div>);
  }

  handleSubmit(event) {
    this.setState({
      submit: true
    }, () => {
      let eduQualifications = {
        employeeId: this.props.employeeId,
        educationalQualifications: this.state.educationalQualifications
      };
      axios({
        method: 'post',
        url: `${API}/add-employee-educational-qualifications`,
        timeout: 4000,
        headers: {
        Accepts:'application/json',
          "Content-Type":"application/json"
        },
        data: eduQualifications
      })
      .then((response) => {
        this.setState({
          httpStatus: response.data.httpStatus,
          errorMessage: response.data.errorMessage
        }, () => {
          if(this.state.httpStatus === 201) {
            this.props.history.push("/addEmployee/addDependentFamilyMembersDetails");
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

  render() {
    return (
      <div className="bg-page">
        {this.getForms()}
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

export default AddEducationalQualificationsForm;