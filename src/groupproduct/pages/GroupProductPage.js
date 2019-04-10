import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';
import Expand from '../../images/icon_expand.png';
import Grid from '@material-ui/core/Grid';

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { groupproductStyle } from '../style/groupproductStyle';
import Input from '@material-ui/core/Input';

import { getGroupproduct } from '../actions/groupproduct.actions';


class GroupProductPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      trading: 'London Trading Desk',
      bentity: 'GTS LDN INVEST',
      clientfirm: 'DE Sub',
      domicile: 'OFFSHORE EMEA',
      productgroup: 'DE Sub Product Group',
      selectedValue: 'b',
      open: true,
      title: '',
      tradingDeskValue: [],
      businessEntityValue: [],
      clientFrimValue: [],
      domicileTypeValue: [],
      productGroupVaule: '',
    };
  }
  componentWillMount() {
    this.props.getGroupproduct();
  }
  componentDidUpdate(preProps) {
    let {groupproduct}  = this.props;
    if(groupproduct !== preProps.groupproduct) {
      var groupproductArray = groupproduct.groupproduct;
      console.log("datas------->", groupproductArray)
      groupproductArray.map(items =>{
        if(items.type === "Title"){
          this.setState({title: items.name});
        }
        if(items.name === "company1"){
          this.setState({tradingDeskValue: items.values});
        }
        if(items.name === "branch"){
          this.setState({businessEntityValue: items.values});
        }
        if(items.name === "company"){
          this.setState({clientFrimValue: items.values});
        }
        if(items.name === "disableDomType"){
          this.setState({domicileTypeValue: items.values});
        }
        if(items.name === "productGrp"){
          this.setState({productGroupVaule: items.value});
        }
      });
    }
  }

  handleClick = () =>{
    this.setState({ open: !this.state.open });
  };
  handleChangeCheckValue = event => {
    this.setState({ selectedValue: event.target.value });
  };
  handleChangeTrading = event => {
    this.setState({ trading: event.target.value });
  };
  handleChangeBentity = event => {
    this.setState({ bentity: event.target.value });
  };
  handleChangeClientFirm = event => {
    this.setState({ clientfirm: event.target.value });
  };
  handleChangeDomicileType = event => {
    this.setState({ domicile: event.target.value });
  };
  handleChangeProductGroup = event => {
    this.setState({ product: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={groupproductStyle.getMuiTheme()}>
          <AppBar position="static" className={classes.AppBar}>
            <Toolbar className={classes.AppToolbar}>
              <Typography className={classes.NavTextLeft}>
                Product Group
              </Typography>
            </Toolbar>
          </AppBar>
          <div className={classes.MainContent}>
            <div className={classes.ContentTitleStyle}>{this.state.title}</div>
            <div className={classes.ContentBorderStyle}>
              <div className={classes.Filter}>
                <Grid container spacing={16}>
                  <Grid item md={6}>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={6}>
                        <Grid container spacing={8}  className={classes.displayFlex}>
                          <Grid item md={6}>
                            <Typography className={classes.Text}>Trading:</Typography>
                          </Grid>
                          <Grid item md={6}>
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
                      <Grid item md={6}></Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={6}>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={6}>
                        <Grid container spacing={8}  className={classes.displayFlex}>
                          <Grid item md={6}>
                            <Typography className={classes.Text}>Business Entity:</Typography>
                          </Grid>
                          <Grid item md={6}>
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
                              onChange={this.handleChangeBentity}
                            >
                            { this.state.businessEntityValue.map((value, index) => {
                                return(<MenuItem className={classes.menustyle} key={index} value={index}>{value.name}</MenuItem>)
                              })
                            }
                            </Select>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item md={6}></Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container spacing={16}>
                  <Grid item md={6}>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={6}>
                        <Grid container spacing={8}  className={classes.displayFlex}>
                          <Grid item md={6}>
                            <Typography className={classes.Text}>Client Firm:</Typography>
                          </Grid>
                          <Grid item md={6}>
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
                              className={classes.select1}
                              value={this.state.clientfirm}
                              onChange={this.handleChangeClientFirm}
                            >
                            { this.state.clientFrimValue.map((value, index) => {
                                return(<MenuItem className={classes.menustyle} key={index} value={index}>{value.name}</MenuItem>)
                              })
                            }
                            </Select>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item md={6}></Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={6}>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={6}>
                        <Grid container spacing={8}  className={classes.displayFlex}>
                          <Grid item md={6}>
                            <Typography className={classes.Text}>Domicile Type:</Typography>
                          </Grid>
                          <Grid item md={6}>
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
                              onChange={this.handleChangeDomicileType}
                            >
                            { this.state.domicileTypeValue.map((value, index) => {
                                return(<MenuItem className={classes.menustyle} key={index} value={index}>{value.name}</MenuItem>)
                              })
                            }
                            </Select>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item md={6}></Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container spacing={16}>
                  <Grid item md={6}>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={6}>
                        <Grid container spacing={8}  className={classes.displayFlex}>
                          <Grid item md={6}>
                            <Typography className={classes.Text}>Product Group:</Typography>
                          </Grid>
                          <Grid item md={6}>
                            <Input
                              className={classes.input}
                              classes={{ focused: classes.inputFocused }}
                              value={this.state.productGroupVaule}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item md={6}></Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={6}></Grid>
                </Grid>              
              </div>
              <div>
                <Grid container sapcing={8}>
                  <Grid item md={2}>
                    <Paper className={classes.OutputBarLeft}>Full Partial None</Paper>
                  </Grid>
                  <Grid item md={10}>
                    <Paper className={classes.OutputBarLeft}>Product Classes</Paper>
                  </Grid>                  
                </Grid>
                <Grid container sapcing={8}>
                  <Grid item md={2}>
                    <div className={classes.radioStyle}>
                      <Radio
                        classes={{root: classes.radio, checked: classes.checked}}
                        checked={this.state.selectedValue === 'a'}
                        onChange={this.handleChangeCheckValue}
                        value="a"
                        name="Option1"
                      />
                      <Radio
                        classes={{root: classes.radio, checked: classes.checked}}
                        checked={this.state.selectedValue === 'b'}
                        onChange={this.handleChangeCheckValue}
                        value="b"
                        name="Option2"
                      />
                      <Radio
                        classes={{root: classes.radio, checked: classes.checked}}
                        checked={this.state.selectedValue === 'c'}
                        onChange={this.handleChangeCheckValue}
                        value="c"
                        name="Option3"
                      />
                    </div> 
                  </Grid>
                  <Grid item md={1}>
                    <Grid container sapcing={8}>
                      <Button onClick={this.handleClick}><img src={Expand}/></Button>
                    </Grid>
                  </Grid>
                  <Grid item md={9}>
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                      <Grid container sapcing={8}>
                        <Grid item md={8}>
                          <Grid container sapcing={8}>
                            <Grid item md={8}>
                              <Grid container sapcing={8}>
                                <div className={classes.checkContent}>
                                  <Grid container sapcing={8} className={classes.displayFlex}>
                                    <Typography className={classes.typoStyle}>LDN OffShore Inst Class-OFFSHORE EMEA</Typography>
                                  </Grid>
                                  <Grid container sapcing={8} className={classes.displayFlex}>
                                    <Typography className={classes.typoStyle}>LDN OffShore</Typography>
                                  </Grid>                              
                                  <Grid container sapcing={8} className={classes.displayFlex1}>
                                    <Checkbox className={classes.CheckboxStyle} />
                                    <Typography className={classes.typoStyle}>900A-LDN Global GBP Liquidity Fund # 900A</Typography>
                                  </Grid>
                                  <Grid container sapcing={8} className={classes.displayFlex1}>
                                    <Checkbox className={classes.CheckboxStyle}/>
                                    <Typography className={classes.typoStyle}>9004-LDN Global GBP Interest Payout # 9004</Typography>
                                  </Grid>
                                  <Grid container sapcing={8} className={classes.displayFlex1}>
                                    <Checkbox className={classes.CheckboxStyle}/>
                                    <Typography className={classes.typoStyle}>9005-LDN EUR Liquidity Fund # 9005</Typography>
                                  </Grid>
                                  <Grid container sapcing={8} className={classes.displayFlex1}>
                                    <Checkbox className={classes.CheckboxStyle}/>
                                    <Typography className={classes.typoStyle}>9006-LDN EUR Payout Fund # 9006</Typography>
                                  </Grid>
                                  <Grid container sapcing={8} className={classes.displayFlex1}>
                                    <Checkbox className={classes.CheckboxStyle}/>
                                    <Typography className={classes.typoStyle}>9007-STI USD Global Recap Fund # 9007</Typography>
                                  </Grid>
                                  <Grid container sapcing={8} className={classes.displayFlex1}>
                                    <Checkbox className={classes.CheckboxStyle}/>
                                    <Typography className={classes.typoStyle}>9008-STI Global Cash Payout Fund # 9008</Typography>
                                  </Grid>
                                </div>
                              </Grid>
                            </Grid>
                            <Grid item md={4}>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item md={4}>
                          <Grid container sapcing={8} className={classes.displayFlex}>
                            <Grid item md={7}>
                              <Typography className={classes.labelText}>Auto-Entitle New Fund to Partial Class</Typography>
                            </Grid>
                            <Grid item md={3}>
                              <Checkbox className={classes.CheckboxStyle}/>
                            </Grid>
                            <Grid item md={2}></Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Collapse> 
                  </Grid>
                </Grid>              
              </div>
              <div className={classes.footer}>
                <Button className={classes.btnFill}>Save</Button>
                <Button className={classes.btnFill}>View Changes</Button>
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

GroupProductPage.propTypes = {
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
  displayFlex1:{
    display: 'flex',
    alignItems: 'center',
    height: 30,
  },
  typoStyle:{
    fontSize: 16,
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
    width: '80%',
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

  select1: {
    width: '50%',
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
  radioStyle: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  radio: {
    marginLeft: 6,
    padding:0,
    '&:hover':{
      color: '#E5F1F6',
      border: '1px solid #0074a6'
    },
    '&$checked': {
      color: '#0074A6'
    }
  },
  checked: {},
  checkContent: {
    marginTop: 10,
  },
  OutputBar: {
    backgroundColor:'#d7e7f7',
    padding: '8px 5px',
    fontSize:'12px',
    height: 30
  },
  OutputBarLeft: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',    
    fontSize: '14px',
    fontWeight: 'bold',
    height: 30,
    color: '#007eb6',
    background: '#bfdfed',
    border: 'none',
    borderRadius: '0px',
    boxShadow: 'none',
    marginRight: 5,
    paddingLeft:5,
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
    fontSize: 14,
    height: 30,
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
  CheckboxStyle: {
    padding: 6,
    align: 'left',
    '&:hover':{
      color: '#d5d5d6',
    },
    '&:active': {
      color: '#0074a6'
    },
    '&$checked': {
      color: '#0074a6'
    }
  },
  footer: {
    marginTop: '20px',
    textAlign: 'center',
    marginBottom: '20px'
  }
};

const mapStateToProps = state => ({groupproduct:state.groupproduct});
const mapDispatchToProps = (dispatch) => ({
  getGroupproduct: () => dispatch(getGroupproduct())
});
const connectedGroupProductPage = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(GroupProductPage));
export { connectedGroupProductPage as GroupProductPage };
