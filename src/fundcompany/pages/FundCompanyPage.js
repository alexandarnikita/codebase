import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { fundcompanyStyle } from '../style/fundcompanyStyle';
import { getFundcompany } from '../actions/fundcompany.actions';



class FundCompanyPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      c_category:'',
      company_name:'',
      firm_name:'',
      c_type:'',
      c_rating:'',
      b_olocation:'',
      trading:'',
      c_id:'',
      add1:'',
      add2:'',
      add3:'',
      addtype:'',
      city:'',
      country:'',
      firstname:'',
      lastname:'',
      title:'',
      ttitle:'',
      fax:'',
      email:'',
      middlename:'',
      contact_type:'',
      phone_num:'',
      pager_num:'',

      companyCategoryValue:[],
      companyNameValue:[],
      firmNameValue:[],
      companyTypeValue:[],
      companyRatingValue:'',
      backofficeLocationValue:'',
      tradingDeskValue: [],
      companyIdValue:'',
      add1Value:'',
      add2Value:'',
      add3Value:'',
      addTypeValue:'',
      cityValue:'',
      countryValue:[],
      firstNameValue:'',
      lastNameValue:'',
      titleValue:'',
      faxValue:'',
      emailValue:'',
      middleNameValue:'',
      contactPersonTypeValue:'',
      phoneValue:'',
      pagerValue:'',
    };
  }
  
  componentWillMount() {
    this.props.getFundcompany();
  }
  componentDidUpdate(preProps) {
    let {fundcompany}  = this.props;
    if(fundcompany !== preProps.fundcompany) {
      var fundcompanyArray = fundcompany.fundcompany;
      console.log("datas------->", fundcompanyArray)
      fundcompanyArray.map(items =>{
        if(items.type === "Title"){
          this.setState({ttitle: items.name});
        }
        if(items.name === "companyCategory"){
          this.setState({companyCategoryValue: items.fieldValues});
        }
        if(items.name === "company"){
          this.setState({companyNameValue: items.fieldValues});
        }
        if(items.name === "modifiedCompany"){
          this.setState({firmNameValue: items.value});
        }
        if(items.name === "companyTypeId"){
          this.setState({companyTypeValue: items.values});
        }
        if(items.name === "tradingDeskId"){
          this.setState({tradingDeskValue: items.values});
        }
        if(items.name === "companyRatingTxt"){
          this.setState({companyRatingValue: items.value});
        }
        if(items.name === "routingNumber"){
          this.setState({companyIdValue: items.value});
        }
        if(items.name === "boLocation"){
          this.setState({backofficeLocationValue: items.value});
        }
        if(items.label === "Address Type :"){
          this.setState({addTypeValue: items.value});
        }
        if(items.name === "address1"){
          this.setState({addr: items.value});
        }
        if(items.name === "address2"){
          this.setState({add2Value: items.value});
        }
        if(items.name === "address3"){
          this.setState({add3Value: items.value});
        }
        if(items.name === "cityTxt"){
          this.setState({cityValue: items.value});
        }
        if(items.name === "countryTxt"){
          this.setState({countryValue: items.values});
        }
        if(items.name === "firstName"){
          this.setState({firstNameValue: items.value});
        }
        if(items.name === "middleName"){
          this.setState({middleNameValue: items.value});
        }
        if(items.name === "lastName"){
          this.setState({lastNameValue: items.value});
        }
        if(items.label === "Contact Person Type :"){
          this.setState({contactPersonTypeValue: items.value});
        }
        if(items.name === "title"){
          this.setState({titleValue: items.value});
        }
        if(items.name === "phone"){
          this.setState({phoneValue: items.value});
        }
        if(items.name === "fax"){
          this.setState({faxValue: items.value});
        }
        if(items.name === "pagerTxt"){
          this.setState({pagerValue: items.value});
        }
        if(items.name === "eMail"){
          this.setState({emailValue: items.value});
        }
      });
    }
  }
  
  handleChangeFirstNameValue = event => {
    this.setState({ firstname: event.target.value });
  };
  handleChangeLastNameValue = event => {
    this.setState({ lastname: event.target.value });
  };
  handleChangeTitleValue = event => {
    this.setState({ title: event.target.value });
  };
  handleChangeFaxValue = event => {
    this.setState({ fax: event.target.value });
  };
  handleChangeEmailValue = event => {
    this.setState({ email: event.target.value });
  };
  handleChangeMiddleNameValue = event => {
    this.setState({ middlename: event.target.value });
  };
  handleChangeContactPersonTypeValue = event => {
    this.setState({ contact_type: event.target.value });
  };
  handleChangePhoneValue = event => {
    this.setState({ phone_num: event.target.value });
  };
  handleChangePagerValue = event => {
    this.setState({ pager_num: event.target.value });
  };
  handleChangeCountryValue = event => {
    this.setState({ country: event.target.value });
  };
  handleChangeCityValue = event => {
    this.setState({ city: event.target.value });
  };
  handleChangeAddTypeValue = event => {
    this.setState({ addtype: event.target.value });
  };
  handleChangeAdd1Value = event => {
    this.setState({ add1: event.target.value });
  };
  handleChangeAdd2Value = event => {
    this.setState({ add2: event.target.value });
  };
  handleChangeAdd3Value = event => {
    this.setState({ add3: event.target.value });
  };
  handleChangeCompanyIdValue = event => {
    this.setState({ c_id: event.target.value });
  };
  handleChangeTradingValue = event => {
    this.setState({ trading: event.target.value });
  };
  handleChangeBackOfficeLocation = event => {
    this.setState({ b_olocation: event.target.value });
  };
  handleChangeCompanyCategoryValue = event => {
    this.setState({ c_category: event.target.value });
  };
  handleChangeCompanyNameValue = event => {
    this.setState({ company_name: event.target.value });
  };
  handleChangeFirmNameValue = event => {
    this.setState({ firm_name: event.target.value });
  };
  handleChangeCompanyTypeValue = event => {
    this.setState({ c_type: event.target.value });
  };
  handleChangeCompanyRating = event => {
    this.setState({ c_rating: event.target.value });
  };
  render() {
    const { classes } = this.props;
    const { tab_value } = this.state;
    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={fundcompanyStyle.getMuiTheme()}>
          <div className={classes.MainContent}>
            <div className={classes.ContentTitleStyle}>{this.state.ttitle}</div>
            <div className={classes.ContentBorderStyle}>
              <div className={classes.Filter}>
                <Grid container spacing={8}>
                  <Grid item md={4}>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={4}>
                        <Typography className={classes.Text}>Company Category:</Typography>
                      </Grid>
                      <Grid item md={6}>
                        <Select MenuProps={{anchorOrigin: {vertical: "bottom",horizontal: "left"},
                            transformOrigin: {vertical: "top",horizontal: "left"},
                            getContentAnchorEl: null
                          }}
                          autoWidth
                          className={classes.select}
                          value={this.state.c_category}
                          onChange={this.handleChangeCompanyCategoryValue}
                        >
                        { this.state.companyCategoryValue.map((value, index) => {
                            return(<MenuItem className={classes.menustyle} key={index} value={index}>{value.ACCTSTRUCTDESC}</MenuItem>)
                          })
                        }
                        </Select>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={4}>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={3}>
                        <Typography className={classes.Text}>Name:</Typography>
                      </Grid>
                      <Grid item md={6}>
                        <Select MenuProps={{anchorOrigin: {vertical: "bottom",horizontal: "left"},
                            transformOrigin: {vertical: "top",horizontal: "left"},
                            getContentAnchorEl: null
                          }}
                          autoWidth
                          className={classes.select}
                          value={this.state.company_name}
                          onChange={this.handleChangeCompanyNameValue}
                        >
                        { this.state.companyNameValue.map((value, index) => {
                            return(<MenuItem className={classes.menustyle} key={index} value={index}>{value.COMPANYNAME}</MenuItem>)
                          })
                        }
                        </Select>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={4}>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={3}>
                        <Typography className={classes.Text}>Firm Name:</Typography>
                      </Grid>
                      <Grid item md={6}>
                        <Input
                          className={classes.input}
                          classes={{ focused: classes.inputFocused }}
                          value={this.state.firmNameValue}
                          onChange={this.handleChangeFirmNameValue}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
              <div className={classes.labelText}>Edit Company Information</div>
              <div className={classes.Filter}>
                <Grid container spacing={8}>
                  <Grid item md={6}>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={3}>
                        <Typography className={classes.Text}>Company Type:</Typography>
                      </Grid>
                      <Grid item md={6}>
                        <Select MenuProps={{anchorOrigin: {vertical: "bottom",horizontal: "left"},
                            transformOrigin: {vertical: "top",horizontal: "left"},
                            getContentAnchorEl: null
                          }}
                          autoWidth
                          className={classes.select}
                          value={this.state.c_type}
                          onChange={this.handleChangeCompanyTypeValue}
                        >
                        { this.state.companyTypeValue.map((value, index) => {
                            return(<MenuItem className={classes.menustyle} key={index} value={index}>{value.name}</MenuItem>)
                          })
                        }
                        </Select>
                      </Grid>
                    </Grid>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={3}>
                        <Typography className={classes.Text}>Company Rating:</Typography>
                      </Grid>
                      <Grid item md={4}>
                        <Input
                          className={classes.input}
                          classes={{ focused: classes.inputFocused }}
                          value={this.state.companyRatingValue}
                          onChange={this.handleChangeCompanyRating}
                        />
                      </Grid>
                      <div className={classes.requireStyle}>*</div>
                    </Grid>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={3}>
                        <Typography className={classes.Text}>Back Office Location:</Typography>
                      </Grid>
                      <Grid item md={4}>
                        <Input
                          className={classes.input}
                          classes={{ focused: classes.inputFocused }}
                          value={this.state.backofficeLocationValue}
                          onChange={this.handleChangeBackOfficeLocation}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={6}>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={3}>
                        <Typography className={classes.Text}>Trading Desk:</Typography>
                      </Grid>
                      <Grid item md={4}>
                        <Select MenuProps={{anchorOrigin: {vertical: "bottom",horizontal: "left"},
                            transformOrigin: {vertical: "top",horizontal: "left"},
                            getContentAnchorEl: null
                          }}
                          autoWidth
                          className={classes.select}
                          value={this.state.trading}
                          onChange={this.handleChangeTradingValue}
                        >
                        { this.state.tradingDeskValue.map((value, index) => {
                            return(<MenuItem className={classes.menustyle} key={index} value={index}>{value.name}</MenuItem>)
                          })
                        }
                        </Select>
                      </Grid>
                    </Grid>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={3}>
                        <Typography className={classes.Text}>Company Id:</Typography>
                      </Grid>
                      <Grid item md={4}>
                        <Input
                          className={classes.input}
                          classes={{ focused: classes.inputFocused }}
                          value={this.state.companyIdValue}
                          onChange={this.handleChangeCompanyIdValue}
                        />
                      </Grid>
                      <div className={classes.requireStyle}>*</div>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
              <div className={classes.labelText}>Address Details</div>
              <div className={classes.Filter}>
                <Grid container spacing={8}>
                  <Grid item md={6}>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={3}>
                        <Typography className={classes.Text}>Click here to get Addresses:</Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={3}>
                        <Typography className={classes.Text}>Address1:</Typography>
                      </Grid>
                      <Grid item md={4}>
                        <Input
                          className={classes.input}
                          classes={{ focused: classes.inputFocused }}
                          value={this.state.add1Value}
                          onChange={this.handleChangeAdd1Value}
                        />
                      </Grid>
                      <div className={classes.requireStyle}>*</div>
                    </Grid>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={3}>
                        <Typography className={classes.Text}>Address2:</Typography>
                      </Grid>
                      <Grid item md={4}>
                        <Input
                          className={classes.input}
                          classes={{ focused: classes.inputFocused }}
                          value={this.state.add2Value}
                          onChange={this.handleChangeAdd2Value}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={3}>
                        <Typography className={classes.Text}>Address3:</Typography>
                      </Grid>
                      <Grid item md={4}>
                        <Input
                          className={classes.input}
                          classes={{ focused: classes.inputFocused }}
                          value={this.state.add3Value}
                          onChange={this.handleChangeAdd3Value}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={6}>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={3}>
                        <Typography className={classes.Text}>Address Type:</Typography>
                      </Grid>
                      <Grid item md={4}>
                        <Input
                          className={classes.input}
                          classes={{ focused: classes.inputFocused }}
                          value={this.state.addTypeValue}
                          onChange={this.handleChangeAddTypeValue}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={3}>
                        <Typography className={classes.Text}>City:</Typography>
                      </Grid>
                      <Grid item md={4}>
                        <Input
                          className={classes.input}
                          classes={{ focused: classes.inputFocused }}
                          value={this.state.cityValue}
                          onChange={this.handleChangeCityValue}
                        />
                      </Grid>
                      <div className={classes.requireStyle}>*</div>
                      <Grid container spacing={8}  className={classes.displayFlex}>
                        <Grid item md={3}>
                          <Typography className={classes.Text}>Country:</Typography>
                        </Grid>
                        <Grid item md={4}>
                          <Select MenuProps={{anchorOrigin: {vertical: "bottom",horizontal: "left"},
                            transformOrigin: {vertical: "top",horizontal: "left"},
                            getContentAnchorEl: null
                          }}
                          autoWidth
                          className={classes.select}
                          value={this.state.country}
                          onChange={this.handleChangeCountryValue}
                        >
                        { this.state.countryValue.map((value, index) => {
                            return(<MenuItem className={classes.menustyle} key={index} value={index}>{value.COUNTRYNAME}</MenuItem>)
                          })
                        }
                        </Select>
                      
                        </Grid>                      
                      </Grid>
                      <Grid container spacing={8}  className={classes.displayFlex}>
                        <Grid item md={3}>
                          <Typography className={classes.Text}>State:</Typography>
                        </Grid>
                        <Grid item md={4}>
                          <Select MenuProps={{anchorOrigin: {vertical: "bottom",horizontal: "left"},
                              transformOrigin: {vertical: "top",horizontal: "left"},
                              getContentAnchorEl: null
                            }}
                            autoWidth
                            className={classes.select}
                            // value={this.state.c_category}
                            value="asdf"
                            onChange={this.handleChangeCompanyCategoryValue}
                          >
                          {/* { this.state.tradingDeskValue.map((value, index) => {
                              return(<MenuItem className={classes.menustyle} key={index} value={index}>{value.name}</MenuItem>)
                            })
                          } */}
                          </Select>
                        </Grid>                      
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
              <div className={classes.labelText}>Contact Person Details</div>
              <div className={classes.Filter}>
                <Grid container spacing={8}>
                  <Grid item md={6}>
                    <Grid container spacing={8}  className={classes.displayFlex1}>
                      <Grid item md={4}>
                        <Typography className={classes.Text}>Click to get Contact Person Details:</Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={3}>
                        <Typography className={classes.Text}>First Name:</Typography>
                      </Grid>
                      <Grid item md={4}>
                        <Input
                          className={classes.input}
                          classes={{ focused: classes.inputFocused }}
                          value={this.state.firstNameValue}
                          onChange={this.handleChangeFirstNameValue}
                        />
                      </Grid>
                      <div className={classes.requireStyle}>*</div>
                    </Grid>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={3}>
                        <Typography className={classes.Text}>Last Name:</Typography>
                      </Grid>
                      <Grid item md={4}>
                        <Input
                          className={classes.input}
                          classes={{ focused: classes.inputFocused }}
                          value={this.state.lastNameValue}
                          onChange={this.handleChangeLastNameValue}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={3}>
                        <Typography className={classes.Text}>Title:</Typography>
                      </Grid>
                      <Grid item md={4}>
                        <Input
                          className={classes.input}
                          classes={{ focused: classes.inputFocused }}
                          value={this.state.titleValue}
                          onChange={this.handleChangeTitleValue}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={3}>
                        <Typography className={classes.Text}>Fax:</Typography>
                      </Grid>
                      <Grid item md={4}>
                        <Input
                          className={classes.input}
                          classes={{ focused: classes.inputFocused }}
                          value={this.state.faxValue}
                          onChange={this.handleChangeFaxValue}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={3}>
                        <Typography className={classes.Text}>Email:</Typography>
                      </Grid>
                      <Grid item md={4}>
                        <Input
                          className={classes.input}
                          classes={{ focused: classes.inputFocused }}
                          value={this.state.emailValue}
                          onChange={this.handleChangeEmailValue}
                        />
                      </Grid>
                      <div className={classes.requireStyle}>*</div>
                    </Grid>
                  </Grid>
                  <Grid item md={6}>
                    <Grid container spacing={8}  className={classes.displayFlex1}></Grid>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={3}>
                        <Typography className={classes.Text}>Middle Name:</Typography>
                      </Grid>
                      <Grid item md={4}>
                        <Input
                          className={classes.input}
                          classes={{ focused: classes.inputFocused }}
                          value={this.state.middleNameValue}
                          onChange={this.handleChangeMiddleNameValue}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={3}>
                        <Typography className={classes.Text}>Contact Person Type:</Typography>
                      </Grid>
                      <Grid item md={4}>
                        <Input
                          className={classes.input}
                          classes={{ focused: classes.inputFocused }}
                          value={this.state.contactPersonTypeValue}
                          onChange={this.handleChangeContactPersonTypeValue}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={3}>
                        <Typography className={classes.Text}>Phone:</Typography>
                      </Grid>
                      <Grid item md={4}>
                        <Input
                          className={classes.input}
                          classes={{ focused: classes.inputFocused }}
                          value={this.state.phoneValue}
                          onChange={this.handleChangePhoneValue}
                        />
                      </Grid>
                      <div className={classes.requireStyle}>*</div>
                    </Grid>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={3}>
                        <Typography className={classes.Text}>Pager:</Typography>
                      </Grid>
                      <Grid item md={4}>
                        <Input
                          className={classes.input}
                          classes={{ focused: classes.inputFocused }}
                          value={this.state.pagerValue}
                          onChange={this.handleChangePagerValue}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
              <div className={classes.requireLabel}>Columns with * are mandatory</div>
              <div className={classes.footer}>
                <Button className={classes.btnFill}>New</Button>
                <Button className={classes.btnFill}>Save</Button>
                <Button className={classes.btnFill}>Delete</Button>
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}


FundCompanyPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {
  root: {
    flexGrow: 1,
    background:'#e9f0f7',
  },
  AppBar: {
    backgroundColor: '#4e8fcc',
    boxShadow: 'none',
    border: '1px solid #cccccc',
  },
  MainContent: {
    padding: '5px 15px'
  },
  ContentTitle:{
    fontSize: '16px',
    color: '#007eb6',
    fontWeight: 'bold',
    borderBottom: '2px solid #0074A6'
  },
  ContentTitleStyle:{
    background: 'linear-gradient(to bottom, #7fbeda 0%,#bfdfed 100%)',
    border: '1px, solid #d9ecf4',
    fontSize: '16px',
    color: '#007eb6',
    fontWeight: 'bold',
    paddingLeft: 20,
    marginBottom: 5
  },
  ContentBorderStyle:{
    border: '1px solid #99cbe2',
    padding: 10,
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
  },
  tabFromStyle:{
    display: 'flex',
    alignItems: 'center',
  },
  displayFlex1:{
    display: 'flex',
    alignItems: 'center',
    height: 40,
  },
  Text: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#0072b6'
  },
  select: {
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
  labelText: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    background: 'linear-gradient(to bottom, #7fbeda 0%,#bfdfed 100%)',
    border: '1px, solid #d9ecf4',
    color: '#007eb6',
    fontWeight: 'bold',
    fontSize: 14,
    paddingLeft: 20,
    marginBottom: 5,    
    height: 30,
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
  footer: {
    marginTop: '20px',
    textAlign: 'center',
    marginBottom: '20px'
  },
  requireStyle: {
    color: 'red'
  },
  requireLabel: {
    fontSize: 16,
    color: 'red'
  }
};

const mapStateToProps = state => ({fundcompany:state.fundcompany});
const mapDispatchToProps = (dispatch) => ({
  getFundcompany: () => dispatch(getFundcompany())
});
const connectedFundCompanyPage = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FundCompanyPage));
export { connectedFundCompanyPage as FundCompanyPage };
