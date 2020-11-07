import React from 'react';
import  { BrowserRouter, Switch, Route } from "react-router-dom";
import EmployeeDetailsForm from "./add-employee-basic-details/EmployeeDetailsForm";
import AddEditEmployeeForm from "./AddEditEmployeeForm";
import AddPreviousEmploymentDetailsForm from "./add-previous-employment-details/AddPreviousEmploymentDetailsForm";
import AddStayDetailsForm from "./add-last-5-year-stay-details/AddStayDetailsForm";
import AddEducationalQualificationsForm from "./add-educational-qualifications/AddEducationalQualificationsForm";
import AddDependentFamilyMembersDetailsForm from "./add-dependent-family-members-details/AddDependentFamilyMembersDetailsForm";
import Session from "react-session-api";


class DeoRoutes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeId: "",
      salutations: ["Dr"],
      maritalStatuses: ["Unmarried"],
      categories: ["General"],
      employeeTypes: ["Faculty"],
      designations: ["Professor"],
      departments: ["CSE"],
      naturesOfEmployment: ["Permanent"],
      payBands: ["Test"],
      gradePays: [5000],
      states: ["Maharashtra"],
      relationships: ["Brother"],
      examinations: ["Jee"]
    };
    this.getDetails = this.getDetails.bind(this);
  }

  getDetails = (details) => {
    this.setState({
      employeeId: details.employeeId/*,
      salutations: details.salutations,
      maritalStatuses: details.maritalStatuses,
      categories: details.categories,
      employeeTypes: details.employeeTypes,
      designations: details.designations,
      departments: details.departments,
      naturesOfEmployment: details.naturesOfEmployment,
      payBands: details.payBands,
      gradePays: details.gradePays,
      states: details.states,
      relationships: details.relationships,
      examinations: details.examinations*/
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route 
            path="/addEmployee" exact
            render={(props) => <AddEditEmployeeForm {...props} getDetails={this.getDetails} />}
          />
          <Route 
            path="/addEmployee/employeeDetails" 
            render={(props) => <EmployeeDetailsForm {...props} 
              employeeId={this.state.employeeId}
              salutations={this.state.salutations}
              maritalStatuses={this.state.maritalStatuses}
              categories={this.state.categories}
              employeeTypes={this.state.employeeTypes}
              designations={this.state.designations}
              departments={this.state.departments}
              naturesOfEmployment={this.state.naturesOfEmployment}
              payBands={this.state.payBands}
              gradePays={this.state.gradePays}
              states={this.state.states}
            />}
          />
          <Route 
            path="/addEmployee/addPreviousEmploymentDetails"
            render={(props) => <AddPreviousEmploymentDetailsForm {...props} 
              employeeId={this.state.employeeId}
            />}
          />
          <Route 
            path="/addEmployee/addPreviousStayDetails"
            render={(props) => <AddStayDetailsForm {...props} 
              employeeId={this.state.employeeId}
            />}
          />
          <Route 
            path="/addEmployee/addEducationalQualifications"
            render={(props) => <AddEducationalQualificationsForm {...props} 
              employeeId={this.state.employeeId}
              examinations={this.state.examinations}
            />}
          />
          <Route 
            path="/addEmployee/addDependentFamilyMembersDetails"
            render={(props) => <AddDependentFamilyMembersDetailsForm {...props} 
              employeeId={this.state.employeeId}
              relationships={this.state.relationships}
            />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default DeoRoutes;