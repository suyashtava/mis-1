import React from "react";
import { animateScroll } from "react-scroll";
import FamilyMembersDetailsForm from "./family-members-details/FamilyMembersDetailsForm";
import AddButton from "../../../components/add-button/AddButton";
import NextButton from "../../../components/next-button/NextButton";
import axios from "axios";
import {API} from "../../../config";

class AddDependentFamilyMembersDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      httpStatus: 201,
      errorMessage: "",
      numberOfFamilyMembers: 1,
      dependentFamilyMembersDetails: [],
      submit: false
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
    let numOfFamilyMembers = this.state.numberOfFamilyMembers + 1;
    this.setState({
      numberOfFamilyMembers: numOfFamilyMembers
    }, this.scrollToBottom());
  }

  submitFamilyMembersDetails = (familyMembersDetails) => {
    let dependentFamilyMembers = this.state.dependentFamilyMembersDetails;
    dependentFamilyMembers.push(familyMembersDetails);
    this.setState({
      dependentFamilyMembersDetails: dependentFamilyMembers
    });
  }

  handleSubmit(event) {
    this.setState({
      submit: true
    }, () => {
      let dependentFamilyMembersDetails = {
        employeeId: this.props.employeeId,
        dependentFamilyMembers: this.state.dependentFamilyMembersDetails
      };
      axios({
        method: 'post',
        url: `${API}/add-employee-dependent-family-members-details`,
        timeout: 4000,
        headers: {
        Accepts:'application/json',
          "Content-Type":"application/json"
        },
        data: dependentFamilyMembersDetails
      })
      .then((response) => {
        this.setState({
          httpStatus: response.data.httpStatus,
          errorMessage: response.data.errorMessage
        }, () => {
          if(this.state.httpStatus === 201) {
            this.props.history.push("/addEmployee");
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
    for(var i = 0; i < this.state.numberOfFamilyMembers; i++) {
      forms.push(
        <FamilyMembersDetailsForm
          id={i}
          key={i}
          submit={this.state.submit}
          submitFamilyMembersDetails={this.submitFamilyMembersDetails}
          relationships={this.props.relationships}
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

export default AddDependentFamilyMembersDetailsForm