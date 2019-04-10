import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { productclassStyle } from '../style/productclassStyle';
import Input from '@material-ui/core/Input';
import MUIDataTable from "mui-datatables";

import { getProductclass } from '../actions/productclass.actions';

class ProductClassPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      trading: 'London Trading Desk',
      domicile:'OFFSHORE EMEA',
      tradingDeskValue: [],
      tableData: [],
      domicileValue: [],
    };
  }

  componentWillMount() {
    this.props.getProductclass();
  }
  componentDidUpdate(preProps) {
    let {productclass}  = this.props;
    if(productclass !== preProps.productclass) {
      var productclassArray = productclass.productclass;
      console.log("data------>", productclassArray)
      productclassArray.map(items =>{
        if(items.name === "company"){
          this.setState({tradingDeskValue: items.values});
        }
        if(items.type === "Data"){
          this.setState({tableData: items.values});
        }
      });
    }
  }
  handleChangeTrading = event => {
    this.setState({ trading: event.target.value });
  };
  handleChangeDomicile = event => {
    this.setState({ domicile: event.target.value });
  };

  render() {
    const { classes } = this.props;
    var columns = [
    {
      name: 'Check',
      options: {
        filter: false,
        sort: true,
        display: true,
        hyperlink: false,
        customHeadRender: ()=>{
          return(<th className={classes.tableHeader}><Checkbox/></th>)
        },
        customBodyRender: (value, tableMeta, updateValue)=>{
          return(
            <div className={classes.tableRowFlex}>
              <Checkbox className={classes.tableCellCheckbox}/> {value}
            </div>
          )
        }
      }
    }, {
      name: 'Product Class',
      options: {
        filter: false,
        sort: true,
        display: true,
        hyperlink: false,
        customBodyRender: (value, tableMeta, updateValue)=>{
          return(
            <div>
               <input className={classes.tableInputRate} defaultValue={value}/>
            </div>
          );
        }
      }
    },{
      name: 'Description',
      options: {
        filter: false,
        sort: true,
        display: true,
        hyperlink: false,
        customBodyRender: (value, tableMeta, updateValue)=>{
          return(
            <div>
               <input className={classes.tableInputRate} defaultValue={value}/>
            </div>
          );
        }
      }
    }, {
      name: 'Domicile Type',
      options: {
        filter: false,
        sort: true,
        display: true,
        hyperlink: false,
        customBodyRender: (value, tableMeta, updateValue)=>{
          return(
            <div>
               <Select
                  MenuProps={{
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left"
                    },
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "left"
                    },
                    getContentAnchorEl: null
                  }}
                  className={classes.select}
                  value={this.state.domicile}
                  onChange={this.handleChangeDomicile}
                >
                  { this.state.tableData.map((value, index) => {
                      return(<MenuItem className={classes.menustyle} key={index} value={index}>{value.DMID}</MenuItem>)
                    })
                  }
                </Select>
            </div>
          );
        }
      }
    },
  ];

    var options = {
      filterType: 'dropdown',
      responsive: "scroll",
      fixedHeader: false,
      selectableRows: false,
    };

    var data = [];
    if(this.state.tableData !== undefined){
      this.state.tableData.map( items => {
        data.push(["",items.REFID, items.DESCR, items.DMID,
        ]);
      });
    }
    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={productclassStyle.getMuiTheme()}>
          <AppBar position="static" className={classes.AppBar}>
            <Toolbar className={classes.AppToolbar}>
              <Typography className={classes.NavTextLeft}>
                Product Class
              </Typography>
            </Toolbar>
          </AppBar>
          <div className={classes.MainContent}>
            <div className={classes.Filter}>
              <Grid container spacing={16}>
                <Grid item md={4}>
                  <Grid container spacing={8}  className={classes.displayFlex}>
                    <Grid item md={4}>
                      <Typography className={classes.Text}>Trading Desk:</Typography>
                    </Grid>
                    <Grid item md={8}>
                      <Select
                        MenuProps={{
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left"
                          },
                          transformOrigin: {
                            vertical: "top",
                            horizontal: "left"
                          },
                          getContentAnchorEl: null
                        }}
                        className={classes.select}
                        value={this.state.trading}
                        onChange={this.handleChangeTrading}
                      >
                        { this.state.tradingDeskValue.map((value, index) => {
                            return(<MenuItem className={classes.menustyle} key={index} value={index}>{value.name}</MenuItem>)
                          })
                        }
                      </Select>                      
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <div className={classes.rateTable}>
                <MuiThemeProvider theme={productclassStyle.getMuiTable()}>
                  <MUIDataTable
                    data={data}
                    columns={columns}
                    options={options}
                  />
                </MuiThemeProvider>
              </div>
            <div className={classes.footer}>
              <Button className={classes.btnFill}>New</Button>
              <Button className={classes.btnFill}>Save</Button>
              <Button className={classes.btnFill}>Delete</Button>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

ProductClassPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: '#e9f0f7'
  },
  AppBar: {
    backgroundColor: '#4e8fcc',
    boxShadow: 'none',
    border: '1px solid #cccccc',
  },
  NavTextLeft: {
    fontSize: '17px',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '1px 1px 1px black',
    flexGrow: 1,
  },
  MainContent: {
    padding: '5px 15px'
  },
  Filter: {
    padding: '10px 5px',
    fontSize: '16px',
  },

  input: {
    width: '100%',
    borderRadius: 6,
    backgroundColor: 'white',
    border: '1px solid #ced4da',
    height: '30px',
    padding: '9px',
    fontSize: 14,
  },
  inputFocused: {
    borderColor: '#80bdff',
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
  },
  displayFlex:{
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px'
  },

  Text: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#0072b6'
  },
  Checkbox: {
    margin: '0px',
    padding: '0 2px'
  },
  select: {
    width: '60%',
    borderRadius: 6,
    background: 'linear-gradient(to bottom, #f2f2f2 0%,#ffffff 100%)',
    border: '1px solid #ced4da',
    height: '30px',
    padding: '9px',
    fontSize: 14,
    '&:hover':{
      background: 'linear-gradient(to bottom, #f5f7fa 0%,#e2e9f0 100%)',
    },
    '&:active': {
      background: 'linear-gradient(to bottom, #99cbe1 0%,#eff6fa 100%)',
    }
  },
  btnFill: {
    color: '#fff',
    backgroundColor: '#0074A6',
    padding: '6px 12px',
    fontSize: '14px',
    marginLeft: '10px',
    borderRadius: '6px',
    '&:hover':{
      backgroundColor: '#00618C',
    },
    '&:active':{
      backgroundColor: '#00395D',
    }
  },
  tableToolbar: {
    padding: '12px 5px',
  },
  labelText: {
    fontSize: '14px',
    fontWeight: 'bold',
  },
  inputRate: {
    width: '20%',
    borderRadius: 6,
    backgroundColor: 'white',
    border: '1px solid #ced4da',
    height: '30px',
    padding: '9px',
    fontSize: 14,
    '&::placeholder':{
      color: '#abacad'
    }
  },
  menustyle: {
    background: 'white',
    '&:hover':  {
      background: '#e5f2f8',
      border: '1px solid #d5d5d6',
    },
    '&:active':  {
      background: '#bfdfed',
    },
    opacity: 1,
    boxShadow: '0px 1px 2px rgb(88,89,91,0.15)',
    maxHeight: 320,
    height: 30,
  },
  rateTable: {
    width: '40%',
    padding: '0px 5px'
  },
  tableHeader: {
    
    color: '#00395D',
    height: '48px !important',
    fontSize: '12px',
    background: 'linear-gradient(to bottom, #E4EAED 0%,#F7F9FA 100%)',
    textAlign: 'center',
    border: '1px solid #d5d5d6',
    whiteSpace: 'nowrap',
    borderRight: '1px solid #d5d5d6',
    verticalAlign: 'middle',
    fontWeight: 'normal !important'
  },
  tableInputRate:{
    // width: '50%',
    borderRadius: 6,
    backgroundColor: 'white',
    border: '1px solid #ced4da',
    height: '30px',
    padding: '9px',
    fontSize: 14,
    '&:focus':{
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
    '&::placeholder':{
      color: '#abacad'
    }
  },
  tableInputMaxMin:{
    width: '30%',
    borderRadius: 6,
    backgroundColor: 'white',
    border: '1px solid #ced4da',
    height: '30px',
    padding: '9px',
    fontSize: 14,
    '&:focus':{
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
    '&::placeholder':{
      color: '#abacad'
    }

  },
  tableRowFlex: {
    display: 'flex',
    alignItems: 'center',
  },
  tableCellCheckbox: {
    paddingRight: "15px"
  },
  footer: {
    width:'40%',
    marginTop: '20px',
    textAlign: 'center',
    marginBottom: '20px'
  }
};

const mapStateToProps = state => ({productclass:state.productclass});
const mapDispatchToProps = (dispatch) => ({
  getProductclass: () => dispatch(getProductclass())
});
const connectedProductClassPage = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ProductClassPage));
export { connectedProductClassPage as ProductClassPage };
