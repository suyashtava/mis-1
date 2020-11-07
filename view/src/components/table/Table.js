import React from "react";
import { ApprovedTag, PendingTag, RejectedTag, MailedTag } from "../status-tag/StatusTag";
import "./Table.css";

class Table extends React.Component {
  getTag = (tagName) => {
    const tags = {
      "Approved": <ApprovedTag />,
      "Rejected": <RejectedTag />,
      "Mailed": <MailedTag />,
      "Pending": <PendingTag />
    }
    return tags[tagName];
  }

  displayData = () => {
    let data = [];
    for(var i = 0; i < this.props.data.length; i++) {
      data.push(
        <tr key={i}>
          <td>{this.props.data[i].employeeId}</td>
          <td>{this.props.data[i].employeeName}</td>
          <td>{this.getTag(this.props.data[i].profilePic)}</td>
          <td>{this.getTag(this.props.data[i].basicDetails)}</td>
          <td>{this.getTag(this.props.data[i].previousEmploymentDetails)}</td>
          <td>{this.getTag(this.props.data[i].dependentFamilyMemberDetails)}</td>
          <td>{this.getTag(this.props.data[i].educationalQualifications)}</td>
          <td>{this.getTag(this.props.data[i].last5YearStayDetails)}</td>
          <td>{this.getTag(this.props.data[i].sendMail)}</td>
        </tr>
      )
    }
    return data;
  }

  render() {
    return (
      <div className="table">
        <table className="admin-dashboard">
          <thead>
            <tr>
              <th rowSpan="2">Employee Id</th>
              <th rowSpan="2" className="dash-employee-name">Employee Name</th>
              <th colSpan="7" scope="colgroup">Status</th>
            </tr>
            <tr>
              <th scope="col">Profile Pic</th>
              <th scope="col">Basic Details</th>
              <th scope="col">Previous Employment Details</th>
              <th scope="col">Dependent Family Member Details</th>
              <th scope="col">Educational Qualifications</th>
              <th scope="col">Last 5 Year Stay Details</th>
              <th scope="col">send mail</th>
            </tr>
          </thead>
          <tbody>
            {this.displayData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;