import FellowShipExtenstion from './../views/fellowship/fellowshipExtension'
import FellowshipBillJrf from './../views/fellowship/fellowshipBillJrf'
import LeaveMaster from './../views/fellowship/LeaveMaster'
import FellowEdit from './../views/fellowship/fellowEdit'
import Dashboard from './../core/Home'
import DeoRoutes from "../views/add-employee/DeoRoutes";

const fellowshipRoutes = [
    
    { path: '/', exact: true, name: 'Login' },
    { path: '/home', name: 'Dashboard', component: Dashboard, exact: true },
    { path: '/fellowship/fellowshipExtension', name: 'FellowShipExtenstion', component: FellowShipExtenstion, exact: true },
    { path: '/fellowship/LeaveMaster', name: 'LeaveMaster', component: LeaveMaster, exact: true },
    { path: '/fellowship/fellow/:id', name: 'fellowEdit', component: FellowEdit, exact: true },
    { path: '/fellowship/fellowshipBill/jrf', name: 'FellowshipBillJrf', component: FellowshipBillJrf, exact: true },
    { path: '/addEmployee', name: 'AddEditEmployeeForm', component: DeoRoutes, exact: true },
    { path: '/addEmployee/employeeDetails', name: 'EmployeeDetailsForm', component: DeoRoutes, exact: true },
    { path: '/addEmployee/addPreviousEmploymentDetails', name: 'AddPreviousEmploymentDetailsForm', component: DeoRoutes, exact: true },
    { path: '/addEmployee/addPreviousStayDetails', name: 'AddStayDetailsForm', component: DeoRoutes, exact: true },
    { path: '/addEmployee/addEducationalQualifications', name: 'AddEducationalQualificationsForm', component: DeoRoutes, exact: true },
    { path: '/addEmployee/addDependentFamilyMembersDetails', name: 'AddDependentFamilyMembersDetailsForm', component: DeoRoutes, exact: true }
];
export default fellowshipRoutes