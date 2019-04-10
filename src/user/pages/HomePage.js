import React from 'react';
import '../css/App.css'; 
import '../css/index.css';
import '../css/custom.css';
import '../css/layout.css';  
import { connect } from 'react-redux';
import { NavBar } from '../../navbar/components/navbar';
import { userActions } from '../actions/user.actions';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DashBoard from './DashBoard';
import MutualFund from './MutualFund';
import Loading from '../../common/Loading';

import MUIDataTable from "mui-datatables";
import Card from "./Card";
import ScrollDialog from "./ScrollDialog";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";  
import {muiTableStyles} from '../../styles/muidatatableCss';

class HomePage extends React.Component {

    constructor() {
        super()
        this.state = { loading:true,tabIndex: 0, enterdata: '',fixed:'' };
    }

    componentDidMount() {
      // if(this.props.mmmfdata === undefined || this.props.mmmfdata === "")
        // this.props.dispatch(userActions.getMMMFData()); 
    }
   
    render() { 
        const { user, users } = this.props;
        var data,columns;
        var mmmfdata = [{
          "id": "0",
          "label": "",
          "name": "Research Money Funds",
          "value": "",
          "flag": "",
          "image": "",
          "parentImage": "",
          "toppanelImage": "",
          "token": "",
          "href": "",
          "onclick": "",
          "checked": "",
          "fieldValue": "",
          "localeLang": "",
          "onChangeFlag": "",
          "subListName": "",
          "paginationFlag": "true",
          "loginId": "",
          "companyId": "",
          "action": "",
          "link": "",
          "type": "Title"
        }, {
          "id": "1",
          "label": "",
          "name": "data",
          "value": "",
          "flag": "",
          "image": "",
          "parentImage": "",
          "toppanelImage": "",
          "token": "",
          "href": "",
          "onclick": "",
          "checked": "",
          "fieldValue": "",
          "localeLang": "",
          "onChangeFlag": "",
          "subListName": "",
          "paginationFlag": "true",
          "loginId": "",
          "companyId": "",
          "action": "",
          "link": "",
          "type": "data"
        }, {
          "id": "2",
          "name": "columns",
          "label": "columns",
          "COLUMNS": [{
            "name": "Fund Name",
            "options": {
              "filter": false,
              "sort": true,
              "display": true,
              "hyperlink": "true"
            }
          }, {
            "name": "Fund Type",
            "options": {
              "filter": false,
              "sort": true,
              "display": true,
              "hyperlink": "false"
            }
          }, {
            "name": "CCY",
            "options": {
              "filter": true,
              "sort": true,
              "display": true,
              "hyperlink": "false"
            }
          }, {
            "name": "Factor",
            "options": {
              "filter": false,
              "sort": true,
              "display": true,
              "hyperlink": "false"
            }
          }, {
            "name": "Daily Yield(%)",
            "options": {
              "filter": false,
              "sort": true,
              "display": true,
              "hyperlink": "false"
            }
          }, {
            "name": "Rating S\u0026P",
            "options": {
              "filter": true,
              "sort": true,
              "display": true,
              "hyperlink": "false"
            }
          }, {
            "name": "Rating Moodys",
            "options": {
              "filter": true,
              "sort": true,
              "display": false,
              "hyperlink": "false"
            }
          }, {
            "name": "Rating Fitch",
            "options": {
              "filter": true,
              "sort": true,
              "display": true,
              "hyperlink": "false"
            }
          }, {
            "name": "Rating NAIC",
            "options": {
              "filter": true,
              "sort": true,
              "display": true,
              "hyperlink": "false"
            }
          }, {
            "name": "EOD Cut-Off Time",
            "options": {
              "filter": false,
              "sort": true,
              "display": true,
              "hyperlink": "false"
            }
          }, {
            "name": "AUM(MM)",
            "options": {
              "filter": false,
              "sort": true,
              "display": true,
              "hyperlink": "false"
            }
          }, {
            "name": "Fund Type Description",
            "options": {
              "filter": true,
              "sort": true,
              "display": false,
              "hyperlink": "false"
            }
          }, {
            "name": "Fund Family",
            "options": {
              "filter": true,
              "sort": true,
              "display": false,
              "hyperlink": "false"
            }
          }, {
            "name": "fundtypeid",
            "options": {
              "filter": false,
              "sort": true,
              "display": "excluded",
              "hyperlink": "false"
            }
          }, {
            "name": "Family Id",
            "options": {
              "filter": false,
              "sort": true,
              "display": "excluded",
              "hyperlink": "false"
            }
          }]
        }, {
          "id": "3",
          "name": "DATA",
          "label": "DATA",
          "DATA": [
            ["Fund 1", "Fund Type 1", "EUR", "0.0001408220", "15.23", "1234", "3456", "1234", "3466", "11:55 PM (GMT+0:0)", "2,324", "Gov\u0026#39;t", "LDN OFFSHORE", "101", "16364027"],
            ["Fund 2", "Fund Type 2", "GBP", "0.0001408220", "5.21", "1231", "1244", "1234", "2355", "11:55 PM (GMT+0:0)", "5,394", "Gov\u0026#39;t", "LDN OFFSHORE", "101", "16364027"],
            ["Fund 3", "Fund Type 3", "GBP", "0.0001408220", "5.14", "2341", "234", "123", "122", "11:55 PM (GMT+0:0)", "5,394", "Gov\u0026#39;t", "LDN OFFSHORE", "101", "16364027"],
            ["Fund 4", "Fund Type 4", "USD", "1.0000000000", "1.00", "1234", "3564", "1233", "4566", "11:55 PM (GMT+0:0)", "1", "Gov\u0026#39;t", "LDN OFFSHORE", "101", "16364027"],
            ["Fund 5", "Fund Type 5", "USD", "0.0001408220", "12.13", "2433", "3455", "2344", "23455", "11:55 PM (GMT+0:0)", "1", "Gov\u0026#39;t", "LDN OFFSHORE", "101", "16364027"]
          ]
        }];
        if(mmmfdata !== undefined){
         mmmfdata.map((item,index)=>{
            if(item.name === "columns")
              columns = item.COLUMNS;
            if(item.name === "DATA")
            data = item.DATA;

         })
        }
        
          const options = {
            filterType: "dropdown",
            selectableRows: false,
            responsive: "scroll",
            fixedHeader: false,
          };
        return (
            <div>
                <NavBar/>
                <div className="clearfix"></div>
                <div className="col-md-12 col-sm-12">
                    <div className="clearfix"></div>                
                    <div className="col-md-12 col-sm-12">
                    {
                      data !== undefined ?
                    <MuiThemeProvider theme={muiTableStyles.getMuiTheme()}>
                        <MUIDataTable
                        title={"Mutual Funds Rate"}
                        data={data}
                        columns={columns}
                        options={options}
                        />
                    </MuiThemeProvider>
                    :
                    <div className="col-md-12" style={{marginTop:'10%',marginBottom:'10%'}}><div className="clearfix"></div><Loading/></div>
                  }

                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users,mmmfdata } = state;
     return {
        users, 
        mmmfdata
    };
}
 
const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };