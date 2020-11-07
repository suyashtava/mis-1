import React from "react";
import { FormControl } from "react-bootstrap";
import InfoParagraph from "../../../../components/info-paragraph/InfoParagraph";
import "./EducationalQualificationsForm.css";

class EducationalQualificationsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      examination: "Choose...",
      college: "",
      course: "",
      year: "",
      grade: "",
      division: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.submit && !prevProps.submit && 
      this.state.examination !== "Choose..." &&
      this.state.college.trim() !== "" &&
      this.state.course.trim() !== "" &&
      this.state.year.trim() !== "" &&
      this.state.grade.trim() !== "" &&
      this.state.division.trim() !== ""
    ) {
      this.props.submitEducationalQualifications(this.state);
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
        <h2>Add Educational Qualifications</h2>
        <br />
        <InfoParagraph info={info} />
        <br />
      </div>
    ):(
      <br />
    );
    const examinations = this.props.examinations.map(exam => <option key={exam}>{exam}</option>);
    return (
      <div className="card educational-qualifications-blue">
        {infoMessage}
        <div>
          <div className="exam-college">
            <div className="exam">
              <label><b>Examination</b></label>
              <br />
              <FormControl 
                as="select"
                className="remove-border-radius"
                name="examination"
                value={this.state.examination}
                onChange={this.handleChange}
              >
                <option>Choose...</option>
                {examinations}
              </FormControl>
            </div>
            <div className="college">
              <label><b>College/University/Institute</b></label>
              <br />
              <FormControl 
                type="text"
                className="remove-border-radius"
                name="college"
                value={this.state.college}
                onChange={this.handleChange}
                placeholder="Enter College / University / Institute Attended"
              />
            </div>
          </div>
          <br />
          <div className="course-year-grade-division">
            <div className="course-year">
              <div className="course">
                <label><b>Course(Specialization)</b></label>
                <br />
                <FormControl 
                  type="text"
                  className="remove-border-radius"
                  name="course"
                  value={this.state.course}
                  onChange={this.handleChange}
                  placeholder="Enter Course with Specialization"
                />
              </div>
              <div className="year">
                <label><b>Year</b></label>
                <br />
                <FormControl 
                  type="text"
                  className="remove-border-radius"
                  name="year"
                  value={this.state.year}
                  onChange={this.handleChange}
                  placeholder="Enter Year"
                />
              </div>
            </div>
            <div className="grade-division">
              <div className="grade">
                <label><b>Percentage/Grade</b></label>
                <br />
                <FormControl 
                  type="text"
                  className="remove-border-radius"
                  name="grade"
                  value={this.state.grade}
                  onChange={this.handleChange}
                  placeholder="Enter Percentage/Grade"
                />
              </div>
              <div className="division">
                <label><b>Class/Division</b></label>
                <br />
                <FormControl 
                  type="text"
                  className="remove-border-radius"
                  name="division"
                  value={this.state.division}
                  onChange={this.handleChange}
                  placeholder="Enter Class/Division"
                />
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default EducationalQualificationsForm;