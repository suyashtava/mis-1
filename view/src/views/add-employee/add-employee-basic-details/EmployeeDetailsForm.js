import React from "react";
import PersonalDetailsForm from "./personal-details/PersonalDetailsForm";
import EmploymentDetailsForm from "./employment-details/EmploymentDetailsForm";
import SalaryDetailsForm from "./salary-details/SalaryDetailsForm";
import AddressDetailsForm from "./address-details/AddressDetailsForm";
import OtherDetailsForm from "./other-details/OtherDetailsForm";
import BankDetailsForm from "./bank-details/BankDetailsForm";
import NextButton from "../../../components/next-button/NextButton";
import axios from "axios";
import {API} from "../../../config";
import "./EmployeeDetailsForm.css";

class EmployeeDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      httpStatus: 201,
      errorMessage: "",
      personalDetails: {
        salutation: "Choose...",
        firstName: "",
        middleName: "",
        lastName: "",
        maritalStatus: "Choose...",
        dob: "",
        placeOfBirth: "",
        gender: "",
        physicallyChallenged: "",
        kashmiriImmigrant: "",
        fatherName: "",
        motherName: "",
        category: "Choose...",
        nationality: "",
        religion: "",
        photograph: null,
        signature: null
      },
      employmentDetails: {
        employeeType: "Choose...",
        dateOfJoining: "",
        designation: "Choose...",
        department: "Choose...",
        researchInterest: "",
        natureOfEmployment: "Choose...",
        dateOfRetirement: ""
      },
      salaryDetails: {
        payBand: "Choose...",
        gradePay: null,
        basicPay: null
      },
      addressDetails: {
        presentAddress: {
          addressLine1: "",
          addressLine2: "",
          city: "",
          state: "Choose...",
          pincode: null,
          country: "",
          contact: null
        },
        permanentAddress: {
          addressLine1: "",
          addressLine2: "",
          city: "",
          state: "Choose...",
          pincode: null,
          country: "",
          contact: null
        }
      },
      otherDetails: {
        hobbies: "",
        favoritePastTime: "",
        fax: null,
        officeNo: null,
        email: "",
        mobileNo: null
      },
      bankDetails: {
        bankName: "",
        accountNumber: ""
      },
      gotPersonalDetails: false,
      gotEmploymentDetails: false,
      gotSalaryDetails: false,
      gotAddressDetails: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleValidation() {
    if(
      this.state.personalDetails.salutation !== "Choose..." &&
      this.state.personalDetails.firstName.trim() !== "" &&
      this.state.personalDetails.maritalStatus !== "Choose..." &&
      this.state.personalDetails.dob !== "" &&
      this.state.personalDetails.placeOfBirth.trim() !== "" &&
      this.state.personalDetails.gender !== "" &&
      this.state.personalDetails.physicallyChallenged !== "" &&
      this.state.personalDetails.kashmiriImmigrant !== "" &&
      this.state.personalDetails.fatherName.trim() !== "" &&
      this.state.personalDetails.motherName.trim() !== "" &&
      this.state.personalDetails.category !== "Choose..." &&
      this.state.personalDetails.nationality.trim() !== "" &&
      this.state.personalDetails.religion.trim() !== "" &&
      this.state.personalDetails.photograph !== null &&
      this.state.personalDetails.signature !== null &&
      this.state.employmentDetails.employeeType !== "Choose..." &&
      this.state.employmentDetails.dateOfJoining !== "" &&
      this.state.employmentDetails.designation.trim() !== "" &&
      this.state.employmentDetails.department !== "Choose..." &&
      this.state.employmentDetails.natureOfEmployment !== "Choose..." &&
      this.state.employmentDetails.dateOfRetirement !== "" &&
      this.state.salaryDetails.payBand !== "Choose..." &&
      this.state.salaryDetails.gradePay !== null &&
      this.state.salaryDetails.basicPay !== null &&
      this.state.addressDetails.presentAddress.addressLine1.trim() !== "" &&
      this.state.addressDetails.presentAddress.city.trim() !== "" &&
      this.state.addressDetails.presentAddress.state !== "Choose..." &&
      this.state.addressDetails.presentAddress.pincode !== null &&
      this.state.addressDetails.presentAddress.country.trim() !== "" &&
      this.state.addressDetails.presentAddress.contact !== null &&
      this.state.addressDetails.permanentAddress.addressLine1.trim() !== "" &&
      this.state.addressDetails.permanentAddress.city.trim() !== "" &&
      this.state.addressDetails.permanentAddress.state !== "Choose..." &&
      this.state.addressDetails.permanentAddress.pincode !== null &&
      this.state.addressDetails.permanentAddress.country.trim() !== "" &&
      this.state.addressDetails.permanentAddress.contact !== null
    ) {
      return true;
    }
    return false;
  }

  handleSubmitPersonalDetails = (personalDetails) => {
    this.setState({
      personalDetails: personalDetails,
      gotPersonalDetails: true
    });
  }

  handleSubmitEmploymentDetails = (employmentDetails) => {
    this.setState({
      employmentDetails: employmentDetails,
      gotEmploymentDetails: true
    });
  }

  handleSubmitSalaryDetails = (salaryDetails) => {
    this.setState({
      salaryDetails: salaryDetails,
      gotSalaryDetails: true
    });
  }

  handleSubmitAddressDetails = (addressDetails) => {
    this.setState({
      addressDetails: addressDetails,
      gotAddressDetails: true
    });
  }

  handleSubmitOtherDetails = (otherDetails) => {
    this.setState({
      otherDetails: {
        hobbies: otherDetails.hobbies,
        favoritePastTime: otherDetails.favoritePastTime,
        fax: otherDetails.fax,
        officeNo: otherDetails.officeNo,
        email: otherDetails.email,
        mobileNo: otherDetails.mobileNo
      }
    });
  }

  handleSubmitBankDetails = (bankDetails) => {
    this.setState({
      bankDetails: {
        bankName: bankDetails.bankName,
        accountNumber: bankDetails.accountNumber
      }
    });
  }

  handleSubmit = () => {
    console.log(this.state);
    if(this.handleValidation()) {
      let basicDetails = {
        employeeId: this.props.employeeId,
        personalDetails: this.state.personalDetails,
        employmentDetails: this.state.employmentDetails,
        salaryDetails: this.state.salaryDetails,
        addressDetails: this.state.addressDetails,
        otherDetails: this.state.otherDetails,
        bankDetails: this.state.bankDetails
      };
      axios({
        method: 'post',
        url: `${API}/add-employee-basic-details`,
        timeout: 4000,
        headers: {
        Accepts:'application/json',
          "Content-Type":"application/json"
        },
        data: basicDetails
      })
      .then((response) => {
        console.log(response);
        this.setState({
          httpStatus: response.data.httpStatus,
          errorMessage: response.data.errorMessage
        }, () => {
          if(this.state.httpStatus === 201) {
            this.props.history.push("/addEmployee/addPreviousEmploymentDetails");
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
    else {
      this.setState({
        httpStatus: 400,
        errorMessage: "Please fill all required fields."
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
    return (
      <div className="employee-details">
        <div style={{padding: "10px"}}>
          <span className="heading">Add Employee Basic Details</span>
          <hr />
          <span className="heading">Enter Details for Employee Id <b>{this.props.employeeId}</b></span>
          <hr />
        </div>
        <PersonalDetailsForm 
          className="personal-details"
          submitPersonalDetails={this.handleSubmitPersonalDetails}
          salutations={this.props.salutations}
          maritalStatuses={this.props.maritalStatuses}
          categories={this.props.categories}
        />
        <div className="left-right">
          <div className="left">
            <EmploymentDetailsForm 
              className="employment-details"
              submitEmploymentDetails={this.handleSubmitEmploymentDetails}
              employeeTypes={this.props.employeeTypes}
              designations={this.props.designations}
              departments={this.props.departments}
              naturesOfEmployment={this.props.naturesOfEmployment}
            />
            <SalaryDetailsForm 
              className="salary-details"
              submitSalaryDetails={this.handleSubmitSalaryDetails}
              payBands={this.props.payBands}
              gradePays={this.props.gradePays}
            />
          </div>
          <div className="right">
            <AddressDetailsForm 
              className="address-details"
              submitAddressDetails={this.handleSubmitAddressDetails}
              states={this.props.states}
            />
            <OtherDetailsForm 
              className="other-details" 
              submitOtherDetails={this.handleSubmitOtherDetails}
            />
          </div>
        </div>
        <BankDetailsForm 
          className="bank-details"
          submitBankDetails={this.handleSubmitBankDetails}
        />
        <br />
        <div className="submit-button-field">
          <div className="button-field">
            <NextButton onClick={this.handleSubmit}/>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeDetailsForm;