import { combineReducers } from 'redux';

import { reducer as reduxFormReducer } from 'redux-form';
import { authentication } from '../user/reducers/authentication.reducer';
import { registration } from '../user/reducers/registration.reducer';
import { users,mmmfdata } from '../user/reducers/users.reducer';
import { navlinks } from '../navbar/reducers/navbar.reducer';
import { alert } from '../common/reducers/alert.reducer';
import matrix from '../ratematrix/reducers/matrix.reducer';
import groupproduct from '../groupproduct/reducers/groupproduct.reducer';
import funddetail from '../funddetail/reducers/funddetail.reducer';
import fundcompany from '../fundcompany/reducers/fundcompany.reducer';
import productclass from '../productclass/reducers/productclass.reducer';
import fundfamily from '../fundfamily/reducers/fundfamily.reducer'

// import { reportdata,reportdatatable,reportcdata } from '../reports/reducers/report.reducer';
// import { investdata,investdatatable } from '../invest/reducers/invest.reducer';
// import { pooldata,pooldatatable } from '../notionalpool/reducers/pool.reducer';
// import { tradedata,tradereviewdata,tradeconfirmdata,fixedtradedata,fixedtradereviewdata,fixedtradeconfirmdata,tenorpopupData,futuretradeconfirmdata,futurefixedtradeconfirmdata,rolloverfixedtradereviewdata,rolloverfixedtradeconfirmdata } from '../tradeentry/reducers/trade.reducer';
// import { treasuryreportdata,treasuryreportdatatable,treasuryeditdata,treasurysavedata,treasurydeletedata,rfqreportdata } from '../treasurymgmt/reducers/treasury.reducer';
// import { inputprofiledata,inputprofiledatatable } from '../inputprofile/reducers/inputprofile.reducer';
// import { accountclonedata,accountclonedatatable } from '../accountclone/reducers/accountclone.reducer';
// import { sweepsdata,sweepsdatatable,sweepsmanualdata, sweepsmanualdatatable, sweepsloansdata, sweepsloansdatatable,sweepsnewrules,sweepspopupdata,sweepstunreportdata,sweepstunreporttabledata, sweepfailedreviewtabledata,sweepfailedreviewdata,sweepfailedpreviewdata,sweepfailedpreviewtabledata} from '../sweeps/reducers/sweeps.reducer';
// import { cnmfaccountdata,adminmfrevprosdata,userdata,userlinkspermdata,userlinksviewchngsdata,userapprovaldata,userapprovalviewchngsdata,associateduserdata,tempuserdata,alerttempdatadet,makercheckerdata,mmfeditAcctDet,viewchangehistory,mmfcreateAcctDet,mmfreviewPropDet,assignAlertRecipientsData,assignAlertRecipientsTableData } from '../administration/reducers/administration.reducer';

const rootReducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  authentication,
  registration,
  users,
  navlinks,
  alert,
  matrix,
  groupproduct,
  funddetail,
  fundcompany,
  productclass,
  fundfamily,
  // reportdata,
  // reportdatatable,
  // investdata,
  // investdatatable,
  // tradedata,
  // tradereviewdata,
  // tradeconfirmdata,
  // pooldata,
  // pooldatatable,
  // fixedtradedata,
  // fixedtradereviewdata,
  // fixedtradeconfirmdata,
  // treasuryreportdata,
  // tenorpopupData,
  // treasuryreportdatatable,
  // inputprofiledata,
  // inputprofiledatatable,
  // accountclonedata,
  // accountclonedatatable,
  // sweepspopupdata,
  // sweepsdata,
  // sweepsdatatable,
  // sweepsmanualdata,
  // sweepsmanualdatatable,
  // sweepsloansdata,
  // sweepsloansdatatable,
  // sweepsnewrules,
  // sweepstunreportdata,
  // sweepstunreporttabledata,
  // sweepfailedreviewtabledata,
  // sweepfailedreviewdata,
  // sweepfailedpreviewdata,
  // sweepfailedpreviewtabledata,
  // userdata,
  // userlinkspermdata,
  // userlinksviewchngsdata,
  // userapprovalviewchngsdata,
  // userapprovaldata,
  // treasuryeditdata,
  // treasurysavedata,
  // treasurydeletedata,
  // rfqreportdata,
  // cnmfaccountdata,
  // makercheckerdata,
  // mmfeditAcctDet,
  // mmfcreateAcctDet,
  // mmfreviewPropDet,
  // adminmfrevprosdata,
  // futuretradeconfirmdata,
  // futurefixedtradeconfirmdata,
  // rolloverfixedtradereviewdata,
  // associateduserdata,
  // alerttempdatadet,
  // rolloverfixedtradeconfirmdata,
  // tempuserdata,
  // mmmfdata,
  // reportcdata,
  // viewchangehistory,
  // assignAlertRecipientsData,
  // assignAlertRecipientsTableData
});

export default rootReducer;