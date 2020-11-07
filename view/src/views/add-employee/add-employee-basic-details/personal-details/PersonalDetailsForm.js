import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import "./PersonalDetailsForm.css";

class PersonalDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      signature: null,
      photo: require("../../../../resources/user-icon.png"),
      sign: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  handleValidation() {
    if(this.state.salutation === "Choose..." ||
      this.state.firstName.trim() === "" ||
      this.state.maritalStatus === "Choose" ||
      this.state.dob === "" ||
      this.state.placeOfBirth.trim() === "" ||
      this.state.gender.trim() === "" ||
      this.state.physicallyChallenged.trim() === "" ||
      this.state.kashmiriImmigrant.trim() === "" ||
      this.state.fatherName.trim() === "" ||
      this.state.motherName.trim() === "" ||
      this.state.category === "Choose..." ||
      this.state.nationality.trim() === "" ||
      this.state.religion.trim() === "" ||
      this.state.photograph === null ||
      this.state.signature === null) {
        return false;
      }
      return true;
  }

  sendPersonalData = () => {
    if(this.handleValidation()) {
      this.props.submitPersonalDetails({
        salutation: this.state.salutation,
        firstName: this.state.firstName,
        middleName: this.state.middleName,
        lastName: this.state.lastName,
        maritalStatus: this.state.maritalStatus,
        dob: this.state.dob,
        placeOfBirth: this.state.placeOfBirth,
        gender: this.state.gender,
        physicallyChallenged: this.state.physicallyChallenged,
        kashmiriImmigrant: this.state.kashmiriImmigrant,
        fatherName: this.state.fatherName,
        motherName: this.state.motherName,
        category: this.state.category,
        nationality: this.state.nationality,
        religion: this.state.religion,
        photograph: this.state.photograph,
        signature: this.state.signature
      });
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    }, this.sendPersonalData());
  }

  handleFileChange(event) {
    event.persist();
    let uploadedFile = event.target.files[0];
    const fileData = new FormData();
    let reader = new FileReader();
    if(event.target.name === "photograph") {
      fileData.append("photo", uploadedFile);
      reader.onload = (e) => {
        this.setState({
          photo: e.target.result
        });
      }
      this.setState({
        photograph: fileData
      }, () => {
        this.sendPersonalData();
      });
    }
    else {
      fileData.append("sign", uploadedFile);
      reader.onload = (e) => {
        this.setState({
          sign: e.target.result
        });
      }
      this.setState({
        signature: fileData
      }, () => {
        this.sendPersonalData();
      });
    }
    reader.readAsDataURL(event.target.files[0]);
  }

  render() {
    const salutations = this.props.salutations.map(salutation => <option key={salutation}>{salutation}</option>);
    const maritalStatuses = this.props.maritalStatuses.map(status => <option key={status}>{status}</option>);
    const categories = this.props.categories.map(category => <option key={category}>{category}</option>);
    return (
      <div className="card personal-details">
        <div className="form-heading">
          <b>Personal Details</b>
        </div>
        <br />
        <div className="form-details">
          <div className="mandatory-field-info">
            Fields marked with <span style={{color: "red"}}>*</span> are mandatory.
          </div>
          <br />
          <div className="name">
            <div className="salutation" id="personal-detials-form-label">
              <label><b>Salutation </b><span style={{color: "red"}}>*</span></label>
              <br />
              <FormControl
                as="select"
                className="remove-border-radius"
                name="salutation"
                value={this.state.salutation}
                onChange={this.handleChange}
              >
                <option>Choose...</option>
                {salutations}
              </FormControl>
            </div>
            <div className="first-name" id="personal-detials-form-label">
              <label><b>First Name </b><span style={{color: "red"}}>*</span></label>
              <br />
              <FormControl 
                type="text"
                className="remove-border-radius"
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
            <div className="middle-name" id="personal-detials-form-label">
              <label><b>Middle Name</b></label>
              <br />
              <FormControl 
                type="text"
                className="remove-border-radius"
                name="middleName"
                placeholder="Middle Name"
                value={this.state.middle}
                onChange={this.handleChange}
              />
            </div>
            <div className="last-name" id="personal-detials-form-label">
              <label><b>Last Name</b></label>
              <br />
              <FormControl 
                type="text"
                className="remove-border-radius"
                name="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <br />
          <div className="marital-status-dob-place-of-birth">
            <div className="marital-status" id="personal-detials-form-label">
              <label><b>Marital Status </b><span style={{color: "red"}}>*</span></label>
              <br />
              <FormControl
                as="select"
                className="remove-border-radius"
                name="maritalStatus"
                value={this.state.maritalStatus}
                onChange={this.handleChange}
              >
                <option>Choose...</option>
                {maritalStatuses}
              </FormControl>
            </div>
            <div className="dob" id="personal-detials-form-label">
              <label><b>DOB </b><span style={{color: "red"}}>*</span></label>
              <br />
              <InputGroup>
                <FormControl 
                  type="date"
                  className="remove-border-radius"
                  name="dob"
                  value={this.state.dob}
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
            <div className="place-of-birth" id="personal-detials-form-label">
              <label><b>Place of Birth </b><span style={{color: "red"}}>*</span></label>
              <br />
              <FormControl 
                type="text"
                className="remove-border-radius"
                name="placeOfBirth"
                value={this.state.placeOfBirth}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <br />
          <div className="gender-pwd-kashmiri-immigrant">
            <div className="gender" id="personal-detials-form-label">
              <label><b>Gender </b><span style={{color: "red"}}>*</span></label>
              <div className="select-gender">
                <input 
                  type="radio" 
                  id="M" 
                  name="gender" 
                  value="M" 
                  onChange={this.handleChange} 
                />Male
                <br />
                <input 
                  type="radio" 
                  id="F" 
                  name="gender" 
                  value="F" 
                  onChange={this.handleChange} 
                />Female
                <br />
                <input 
                  type="radio" 
                  id="O" 
                  name="gender" 
                  value="O" 
                  onChange={this.handleChange} 
                />Others
              </div>
            </div>
            <div className="pwd" id="personal-detials-form-label">
              <label><b>Physically Challenged </b><span style={{color: "red"}}>*</span></label>
              <div className="select-pwd">
                <input 
                  type="radio" 
                  id="Yes" 
                  name="physicallyChallenged" 
                  value="Yes" 
                  onChange={this.handleChange} 
                />Yes
                <br />
                <input 
                  type="radio" 
                  id="No" 
                  name="physicallyChallenged" 
                  value="No" 
                  onChange={this.handleChange} 
                />No
                <br />
                <br />
              </div>
            </div>
            <div className="kashmiri-immigrant" id="personal-detials-form-label">
              <label><b>Kashmiri Immigrant </b><span style={{color: "red"}}>*</span></label>
              <div className="select-kashmiri-immigrant">
                <input 
                  type="radio" 
                  id="Yes" 
                  name="kashmiriImmigrant" 
                  value="Yes" 
                  onChange={this.handleChange} 
                />Yes
                <br />
                <input 
                  type="radio" 
                  id="No" 
                  name="kashmiriImmigrant" 
                  value="No" 
                  onChange={this.handleChange} 
                />No
                <br />
                <br />
              </div>
            </div>
          </div>
          <br />
          <div className="father-mother">
            <div className="father-name" id="personal-detials-form-label">
              <label><b>Father's Name </b><span style={{color: "red"}}>*</span></label>
              <br />
              <FormControl 
                type="text"
                className="remove-border-radius"
                name="fatherName"
                value={this.state.fatherName}
                onChange={this.handleChange}
              />
            </div>
            <div className="mother-name" id="personal-detials-form-label">
            <label><b>Mother's Name </b><span style={{color: "red"}}>*</span></label>
              <br />
              <FormControl 
                type="text"
                className="remove-border-radius"
                name="motherName"
                value={this.state.motherName}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <br />
          <div className="category-nationality-religion">
            <div className="category" id="personal-detials-form-label">
              <label><b>Category </b><span style={{color: "red"}}>*</span></label>
              <br />
              <FormControl
                as="select"
                className="remove-border-radius"
                name="category"
                value={this.state.category}
                onChange={this.handleChange}
              >
                <option>Choose...</option>
                {categories}
              </FormControl>
            </div>
            <div className="nationality" id="personal-detials-form-label">
              <label><b>Nationality </b><span style={{color: "red"}}>*</span></label>
              <br />
              <FormControl 
                type="text"
                className="remove-border-radius"
                name="nationality"
                value={this.state.nationality}
                onChange={this.handleChange}
              />
            </div>
            <div className="religion" id="personal-detials-form-label">
              <label><b>Religion </b><span style={{color: "red"}}>*</span></label>
              <br />
              <FormControl 
                type="text"
                className="remove-border-radius"
                name="religion"
                value={this.state.religion}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <br />
          <div className="photograph">
            <label><b>Photograph </b><span style={{color: "red"}}>*</span></label>
            <br />
            <div className="upload-photo">
              <input 
                type="file" 
                id="photograph" 
                name="photograph"
                onChange={this.handleFileChange} 
              />
              <img src={this.state.photo} alt="photograph" className="display"/>
            </div>
          </div>
          <br />
          <div className="signature">
            <label><b>Signature </b><span style={{color: "red"}}>*</span></label>
            <br />
            <div className="upload-sign">
              <input 
                type="file" 
                id="signature" 
                name="signature"
                onChange={this.handleFileChange} 
              />
              <img src={this.state.sign} alt="signature" className="display"/>
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default PersonalDetailsForm;
