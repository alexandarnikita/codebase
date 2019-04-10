import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Switch } from 'react-router';
import { history } from '../_helpers';
import { alertActions } from '../rootindex/actions';
import { PrivateRoute } from '../rootindex/components';
import { HomePage } from '../rootindex/pages';
import { LoginPage } from '../rootindex/pages';
import { RegisterPage } from '../rootindex/pages';
import { AssignedAccountDetailPage } from '../rootindex/pages';
import { AssignedAccountsCreatePage } from '../rootindex/pages';
import  {RateMatrixPage}  from '../rootindex/pages'
import  {GroupProductPage}  from '../rootindex/pages'
import  {FundDetailPage}  from '../rootindex/pages'
import  {FundCompanyPage}  from '../rootindex/pages'
import  {ProductClassPage}  from '../rootindex/pages'
import  {FundFamilyPage}  from '../rootindex/pages'
import  {ElementPage}  from '../rootindex/pages'
// import { AccountGrp } from '../notionalpool/components/AccountGrp';
// import { ReportTemplate } from '../reports/components/ReportTemplate';
// import { InvestTemplate } from '../invest/components/InvestTemplate';
// import { ReportMultiTemplates } from '../reports/components/ReportMultiTemplate';
// import { TradeEntry } from '../tradeentry/components/TradeEntry';
// import { TreasuryTemplate } from '../treasurymgmt/components/TreasuryTemplate';
// import { TreasuryEditTemplate } from '../treasurymgmt/components/TreasuryEditTemplate';
// import { RequestForQuote } from '../treasurymgmt/components/RequestForQuote';
// import { RFQReport } from '../treasurymgmt/components/RFQReport';
// import { TreasuryNewTemplate } from '../treasurymgmt/components/TreasuryNewTemplate';
// import { InputTemplate } from '../inputprofile/components/InputTemplate';
// import { UserProfile } from '../treasurymgmt/components/UserProfile';
// import { AccountTemplate } from '../accountclone/components/AccountTemplate';
// import { LoanSweep } from '../sweeps/components/LoanSweep';
// import { FailedTradeReview } from '../sweeps/components/FailedTradeReview';
// import { FailedTradePreview } from '../sweeps/components/FailedTradePreview';
// import { ManualSweep } from '../sweeps/components/ManualSweep';
// import { SweepRunReport } from '../sweeps/components/SweepRunReport';
// import { SweepTodayOnlineReport } from '../sweeps/components/SweepTodayOnlineReport';
// import { SweepSetup } from '../sweeps/components/SweepSetup';
// import { AdministrationTemplate } from '../administration/components/AdminstrationTemplate';
// import { AdministrationIBATemplate } from '../administration/components/AdminstrationIBATemplate';
// import { MaintainSweep } from '../sweeps/components/MaintainSweep';
// import { Adminmfrevpros } from '../administration/components/Adminmfrevpros';
// import {EmailAlertTemplate} from '../administration/components/EmailAlertTemplate';
// import UserPermissionsManagement from '../administration/components/userManagement/UserPermissionsManagement';
// import UserGroupsManagement from '../administration/components/userManagement/UserGroupsManagement';
// import UserRolesManagement from '../administration/components/userManagement/UserRolesManagement';
// import { AdminTempCreate } from '../administration/components/AdminTempCreate';
// import { AlertMgmtTemplate } from '../administration/components/AlertMgmtTemplate';
// import { NewAlertTemplate } from '../administration/components/NewAlertTemplate';
// import  { TemplateUserDetails }  from '../administration/components/TemplateUserDetails';
// import  { EditAlertTemplate }  from '../administration/components/EditAlertTemplate';
// import  { EditAcctDet }  from '../administration/components/EditAcctDet';
// import  { EnterAcctDet }  from '../administration/components/EnterAcctDet';
// import  { SavedAccountStatus }  from '../administration/components/SavedAccountStatus';
// import  { ReviewProspectus }  from '../administration/components/ReviewProspectus';
// import  { SelectIBA }  from '../administration/components/SelectIBA';
// import  { ReportCompTemplate }  from '../reports/components/ReportCompTemplate';
// import  { ReportCheckboxTemplate }  from '../reports/components/ReportCheckboxTemplate';
// import { UploadTrade } from '../tradeentry/components/UploadTrade';
import Footer from '../user/pages/Footer';

class App extends React.Component {
  constructor(props) {
      super(props);

      const { dispatch } = this.props;
      history.listen((location, action) => {
          // clear alert on location change
          dispatch(alertActions.clear());
      });
  }

  render() {
    // alert("App")
    const { alert } = this.props;
    return (

      <div className="container-fluid">
        <div style={{minHeight:"550px"}}>
          {alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          }
          <Router history={history}>
            <Switch>
              <PrivateRoute exact path="/" component={ElementPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              {/* <Route path="/DEALENT" component={TradeEntry} />
              <Route path="/pool/*" component={AccountGrp} />
              <Route path="/report/MSWEEP" component={ManualSweep} />
              <Route path="/report/LSWEEP" component={LoanSweep} />
              <Route path="/report/CRLPRORE" component={FailedTradeReview} />
              <Route path="/report/CFLTRDPEW" component={FailedTradePreview} />
              <Route path="/report/MNEWRULE" component={SweepSetup} />
              <Route path="/report/CMNTRULE" component={MaintainSweep} />
              <Route path="/report/CNEWRULE" component={SweepSetup} />
              <Route path="/report/LNEWRULE" component={SweepSetup} />
              <Route path="/report/CSWRUNRT" component={SweepRunReport} />
              <Route path="/report/CSWPTORP" component={SweepTodayOnlineReport} />
              <Route path="/inputprofile/*" component={InputTemplate} />
              <Route path="/userprofile/*" component={UserProfile} />
              <Route path="/accountclone/*" component={AccountTemplate} />
              <Route path="/report/*" component={ReportTemplate} />
              <Route path="/reportC/*" component={ReportCompTemplate} />
              <Route path="/reportCheck/*" component={ReportCheckboxTemplate} />
              <Route path="/invest/CLINVPOL" component={InvestTemplate} />
              <Route path="/invest/MMFRECRE" component={InvestTemplate} />
              <Route path="/reportM/*" component={ReportMultiTemplates} />
              <Route path="/admincreate/REVIEWPROSPECT" component={Adminmfrevpros} />
              <Route path="/administration/EAUACL" component={EmailAlertTemplate} />
              <Route path="/treasury/*" component={TreasuryTemplate} /> */}
              {/* <Route path="/treasuryedit/*" render={ ()=> <TreasuryEditTemplate actionFlag="edit" policyId="1029" entiySel="19687983" /> } /> */}
              {/* <Route path="/treasuryedit/*" component={TreasuryEditTemplate} />
              <Route path="/requestforquote/*" component={RequestForQuote} />
              <Route path="/RFQReport/" component={RFQReport} />
              <Route path="/treasurynew/*" component={TreasuryNewTemplate} />
              <Route path="/administration/MMFEDITACCT"  component={EditAcctDet} />
              <Route path="/administration/MMFCREATEACCT"  component={EnterAcctDet} />
              <Route path="/administration/MMFACCTSUCCESS"  component={SavedAccountStatus} />
              <Route path="/administration/REVIEWPROS"  component={ReviewProspectus} />
              <Route path="/administration/SELECTIBA"  component={SelectIBA} />
              <Route path="/administration/USERPROP" component={UserPermissionsManagement} />
              <Route path="/administration/ADDREMOV" component={UserGroupsManagement} />
              <Route path="/administration/MCMAINT" component={UserRolesManagement} />
              <Route path="/administration/CRALKUP" component={AdministrationTemplate} />
              <Route path="/administration/LOOKUP" component={AdministrationTemplate} />
              <Route path="/administrationcreate/NEWMMDAACCT" component={AdministrationIBATemplate} />
              <Route path="/administration/CLALERT" component={AlertMgmtTemplate} />
              <Route path="/administrationnew/CLEMAIL" component={NewAlertTemplate} />
              <Route path="/administrationedit/CLEMAIL" component={EditAlertTemplate} />
              <Route path="/admincreate/*" component={AdminTempCreate} />
              <Route path="/administration/EDITEMAILTEMP" component={TemplateUserDetails} />
              <Route path="/uploadtrade" component={UploadTrade} />                         */}
            </Switch>
          </Router>
        </div>
        {/* <Footer/> */}
      </div>

    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };