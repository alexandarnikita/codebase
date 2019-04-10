import React from 'react';
import '../css/App.css';
import '../css/index.css';
import '../css/custom.css';
import '../css/layout.css';
import { connect } from 'react-redux';
import { NavBar } from '../../navbar/components/navbar';
import 'react-tabs/style/react-tabs.css';
import Loading from '../../common/Loading';

import MUIDataTable from "mui-datatables";
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import {muiTableStyles} from '../../styles/muidatatableCss';
import CustomPagination from '../components/CustomPagination';

class AssignedAccountsCreatePage extends React.Component {
  constructor() {
    super()
    this.state = {
      loading:true,
      tabIndex: 0,
      enterdata: '',
      fixed:'',
      page: 0,
      rowsPerPage: 5,
      selectedCount: null,
      selectedRows: []
    };
  }

  componentDidMount() {
    // if(this.props.mmmfdata === undefined || this.props.mmmfdata === "")
      // this.props.dispatch(userActions.getMMMFData());
  }
  handleChangePage = (event, page) => {
    this.setState({ page });
  };
  selectedCount = (array) => {
    console.log("array",array)
    this.setState({selectedCount: array.length});
    // retrun array.length
  }
  render() {
      const { user, users } = this.props;
      var data,columns;
      var mmmfdata = [{
        "id": "1",
        "name": "columns",
        "label": "columns",
        "COLUMNS": [{
          "name": "Account",
          "options": {
            "filter": false,
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
        },]
      }, {
        "id": "2",
        "name": "DATA",
        "label": "DATA",
        "DATA": [
          ["Account 1", "USD"],
          ["Account 2", "Eur"],
          ["Account 3", "USD"],
          ["Account 4", "USD"],
          ["Account 5", "Eur"],
          ["Account 6", "Eur"],
          ["Account 7", "USD"],
          ["Account 8", "Eur"],
          ["Account 9", "USD"],
          ["Account 10", "USD"],
          ["Account 11", "Eur"],
          ["Account 12", "USD"],
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
        filterType: "checkbox",
        responsive: "scroll",
        fixedHeader: false,
        selectedRows: 0,
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
                    type="senario2"
                  />
                </TableCell>
              </TableRow>
            </TableFooter>
          );
        },
      };
      return (
        <div>
          <div className="clearfix"></div>
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

const connectedAssignedAssignedAccountsCreatePage = connect(mapStateToProps)(AssignedAccountsCreatePage);
export { connectedAssignedAssignedAccountsCreatePage as AssignedAccountsCreatePage };