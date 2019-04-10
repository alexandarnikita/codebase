import React from 'react';
import '../css/App.css';
import '../css/index.css';
import '../css/custom.css';
import '../css/layout.css';
import { connect } from 'react-redux';
import { NavBar } from '../../navbar/components/navbar';
import 'react-tabs/style/react-tabs.css';
import Loading from '../../common/Loading';
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import {muiTableStyles} from '../../styles/muidatatableCss';
import CustomPagination from '../components/CustomPagination';
class AssignedAccountDetailPage extends React.Component {
  constructor() {
    super()
    this.state = {
      loading:true,
      tabIndex: 0,
      enterdata: '',
      fixed:'',
      page: 0,
      rowsPerPage: 5,
      selectedCount: 0
    };
  }

  componentDidMount() {

  }
  handleChangePage = (event, page) => {
    this.setState({ page });
  };

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
        "name": "Account Group",
        "options": {
          "filter": false,
          "sort": true,
          "display": true,
          "hyperlink": "true"
        }
      }, {
        "name": "Account",
        "options": {
          "filter": false,
          "sort": true,
          "display": true,
          "hyperlink": "false"
        }
      }, {
        "name": "Client Firm",
        "options": {
          "filter": true,
          "sort": true,
          "display": true,
          "hyperlink": "false"
        }
      }, {
          "name": "Currency",
          "options": {
            "filter": false,
            "sort": true,
            "display": true,
            "hyperlink": "false"
          }
        }, {
          "name": "Exclude",
          "options": {
            "filter": false,
            "sort": true,
            "display": true,
            "hyperlink": "false"
          }
        }, {
          "name": "Exclude from Interest",
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
          "name": "Comments",
          "options": {
            "filter": true,
            "sort": true,
            "display": true,
            "hyperlink": "false"
          }
        }, {
          "name": "Status",
          "options": {
            "filter": true,
            "sort": true,
            "display": true,
            "hyperlink": "false"
          }
        },]
      }, {
        "id": "3",
        "name": "DATA",
        "label": "DATA",
        "DATA": [
          ["Fund 1", "Fund Type 1", "EUR", "0.0001408220", "15.23", "1234", "3456", "1234", "3466"],
          ["Fund 2", "Fund Type 2", "GBP", "0.0001408220", "5.21", "1231", "1244", "1234", "2355"],
          ["Fund 3", "Fund Type 3", "GBP", "0.0001408220", "5.14", "2341", "234", "123", "122"],
          ["Fund 4", "Fund Type 4", "USD", "1.0000000000", "1.00", "1234", "3564", "1233", "4566"],
          ["Fund 5", "Fund Type 5", "USD", "0.0001408220", "12.13", "2433", "3455", "2344", "23455"],
          ["Fund 6", "Fund Type 6", "EUR", "0.0001408220", "15.23", "1234", "3456", "1234", "3466"],
          ["Fund 7", "Fund Type 7", "GBP", "0.0001408220", "5.21", "1231", "1244", "1234", "2355"],
          ["Fund 8", "Fund Type 8", "GBP", "0.0001408220", "5.14", "2341", "234", "123", "122"],
          ["Fund 9", "Fund Type 9", "USD", "1.0000000000", "1.00", "1234", "3564", "1233", "4566"],
          ["Fund 10", "Fund Type 10", "USD", "0.0001408220", "12.13", "2433", "3455", "2344", "23455"],
          ["Fund 11", "Fund Type 11", "EUR", "0.0001408220", "15.23", "1234", "3456", "1234", "3466"],
          ["Fund 12", "Fund Type 12", "GBP", "0.0001408220", "5.21", "1231", "1244", "1234", "2355"],
          ["Fund 13", "Fund Type 13", "GBP", "0.0001408220", "5.14", "2341", "234", "123", "122"],
          ["Fund 14", "Fund Type 14", "USD", "1.0000000000", "1.00", "1234", "3564", "1233", "4566"],
          ["Fund 15", "Fund Type 15", "USD", "0.0001408220", "12.13", "2433", "3455", "2344", "23455"],
          ["Fund 16", "Fund Type 16", "EUR", "0.0001408220", "15.23", "1234", "3456", "1234", "3466"],
          ["Fund 17", "Fund Type 17", "GBP", "0.0001408220", "5.21", "1231", "1244", "1234", "2355"],
          ["Fund 18", "Fund Type 18", "GBP", "0.0001408220", "5.14", "2341", "234", "123", "122"],
          ["Fund 19", "Fund Type 19", "USD", "1.0000000000", "1.00", "1234", "3564", "1233", "4566"],
          ["Fund 20", "Fund Type 20", "USD", "0.0001408220", "12.13", "2433", "3455", "2344", "23455"]
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
        // pagination: false,
        rowsPerPage: this.state.rowsPerPage,
        page: this.state.page,
        customFooter: ()=>{
          return(
            <TableFooter>
              <TableRow>
                <TableCell>

                   <CustomPagination
                    count={data.length}
                    rowsPerPage={this.state.rowsPerPage}
                    page={this.state.page}
                    onChangePage={this.handleChangePage}
                    selectedCount={this.state.selectedCount}
                    type="senario2"
                  />
                </TableCell>
              </TableRow>
            </TableFooter>
           );
        }
      };
      console.log(data.length)
      return (
        <div>
          <div className="col-md-12 col-sm-12">
            <div className="clearfix"></div>
            <div className="col-md-12 col-sm-12">
              {
                data !== undefined ?
                  <MuiThemeProvider theme={muiTableStyles.getMuiTheme()}>
                    <MUIDataTable
                      title={"Assigned Accounts"}
                      data={data}
                      columns={columns}
                      options={options}
                    />

                  </MuiThemeProvider>
                :
                <div className="col-md-12" style={{marginTop:'10%',marginBottom:'10%'}}>
                <div className="clearfix"></div>
                <Loading/>
              </div>
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

const connectedAssignedAccountDetailPage = connect(mapStateToProps)(AssignedAccountDetailPage);
export { connectedAssignedAccountDetailPage as AssignedAccountDetailPage };