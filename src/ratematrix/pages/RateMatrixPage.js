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
import Autorenew from '@material-ui/icons/Autorenew';
import Print from '@material-ui/icons/Print';
import Excel from '../../images/icon_excel.png';
import Pdf from '../../images/icon_pdf.png';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { ratematrixStyle } from '../style/ratematrixStyle';
import Input from '@material-ui/core/Input';
import MUIDataTable from "mui-datatables";
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
import { getMatrix } from '../actions/ratematrix.actions';

class RateMatrixPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      trading: 'EUR Reforms Trading Desk',
      category: 'Time Deposites',
      currency: 'USD',
      product: 'EU Reform Time Deposites',
      trans: 'Invest',
      start: 'Today',

      searchProductsValue: [],
      tradingDeskValue: [],
      lastModifiedBy: '',
      lastModifiedTime: '',
      productCatoryValue: [],
      productValue: [],
      currencyValue: [],
      transTypeValue: [],
      tableData: []
    };
  }

  componentWillMount() {
    this.props.getMatrix();
  }
  componentDidUpdate(preProps) {
    let {matrix}  = this.props;
    if(matrix !== preProps.matrix) {
      var matrixArray = matrix.matrix;
      matrixArray.map(items =>{
        if(items.name === "massautoClientComp"){
          this.setState({searchProductsValue: items.values});
        }
        if(items.name === "company"){
          this.setState({tradingDeskValue: items.values});
        }
        if(items.name === "clientRateLastModifiedBy"){
          this.setState({lastModifiedBy: items.value});
        }
        if(items.name === "clientRateLastModifiedDate"){
          this.setState({lastModifiedTime: items.value});
        }
        if(items.name === "product"){
          this.setState({productCatoryValue: items.values});
        }
        if(items.label === "Product"){
          this.setState({productValue: items.values});
        }
        if(items.label === "Currency"){
          this.setState({currencyValue: items.values});
        }
        if(items.name === "transType"){
          this.setState({transTypeValue: items.values});
        }
        if(items.name === "rateMatrixDispVec"){
          this.setState({tableData: items.values});
        }
      });
    }
  }
  handleChangeTrading = event => {
    this.setState({ trading: event.target.value });
  };
  handleChangeCategory = event => {
    this.setState({ category: event.target.value });
  };
  handleChangeCurrency = event => {
    this.setState({ currency: event.target.value });
  };
  handleChangeProduct = event => {
    this.setState({ product: event.target.value });
  };
  handleChangeTrans = event => {
    this.setState({ trans: event.target.value });
  };
  handleChangeStart = event => {
    this.setState({ start: event.target.value });
  };

  // printPDFDocument = () => {
  //   const input = document.getElementById('divToPrint');
  //   html2canvas(input)
  //     .then((canvas) => {
  //       const pdf = new jsPDF("p","mm","a0");
  //       var width = pdf.internal.pageSize.getWidth();
  //       var height = pdf.internal.pageSize.getHeight();
  //       const imgData = canvas.toDataURL('image/png');
  //       pdf.addImage(imgData,'JPEG',2,2, width, height*0.2);
  //       pdf.save("download.pdf");
  //     })
  //   ;
  // }
  render() {
    const { classes } = this.props;
    var columns = [{
      name: 'Maturity Date',
      options: {
        filter: false,
        sort: true,
        display: true,
        hyperlink: false,
      }
    },
    {
      name: 'Tendor',
      options: {
        filter: false,
        sort: true,
        display: true,
        hyperlink: false,
        customHeadRender: ()=>{
          return(<th className={classes.tableHeader}><Checkbox/>Tendor</th>)
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
      name: 'Raw Rate',
      options: {
        filter: false,
        sort: true,
        display: true,
        hyperlink: false,
        customBodyRender: (value, tableMeta, updateValue)=>{
          return(
            <div>
               <input className={classes.tableInputRate} defaultValue={value}/> %
            </div>
          );
        }
      }
    }, {
      name: 'Minimun-Maxumun',
      options: {
        filter: false,
        sort: true,
        display: true,
        hyperlink: false,
        customBodyRender: (value, tableMeta, updateValue)=>{
          return(
            <div>
               <input className={classes.tableInputMaxMin} placeholder="1" defaultValue={value[0]}/> - <input className={classes.tableInputMaxMin} defaultValue={value[1]} placeholder="1000,000,000"/>
            </div>
          );
        }
      }
    }, {
      name: 'Suspend Trading',
      options: {
        filter: false,
        sort: true,
        display: true,
        hyperlink: false,
        customHeadRender: ()=>{
          return(<th className={classes.tableHeader}><Checkbox/>Suspend Trading</th>)
        },
        customBodyRender: (value, tableMeta, updateValue)=>{
          return(
            <div className={classes.tableRowFlex}>
               <Checkbox className={classes.tableCellCheckbox}/> {value}
            </div>
          );
        }
      }
    }, {
      name: 'Internally Disabled',
      options: {
        filter: false,
        sort: true,
        display: true,
        hyperlink: false,
      }
    }, {
      name: 'Last Modified Time',
      options: {
        filter: false,
        sort: true,
        display: true,
        hyperlink: false,
      }
    }, {
      name: 'Last Modified By',
      options: {
        filter: false,
        sort: true,
        display: true,
        hyperlink: false,
      }
    }];

    var options = {
      filterType: 'dropdown',
      responsive: "scroll",
      fixedHeader: false,
      selectableRows: false,
    };

    var data = [];
    if(this.state.tableData !== undefined){
      this.state.tableData.map( items => {
        data.push([items.finalDate,
                   items.tenorDesc,"2.11",
                   [items.minDollar,items.maxDollar],
                   items.suspendTrading,
                   items.disableTrading,
                   items.modifiedDate,
                   `${items.modifiedByFirstName} ${items.modifiedByLastName}`,
        ]);
      });
    }
    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={ratematrixStyle.getMuiTheme()}>
          <AppBar position="static" className={classes.AppBar}>
            <Toolbar className={classes.AppToolbar}>
              <Typography className={classes.NavTextLeft}>
                Rate Matrix
              </Typography>
            </Toolbar>
          </AppBar>
          <div className={classes.MainContent}>
            <div className={classes.ContentTitle}> Create Rate Matrix </div>
            <div className={classes.Filter}>
              <Grid container spacing={16}>
                <Grid item md={4}>
                  <Grid container spacing={8}  className={classes.displayFlex}>
                    <Grid item md={4}>
                      <Typography className={classes.Text}>Search Products:</Typography>
                    </Grid>
                    <Grid item md={8}>
                      <Input
                        className={classes.input}
                        classes={{ focused: classes.inputFocused }}
                      />
                    </Grid>
                  </Grid>
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
                      <Checkbox className={classes.Checkbox}/><span className={classes.remember}>Remember</span>
                    </Grid>
                  </Grid>
                  <Grid container spacing={8}  className={classes.displayFlex}>
                    <Grid item md={4}>
                      <Typography className={classes.Text}>Product Category:</Typography>
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
                        value={this.state.category}
                        onChange={this.handleChangeCategory}
                      >
                        { this.state.productCatoryValue.map((value, index) => {
                            return(<MenuItem className={classes.menustyle}  value={index} key={index}>{value.name}</MenuItem>)
                          })
                        }
                      </Select>
                    </Grid>
                  </Grid>
                  <Grid container spacing={8}  className={classes.displayFlex}>
                    <Grid item md={4}>
                      <Typography className={classes.Text}>Currency:</Typography>
                    </Grid>
                    <Grid item md={8} >
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
                        value={this.state.currency}
                        onChange={this.handleChangeCurrency}
                      >
                        { this.state.currencyValue.map((value, index) => {
                            return(<MenuItem className={classes.menustyle} value={index} key={index}>{value.name}</MenuItem>)
                          })
                        }
                      </Select>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={4}>
                  <Grid container spacing={8}  className={classes.emptyDiv}>
                    <Grid item md={4}></Grid><Grid item md={8}></Grid>
                  </Grid>
                  <Grid container spacing={8}  className={classes.displayFlex}>
                    <Grid item md={4}>
                      <Typography className={classes.Text}>Last Modified By:</Typography>
                    </Grid>
                    <Grid item md={8} className={classes.textHeight}>{this.state.lastModifiedBy}</Grid>
                  </Grid>
                  <Grid container spacing={8}  className={classes.displayFlex}>
                    <Grid item md={4}>
                      <Typography className={classes.Text}>Product:</Typography>
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
                        value={this.state.product}
                        onChange={this.handleChangeProduct}
                      >
                        { this.state.productValue.map((value, index) => {
                            return(<MenuItem className={classes.menustyle} value={index} key={index}>{value.name}</MenuItem>)
                          })
                        }
                      </Select>
                    </Grid>
                  </Grid>
                  <Grid container spacing={8}  className={classes.displayFlex}>
                    <Grid item md={4} xs={12}>
                      <Typography className={classes.Text}>Trans Type:</Typography>
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
                        value={this.state.trans}
                        onChange={this.handleChangeTrans}
                      >
                        { this.state.transTypeValue.map((value, index) => {
                            return(<MenuItem className={classes.menustyle} value={index} key={index}>{value.name}</MenuItem>)
                          })
                        }
                      </Select>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={4}>
                  <Grid container spacing={8}  className={classes.emptyDiv}>
                    <Grid item md={4}></Grid><Grid item md={8}></Grid>
                  </Grid>
                  <Grid container spacing={8}  className={classes.displayFlex}>
                    <Grid item md={4}>
                      <Typography className={classes.Text}>Last Modified Time:</Typography>
                    </Grid>
                    <Grid item md={8} className={classes.textHeight}>{this.state.lastModifiedTime}</Grid>
                  </Grid>
                  <Grid container spacing={8}  className={classes.emptyDiv}>
                    <Grid item md={4}></Grid><Grid item md={8}></Grid>
                  </Grid>
                  <Grid container spacing={8}  className={classes.displayFlex}>
                    <Grid item md={4}>
                      <Typography className={classes.Text}>Start:</Typography>
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
                        value={this.state.start}
                        onChange={this.handleChangeStart}
                      >
                        <MenuItem className={classes.menustyle} value={10}>Today</MenuItem>
                      </Select>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <div className={classes.OutputBar}>
              <Grid container spacing={8}>
                <Grid item md={6} className={classes.OutputBarLeft}>
                  <Button className={classes.OutputbtnFill}><Autorenew/></Button>
                  <span className={classes.OutputBarBorder}></span>
                  <span className={classes.addTenor}>
                    <Button className={classes.btnFill}>Add Tenor</Button>
                  </span>
                  <span>(Click on 'Add Tenor'button to add druation)</span>
                </Grid>
                <Grid item md={6} className={classes.OutputBarRight}>
                  <span className={classes.OutputBarBorder}></span>
                  <Button className={classes.OutputbtnFill}><img src={Excel}/></Button>
                  {/* <Button className={classes.OutputbtnFill} onClick={this.printPDFDocument}><img src={Pdf}/></Button> */}
                  <span className={classes.OutputBarBorder}></span>
                  <Button className={classes.OutputbtnFill}><Print/></Button>
                </Grid>
              </Grid>
            </div>
            <div id="divToPrint">
              <div className={classes.tableToolbar} >
                <Grid container spacing={8}>
                  <Grid item md={4} className={classes.displayFlex}>
                    <Typography className={classes.labelText}>Apply rate to All Tenors:</Typography>
                    <Input
                      className={classes.inputTenor}
                      classes={{ focused: classes.inputFocused }}
                    />
                    <Typography className={classes.labelText}>%</Typography>
                    <div className={classes.tenorApplybtn}>
                      <Button className={classes.btnFill}>Apply</Button>
                    </div>
                  </Grid>
                  <Grid item md={4} className={classes.displayFlex}>
                    <Typography className={classes.labelText}>Amount Range  :</Typography>
                    <div className={classes.amountRange}>
                      <Input
                        className={classes.inputRange}
                        classes={{ focused: classes.inputFocused }}
                        placeholder="1"
                      /> -
                      <Input
                        className={classes.inputRange}
                        classes={{ focused: classes.inputFocused }}
                        placeholder="1000,000,000"
                      />
                    </div>
                  </Grid>
                  <Grid item md={4} className={classes.displayFlex}>
                    <div className={classes.inputRateBar}>
                      <Typography className={classes.labelText}>Minimum Client Rate :</Typography>
                      <Input
                        className={classes.inputRate}
                        classes={{ focused: classes.inputFocused }}
                      />
                      <Typography className={classes.labelText}>Trigger Rate :</Typography>
                      <Input
                        className={classes.inputRate}
                        classes={{ focused: classes.inputFocused }}
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className={classes.rateTable}>
                <MuiThemeProvider theme={ratematrixStyle.getMuiTable()}>
                  <MUIDataTable
                    data={data}
                    columns={columns}
                    options={options}
                  />
                </MuiThemeProvider>
              </div>
            </div>

            <div className={classes.footer}>
              <Button className={classes.btnFill}>Save</Button>
              <Button className={classes.btnFill}>Delete</Button>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

RateMatrixPage.propTypes = {
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
  NavTextRight: {
    fontSize: '17px',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '1px 1px 1px black',
    flexGrow: 1,
    textAlign: 'right'
  },
  NavTextRightStar: {
    color: 'red'
  },
  MainContent: {
    padding: '5px 15px'
  },
  topDiv: {
    border: '1px solid #cccccc',
    borderRadius: '7px'
  },
  ContentTitle:{
    fontSize: '16px',
    color: '#007eb6',
    fontWeight: 'bold',
    borderBottom: '2px solid #0074A6'
  },

  Filter: {
    padding: '10px 5px',
    fontSize: '16px',
  },
  FilterEnd: {
    padding: '0px 18px',
  },
  AppBarFilter: {
    backgroundColor: '#4e8fcc',
    boxShadow: 'none',
    border: '1px solid #01688f',
    borderRadius: '5px'
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

  remember: {
    color: '#828384',
    fontSize: '14px',
  },
  emptyDiv: {
    height: '38px',
    marginBottom: '10px'
  },
  textHeight: {
    marginTop: '4px',
    marginBottom: '4px',
  },
  OutputBar: {
    backgroundColor:'#d7e7f7',
    padding: '8px 5px',
    fontSize:'12px'
  },
  OutputbtnFill: {
    color: '#fff',
    backgroundColor: '#0074A6',
    padding: '6px',
    minWidth: '30px',
    margin: '0px 7px',
    fontSize: '14px',
    borderRadius: '6px',
    '&:hover':{
      backgroundColor: '#00618C',
    },
    '&:active':{
      backgroundColor: '#00395D',
    }
  },
  OutputBarLeft: {
    textAlign: 'left'
  },
  OutputBarRight: {
    textAlign: 'right'
  },
  OutputBarBorder: {
    border: '1px solid #abacad',
    margin: '0px 5px',
    verticalAlign: 'middle',
    fontSize: '21px'
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
  addTenor: {
    margin: '0px 35px 0px 25px'
  },
  tableToolbar: {
    padding: '12px 5px',
  },
  labelText: {
    fontSize: '14px',
    fontWeight: 'bold',
  },
  inputTenor: {
    width: '20%',
    borderRadius: 6,
    backgroundColor: 'white',
    border: '1px solid #ced4da',
    height: '30px',
    padding: '9px',
    marginLeft: '40px',
    marginRight: '5px',
    fontSize: 14,
  },
  tenorApplybtn: {
    marginLeft: '50px'
  },
  amountRange: {
    marginLeft: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  inputRange: {
    width: '100%',
    borderRadius: 6,
    backgroundColor: 'white',
    border: '1px solid #ced4da',
    height: '30px',
    padding: '9px',
    fontSize: 14,
    marginRight: '5px',
    marginLeft: '5px',
    '&::placeholder':{
      color: '#abacad'
    }
  },
  inputRateBar:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
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
    width: '50%',
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
    marginTop: '20px',
    textAlign: 'center',
    marginBottom: '20px'
  }
};

// function mapStateToProps(state) {
//   const { matrix } = state;
//    return {
//       matrix
//   };
// }
const mapStateToProps = state => ({matrix:state.matrix});
const mapDispatchToProps = (dispatch) => ({
  getMatrix: () => dispatch(getMatrix())
});
const connectedRateMatrixPage = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RateMatrixPage));
export { connectedRateMatrixPage as RateMatrixPage };
