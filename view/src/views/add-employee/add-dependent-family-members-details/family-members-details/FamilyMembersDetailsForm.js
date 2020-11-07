import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import { ImCheckmark, ImCross } from "react-icons/im";
import InfoParagraph from "../../../../components/info-paragraph/InfoParagraph";
import "./FamilyMembersDetailsForm.css";

class FamilyMembersDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      relationship: "Choose...",
      dob: "",
      profession: "",
      activeOrInactive: "",
      presentPostalAddress: "",
      photograph: null,
      photo: require("../../../../resources/user-icon.png"),
      active: false,
      inactive: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange(event) {
    if(event.target.name === "activeOrInactive") {
      if(event.target.value === "Active") {
        this.setState({active: true, inactive: false});
      }
      else if(event.target.value === "Inactive") {
        this.setState({inactive: true, active: false});
      }
      else {
        this.setState({active: false, inactive: false});
      }
    }
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleUpload(event) {
    event.persist();
    let uploadedFile = event.target.files[0];
    const fileData = new FormData();
    let reader = new FileReader();
    fileData.append("photo", uploadedFile);
    reader.onload = (e) => {
      this.setState({
        photo: e.target.result
      });
    }
    this.setState({
      photograph: fileData
    }, () => {
      reader.readAsDataURL(event.target.files[0]);
    });
  }

  componentDidUpdate(prevProps) {
    if(this.props.submit && !prevProps.submit && 
      this.state.name.trim() !== "" &&
      this.state.relationship !== "Choose..." &&
      this.state.dob !== "" &&
      this.state.profession.trim() !== "" &&
      this.state.activeOrInactive.trim() !== "" &&
      this.state.presentPostalAddress.trim() !== "" &&
      this.state.photograph !== null
    ) {
      this.props.submitFamilyMembersDetails({
        name: this.state.name,
        relationship: this.state.relationship,
        dob: this.state.dob,
        profession: this.state.profession,
        activeOrInactive: this.state.activeOrInactive,
        presentPostalAddress: this.state.presentPostalAddress,
        photograph: this.state.photograph
      });
    }
  }

  isActiveOrInactive = () => {
    let active = (<ImCheckmark color={"white"}/>);
    let inactive = (<ImCross color={"white"} />);
    let neutral = null;
    if(this.state.activeOrInactive === "Active") {
      return active;
    }
    else if(this.state.activeOrInactive === "Inactive") {
      return inactive;
    }
    else {
      return neutral;
    }
  }

  render() {
    const info = (
      <p>
        Please click on <b>ADD</b> to add multiple employment details.
        <br />
        Please click on <b>NEXT</b> to move to next step.
      </p>
    );
    let infoMessage = (!this.props.id) ? (
      <div className="rmf-heading">
        <h2>Add Dependent Family Members Details</h2>
        <br />
        <InfoParagraph info={info} />
        <br />
      </div>
    ):(
      <br />
    );
    let activeInactiveClassName = "remove-border-radius";
    if(this.state.active) {
      activeInactiveClassName = "family-member-working";
    }
    else if(this.state.inactive) {
      activeInactiveClassName = "family-member-not-working";
    }
    else {
      activeInactiveClassName = "remove-border-radius";
    }
    const relationships = this.props.relationships.map(relationship => <option key={relationship}>{relationship}</option>)
    return (
      <div className="card family-members-details-blue">
        {infoMessage}
        <div className="name-relationship-dob">
          <div className="family-member-name">
            <label><b>Name</b></label>
            <br />
            <FormControl 
              type="text"
              className="remove-border-radius"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Enter Full Name"
            />
          </div>
          <div className="relationship-dob">
            <div className="family-member-relationship">
              <label><b>Relationship</b></label>
              <br />
              <FormControl 
                as="select"
                className="remove-border-radius"
                name="relationship"
                value={this.state.relationship}
                onChange={this.handleChange}
              >
                <option>Choose...</option>
                {relationships}
              </FormControl>
            </div>
            <div className="family-member-dob">
              <label><b>DOB</b></label>
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
                    <FaCalendarAlt size={20}/>
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </div>
          </div>
        </div>
        <br />
        <div className="profession-active">
          <br />
          <div className="family-member-profession">
            <label><b>Profession</b></label>
            <br />
            <FormControl 
              type="text"
              className="remove-border-radius"
              name="profession"
              value={this.state.profession}
              onChange={this.handleChange}
              placeholder="Enter Profession"
            />
          </div>
          <div className="family-member-active">
            <label><b>Active/Inactive</b></label>
            <br />
            <InputGroup>
              <FormControl 
                type="text"
                className="remove-border-radius"
                name="activeOrInactive"
                value={this.state.activeOrInactive}
                onChange={this.handleChange}
              />
              <InputGroup.Append>
                <InputGroup.Text className={activeInactiveClassName}>
                  {this.isActiveOrInactive()}
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </div>
        <br />
        <div className="family-member-address">
          <br />
          <label><b>Present Postal Address</b></label>
          <br />
          <FormControl 
            type="text"
            className="remove-border-radius"
            name="presentPostalAddress"
            value={this.state.presentPostalAddress}
            onChange={this.handleChange}
            placeholder="Enter Present Postal Address"
          />
        </div>
        <br />
        <div className="family-member-photo">
          <br />
          <label><b>Photograph</b></label>
          <br />
          <div className="upload-photo">
            <input 
              type="file"
              name="photograph"
              id="photograph"
              onChange={this.handleUpload}
            />
            <img src={this.state.photo} alt="photograph" className="display"/>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default FamilyMembersDetailsForm;