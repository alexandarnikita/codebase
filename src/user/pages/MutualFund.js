import React from 'react';
import '../css/App.css'; 
import '../css/index.css';
import '../css/custom.css';
import '../css/layout.css';
 import ReactTable, { ReactTableDefaults } from "react-table";

 Object.assign(ReactTableDefaults, {
    defaultPageSize: 15,
     minRows: 1
  });
class MutualFund extends React.Component {
    render(){
        const columns11 = [{Header:"FundProduct",accessor: 'FundProduct'}, { Header:"CUSIP/ISIN", accessor: 'CUSIPISIN'},{Header:"AccountNumber", accessor: 'AccountNumber'}, {Header:"ShortName", accessor: 'ShortName'},{Header:"Balance", accessor: 'Balance'},{Header:"Currency", accessor: 'Currency'}];

        const data11 = [
            {FundProduct: "Fund 2", CUSIPISIN: "7OLHD7011", AccountNumber:"7011000011", ShortName:"UK MMMF Account",Balance:"1,000,000.00",Currency:"GBP"},
          {FundProduct: "Fund 2", CUSIPISIN: "7OLHD7011", AccountNumber:"7011000009", ShortName:"FMB MMMF Account",Balance:"1,000,000.00",Currency:"GBP"},
          {FundProduct:"Fund 3",  CUSIPISIN:"7OLHD7014", AccountNumber:"7014000007", ShortName:"UK USD Acc01",Balance:"0.00",Currency:"USD"},
          {FundProduct:"Fund 2", CUSIPISIN:"7OLHD7011", AccountNumber:"7011000010", ShortName:"UK MMMF Account",Balance: "1,000,000.00",Currency:"GBP"},
           {FundProduct:"Fund 1", CUSIPISIN:"7OLHD7012", AccountNumber:"7012000008", ShortName:"UK EUR Acc01", Balance:"1,000,000.00",Currency:"EUR"},
           {FundProduct:"Fund 2", CUSIPISIN:"7OLHD7011", AccountNumber: "7011000008", ShortName:"FMB ACCOUNT", Balance:"0.00",Currency:"EUR"},
        ];
        return(
            <div className="panel panel-primary" style={{margin:'0'}}>
                <div className="panel-heading">
                    <h4 className="panel-title">Mutual Fund</h4>
                </div>
                <div className="panel-body">
                <div className="col-md-12 col-sm-12 head-cls backwhite">
                            <ReactTable showPagination={false} resizable={false} noDataText="No Data Found" data={data11} columns={columns11}  className="table table-striped" />
                        </div>
                    <div className="col-md-12 col-sm-12 head-cls backwhite">
                        <div className="col-md-12 col-sm-12" style={{padding: '0'}}>
                            <div className="col-md-6 col-sm-6 col-xs-6" style={{marginBottom:'10px', paddingLeft:'0px'}}>
                                <img src="src/images/graph_images/image7.png" width="100%" height="100%" />
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6" style={{marginBottom:'10px', paddingRight:'0px'}}>
                                <img src="src/images/graph_images/image8.png" width="100%" height="100%" />
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-md-6 col-sm-6 col-xs-6" style={{marginBottom:'10px', paddingLeft:'0px'}}>
                                <img src="src/images/graph_images/image9.png" width="100%" height="100%" />
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6" style={{marginBottom:'10px', paddingRight:'0px'}}>
                                <img src="src/images/graph_images/image10.png" width="100%" height="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MutualFund;