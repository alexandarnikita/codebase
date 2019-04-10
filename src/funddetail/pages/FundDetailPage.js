import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import NativeSelect from '@material-ui/core/NativeSelect';
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { funddetailStyle } from '../style/funddetailStyle';


import { getFunddetail } from '../actions/funddetail.actions';



class FundDetailPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      trading: 'London Trading Desk',
      provider: 'LDN OffShore Fund Company',
      family: 'LDN OFFShore',
      r_fundcode: '9005-LDN EUR Liquidity Fund # 9005',
      family1: '',
      fundtype: 'Govt',
      p_class: "LDN OffShore Inst Class",
      settle_date: '',
      profitcenter: '',
      b1fees: '',
      max_amount: '',
      currency: "EUR",
      domicile: "OFFSHORE EMEA",
      fundtype1: "CNAV",
      funddes: "LDN EUR Liquidity Fu",
      fundcode:'',
      p_type:'',
      portfolio:'',
      n_share:'',
      update_date:'',
      cusip:'',
      one_yield:'',
      seven_yield:'',
      thirty_yield:'',
      net_assets:'',
      cut_time:'',
      nav_value:'',
      daily_factor:'',
      effective_yield:'',
      aum_value:'',
      wam_value:'',
      fundfactsheet:'',
      prospectus:'',
      kiid:'',
      annuelreport:'',
      s_annuelreport:'',
      holdingreport:'',
      sai:'',
      s_p:'',
      moody:'',
      fitch:'',
      naic:'',

      tab_value: 0,
      title: '',
      tradingDeskValue: [],
      providerValue: [],
      familyValue: [],
      refFundCodeValue: [],
      family1Value:[],
      fundTypeValue:[],
      productClassValue:[],
      settleDateValue:'',
      profitCenterValue:'',
      b1FeesValue:'',
      maxAmountValue:'',
      currencyValue:[],
      domicileTypeValue:[],
      fundTypeValue1:[],
      fundDescriptionValue:'',
      fundCodeValue:'',
      processingTypeValue:'',
      portfolioValue:'',
      numberShareValue:'',
      updateDateValue:'',
      cusipValue:'',
      oneDayYieldValue:'',
      sevenDayYieldValue:'',
      thirtyDayYieldValue:'',
      netAssetsYieldValue:'',
      cuttimeValue:'',
      navValue:'',
      dailyFactorValue:'',
      effectiveYieldValue:'',
      aumValue:'',
      wamValue:'',
      fundFactSheetValue:'',
      prospectusValue:'',
      kiidValue:'',
      annuelReportValue:'',
      sAnnuelReportValue:'',
      holdingReportValue:'',
      saiValue:'',
      spValue:'',
      moodyValue:'',
      fitchValue:'',
      naicValue:'',
      urlValue:['asdf','asdfasf'],
    };
  }
  
  componentWillMount() {
    this.props.getFunddetail();
  }
  componentDidUpdate(preProps) {
    let {funddetail}  = this.props;
    if(funddetail !== preProps.funddetail) {
      var funddetailArray = funddetail.funddetail;
      console.log("datas------->", funddetailArray)
      //Default Value
      this.setState({trading:"0"});
      this.setState({provider:"0"});
      this.setState({family:"0"});
      this.setState({r_fundcode:"0"});
      this.setState({family1:"0"});
      this.setState({currency:"0"});
      this.setState({fundtype:"0"});
      this.setState({domicile:"0"});
      this.setState({trading:"0"});
      this.setState({fundtype1:"0"});
      this.setState({p_class:"0"});

      funddetailArray.map(items =>{
        if(items.type === "Title"){
          this.setState({title: items.name});
        }
        if(items.name === "tradingDeskId"){
          this.setState({tradingDeskValue: items.values});
        }
        if(items.name === "providerid"){
          this.setState({providerValue: items.fieldValues});
        }
        if(items.name === "family"){
          this.setState({familyValue: items.fieldValues});
        }
        if(items.name === "reffundnbr"){
          this.setState({refFundCodeValue: items.fieldValues});
        }
        if(items.name === "familyId"){
          this.setState({family1Value: items.values});
        }
        if(items.name === "currencyCode"){
          this.setState({currencyValue: items.values});
        }
        if(items.name === "fundType"){
          this.setState({fundTypeValue: items.values});
        }
        if(items.name === "domicileType"){
          this.setState({domicileTypeValue: items.values});
        }
        if(items.name === "prodClassId"){
          this.setState({productClassValue: items.values});
        }
        if(items.name === "navType"){
          this.setState({fundTypeValue1: items.values});
        }
        if(items.name === "settlementdate"){
          this.setState({settleDateValue: items.value});
        }
        if(items.name === "repLCfunddesc"){
          this.setState({fundDescriptionValue: items.value});
        }
        if(items.name === "profitcenter"){
          this.setState({profitCenterValue: items.value});
        }
        if(items.name === "fundcode"){
          this.setState({fundCodeValue: items.value});
        }
        if(items.name === "pagerTxt"){
          this.setState({b1FeesValue: items.value});
        }
        if(items.name === "maximumamount"){
          this.setState({maxAmountValue: items.value});
        }
        if(items.name === "portfolio"){
          this.setState({portfolioValue: items.value});
        }
        if(items.name === "noofshares"){
          this.setState({numberShareValue: items.value});
        }
        if(items.name === "processDate"){
          this.setState({processingTypeValue: items.value});
        }
        if(items.name === "cusip"){
          this.setState({cusipValue: items.value});
        }
        if(items.name === "nav"){
          this.setState({navValue: items.value});
        }
        if(items.name === "oneDayYield"){
          this.setState({oneDayYieldValue: items.value});
        }
        if(items.name === "dailyFactor"){
          this.setState({dailyFactorValue: items.value});
        }
        if(items.name === "sevenDayYield"){
          this.setState({sevenDayYieldValue: items.value});
        }
        if(items.name === "sevenDayYieldEft"){
          this.setState({effectiveYieldValue: items.value});
        }
        if(items.name === "thirtyDayYield"){
          this.setState({thirtyDayYieldValue: items.value});
        }
        if(items.name === "aum"){
          this.setState({aumValue: items.value});
        }
        if(items.name === "netAssets"){
          this.setState({netAssetsYieldValue: items.value});
        }
        if(items.name === "wam"){
          this.setState({wamValue: items.value});
        }
        if(items.name === "cutOffTime"){
          this.setState({cuttimeValue: items.value});
        }
        if(items.name === "sandp"){
          this.setState({spValue: items.value});
        }
        if(items.name === "moodys"){
          this.setState({moodyValue: items.value});
        }
        if(items.name === "fitch"){
          this.setState({fitchValue: items.value});
        }
        if(items.name === "naic"){
          this.setState({naicValue: items.value});
        }
        if(items.name === "URL"){
          this.setState({urlValue: items.values});
        }
      });
    }
  }

  handleChangeTab = (event, tab_value) => {
    this.setState({ tab_value });
  };
  handleChangeTrading = event => {
    this.setState({ trading: event.target.value });
  };
  handleChangeProvider = event => {
    this.setState({ provider: event.target.value });
  };
  handleChangeFamily = event => {
    this.setState({ family: event.target.value });
  };
  handleChangeFamily1 = event => {
    this.setState({ family1: event.target.value });
  };
  handleChangeRefFundCode = event => {
    this.setState({ r_fundcode: event.target.value });
  };
  handleChangeFundType = event => {
    this.setState({ fundtype: event.target.value });
  };
  handleChangeProductClass = event => {
    this.setState({ p_class: event.target.value });
  };
  handleChangeSettleDate = event => {
    this.setState({ settle_date: event.target.value });
  };
  handleChangeProfitCenter = event => {
    this.setState({ profitcenter: event.target.value });
  };
  handleChangeB1Fees = event => {
    this.setState({ b1fees: event.target.value });
  };
  handleChangeMaxAmount = event => {
    this.setState({ max_amount: event.target.value });
  };
  handleChangeCurrency = event => {
    this.setState({ currency: event.target.value });
  };
  handleChangeDomicileType = event => {
    this.setState({ domicile: event.target.value });
  };
  handleChangeFundType1 = event => {
    this.setState({ fundtype1: event.target.value });
  };
  handleChangeFundDescription = event => {
    this.setState({ funddes: event.target.value });
  };
  handleChangeFundCode = event => {
    this.setState({ fundcode: event.target.value });
  };
  handleChangeProcessingType = event => {
    this.setState({ p_type: event.target.value });
  };
  handleChangePortfolio = event => {
    this.setState({ portfolio: event.target.value });
  };
  handleChangeNumberShare = event => {
    this.setState({ n_share: event.target.value });
  };
  handleChangeUpdateDate = event => {
    this.setState({ update_date: event.target.value });
  };
  handleChangeCusip = event => {
    this.setState({ cusip: event.target.value });
  };
  handleChangeOneDayY = event => {
    this.setState({ one_yield: event.target.value });
  };
  handleChangeSevenDayY = event => {
    this.setState({ seven_yield: event.target.value });
  };
  handleChangeThirtyDayY = event => {
    this.setState({ thirty_yield: event.target.value });
  };
  handleChangeNetAssets = event => {
    this.setState({ net_assets: event.target.value });
  };
  handleChangeCutOfftime = event => {
    this.setState({ cut_time: event.target.value });
  };
  handleChangeNav = event => {
    this.setState({ nav_value: event.target.value });
  };
  handleChangeDailyFactor = event => {
    this.setState({ daily_factor: event.target.value });
  };
  handleChangeEffectiveY = event => {
    this.setState({ effective_yield: event.target.value });
  };
  handleChangeAUM = event => {
    this.setState({ aum_value: event.target.value });
  };
  handleChangeWAM = event => {
    this.setState({ wam_value: event.target.value });
  };

  handleChangeFundFactSheetValue = event => {
    this.setState({ fundfactsheet: event.target.value });
  };
  handleChangeProspectusValue = event => {
    this.setState({ prospectus: event.target.value });
  };
  handleChangeKiidValue = event => {
    this.setState({ kiid: event.target.value });
  };
  handleChangeAnnuelReportValue = event => {
    this.setState({ annuelreport: event.target.value });
  };
  handleChangeSAnnuelReportValue = event => {
    this.setState({ s_annuelreport: event.target.value });
  };
  handleChangeHoldingReportValue = event => {
    this.setState({ holdingreport: event.target.value });
  };
  handleChangeSAIValue = event => {
    this.setState({ sai: event.target.value });
  };
  handleChangeSPValue = event => {
    this.setState({ s_p: event.target.value });
  };
  handleChangeMoodyValue = event => {
    this.setState({ moody: event.target.value });
  };
  handleChangeFitchValue = event => {
    this.setState({ fitch: event.target.value });
  };
  handleChangeNaicValue = event => {
    this.setState({ naic: event.target.value });
  };
  render() {
    const { classes } = this.props;
    const { tab_value } = this.state;
    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={funddetailStyle.getMuiTheme()}>
          <AppBar position="static" className={classes.AppBar}>
            <Toolbar className={classes.AppToolbar}>
              <Typography className={classes.NavTextLeft}>
                {this.state.title}
              </Typography>
            </Toolbar>
          </AppBar>
          <div className={classes.MainContent}>
            <div className={classes.ContentTitleStyle}>{this.state.title}</div>
            <div className={classes.ContentBorderStyle}>
              <div className={classes.Filter}>
                <Grid container spacing={8}>
                  <Grid item md={6}>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={3}>
                        <Typography className={classes.Text}>Trading Desk:</Typography>
                      </Grid>
                      <Grid item md={9}>
                        {/* <Select
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
                          autoWidth
                          className={classes.select}
                          value={this.state.trading}
                          onChange={this.handleChangeTrading}
                        >
                        { this.state.tradingDeskValue.map((value, index) => {
                            return(<MenuItem className={classes.menustyle} key={index} value={index}>{value.name}</MenuItem>)
                          })
                        }
                        </Select> */}
                        <NativeSelect
                          className={classes.select}
                          value={this.state.trading}
                          onChange={this.handleChangeTrading}
                        >
                          { this.state.tradingDeskValue.map((value, index) => {
                              return(<option className={classes.menustyle1} key={index} value={index}>{value.name}</option>)
                            })
                          }
                        </NativeSelect>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={6}>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={3}>
                        <Typography className={classes.Text}>Provider:</Typography>
                      </Grid>
                      <Grid item md={9}>
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
                          autoWidth
                          className={classes.select}
                          value={this.state.provider}
                          onChange={this.handleChangeProvider}
                        >
                        
                        { this.state.providerValue && this.state.providerValue.map((value, index) => {
                            return(<MenuItem className={classes.menustyle} key={index} value={index}>{value.COMPANYNAME}</MenuItem>)
                          })
                        }
                        </Select>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container spacing={8}>
                  <Grid item md={6}>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={3}>
                        <Typography className={classes.Text}>Family:</Typography>
                      </Grid>
                      <Grid item md={9}>
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
                          autoWidth
                          className={classes.select1}
                          value={this.state.family}
                          onChange={this.handleChangeFamily}
                        >
                        { this.state.familyValue && this.state.familyValue.map((value, index) => {
                            return(<MenuItem className={classes.menustyle} key={index} value={index}>{value.DESCR}</MenuItem>)
                          })
                        }
                        </Select>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={6}>
                    <Grid container spacing={8}  className={classes.displayFlex}>
                      <Grid item md={3}>
                        <Typography className={classes.Text}>Ref.Fund Code:</Typography>
                      </Grid>
                      <Grid item md={9}>
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
                              autoWidth
                              className={classes.select}
                              value={this.state.r_fundcode}
                              onChange={this.handleChangeRefFundCode}
                            >
                            { this.state.refFundCodeValue && this.state.refFundCodeValue.map((value, index) => {
                                return(<MenuItem className={classes.menustyle} key={index} value={index}>{value.DESCR}</MenuItem>)
                              })
                            }
                            </Select>
                          </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
              <div className={classes.root}>
                <AppBar position="static" color="default">
                  <Tabs value={tab_value} 
                  onChange={this.handleChangeTab} 
                  indicatorColor="primary"
                  textColor="primary"
                  variant="scrollable"
                  scrollButtons="auto">
                    <Tab label="Fund Details" />
                    <Tab label="Yield Details" />
                  </Tabs>
                </AppBar>
                {tab_value === 0 && <TabContainer>
                  <div className={classes.Filter}>
                    <Grid container spacing={8}>
                      <Grid item md={5}>
                        <Grid container spacing={8}  className={classes.tabFromStyle2}>
                            <Grid item md={4}>
                              <Typography className={classes.Text}>Family:</Typography>
                            </Grid>
                            <Grid item md={4}>
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
                              autoWidth
                              className={classes.select}
                              value={this.state.family1}
                              onChange={this.handleChangeFamily1}
                            >
                            { this.state.family1Value.map((value, index) => {
                                return(<MenuItem className={classes.menustyle} key={index} value={index}>{value.DESCR}</MenuItem>)
                              })
                            }
                            </Select>
                          </Grid>
                        </Grid>
                        <Grid container spacing={8}  className={classes.tabFromStyle2}>
                            <Grid item md={4}>
                              <Typography className={classes.Text}>Fund Type:</Typography>
                            </Grid>
                            <Grid item md={4}>
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
                              autoWidth
                              className={classes.select}
                              value={this.state.fundtype}
                              onChange={this.handleChangeFundType}
                            >
                            { this.state.fundTypeValue.map((value, index) => {
                                return(<MenuItem className={classes.menustyle} key={index} value={index}>{value.name}</MenuItem>)
                              })
                            }
                            </Select>
                          </Grid>
                        </Grid>
                        <Grid container spacing={8}  className={classes.tabFromStyle2}>
                            <Grid item md={4}>
                              <Typography className={classes.Text}>Product Class:</Typography>
                            </Grid>
                            <Grid item md={4}>
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
                                autoWidth
                                className={classes.select}
                                value={this.state.p_class}
                                onChange={this.handleChangeProductClass}
                              >
                              { this.state.productClassValue.map((value, index) => {
                                  return(<MenuItem className={classes.menustyle} key={index} value={index}>{value.DESCR}</MenuItem>)
                                })
                              }
                              </Select>
                          </Grid>
                        </Grid>
                        <Grid container spacing={8}  className={classes.tabFromStyle2}>
                          <Grid item md={4}>
                            <Typography className={classes.Text}>Settlement Date:</Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Input
                              className={classes.input}
                              classes={{ focused: classes.inputFocused }}
                              value={this.state.settleDateValue}
                              onChange={this.handleChangeSettleDate}
                            />
                          </Grid>
                        </Grid>
                        <Grid container spacing={8}  className={classes.tabFromStyle2}>
                            <Grid item md={4}>
                              <Typography className={classes.Text}>Profit Center:</Typography>
                            </Grid>
                            <Grid item md={4}>
                              <Input
                                className={classes.input}
                                classes={{ focused: classes.inputFocused }}
                                value={this.state.profitCenterValue}
                                onChange={this.handleChangeProfitCenter}
                              />
                          </Grid>
                        </Grid>
                        <Grid container spacing={8}  className={classes.tabFromStyle2}>
                            <Grid item md={4}>
                              <Typography className={classes.Text}>B1Fees:</Typography>
                            </Grid>
                            <Grid item md={4}>
                              <Input
                                className={classes.input}
                                classes={{ focused: classes.inputFocused }}
                                value={this.state.b1FeesValue}
                                onChange={this.handleChangeB1Fees}
                              />
                          </Grid>
                        </Grid>
                        <Grid container spacing={8}  className={classes.tabFromStyle2}>
                            <Grid item md={4}>
                              <Typography className={classes.Text}>Maximum Amount:</Typography>
                            </Grid>
                            <Grid item md={4}>
                              <Input
                                className={classes.input}
                                classes={{ focused: classes.inputFocused }}
                                value={this.state.maxAmountValue}
                                onChange={this.handleChangeMaxAmount}
                              />
                          </Grid>
                        </Grid>
                      
                      </Grid>
                      <Grid item md={5}>
                        <Grid container spacing={8}  className={classes.tabFromStyle2}>
                          <Grid item md={4}>
                            <Typography className={classes.Text}>Currency:</Typography>
                          </Grid>
                          <Grid item md={4}>
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
                            autoWidth
                            className={classes.select}
                            value={this.state.currency}
                            onChange={this.handleChangeCurrency}
                          >
                          { this.state.currencyValue.map((value, index) => {
                              return(<MenuItem className={classes.menustyle} key={index} value={index}>{value.name}</MenuItem>)
                            })
                          }
                          </Select>
                          </Grid>
                        </Grid>
                        <Grid container spacing={8}  className={classes.tabFromStyle2}>
                            <Grid item md={4}>
                              <Typography className={classes.Text}>Domicile Type:</Typography>
                            </Grid>
                            <Grid item md={4}>
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
                              autoWidth
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
                        <Grid container spacing={8}  className={classes.tabFromStyle2}>
                            <Grid item md={4}>
                              <Typography className={classes.Text}>Fund Type:</Typography>
                            </Grid>
                            <Grid item md={4}>
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
                                autoWidth
                                className={classes.select}
                                value={this.state.fundtype1}
                                onChange={this.handleChangeFundType1}
                              >
                              { this.state.fundTypeValue1.map((value, index) => {
                                  return(<MenuItem className={classes.menustyle} key={index} value={index}>{value.name}</MenuItem>)
                                })
                              }
                              </Select>
                          </Grid>
                        </Grid>
                        <Grid container spacing={8}  className={classes.tabFromStyle2}>
                          <Grid item md={4}>
                            <Typography className={classes.Text}>Fund Description:</Typography>
                          </Grid>
                          <Grid item md={4}>
                            <Input
                              className={classes.input}
                              classes={{ focused: classes.inputFocused }}
                              value={this.state.fundDescriptionValue}
                              onChange={this.handleChangeFundDescription}
                            />
                          </Grid>
                          <div className={classes.requireStyle}>*</div>
                        </Grid>
                        <Grid container spacing={8}  className={classes.tabFromStyle2}>
                          <Grid item md={4}>
                            <Typography className={classes.Text}>Fund Code:</Typography>
                          </Grid>
                          <Grid item md={4}>
                            <Input
                              className={classes.input}
                              classes={{ focused: classes.inputFocused }}
                              value={this.state.fundCodeValue}
                              onChange={this.handleChangeFundCode}
                            />
                          </Grid>
                          <div className={classes.requireStyle}>*</div>
                        </Grid>
                        <Grid container spacing={8}  className={classes.tabFromStyle2}>
                            <Grid item md={4}>
                              <Typography className={classes.Text}>Processing Type:</Typography>
                            </Grid>
                            <Grid item md={4}>
                              <Input
                                className={classes.input}
                                classes={{ focused: classes.inputFocused }}
                                value={this.state.processingTypeValue}
                                onChange={this.handleChangeProcessingType}
                              />
                          </Grid>
                        </Grid>
                        <Grid container spacing={8}  className={classes.tabFromStyle2}>
                            <Grid item md={4}>
                              <Typography className={classes.Text}>Portfolio:</Typography>
                            </Grid>
                            <Grid item md={4}>
                              <Input
                                className={classes.input}
                                classes={{ focused: classes.inputFocused }}
                                value={this.state.portfolioValue}
                                onChange={this.handleChangePortfolio}
                              />
                          </Grid>
                        </Grid>
                        <Grid container spacing={8}  className={classes.tabFromStyle2}>
                          <Grid item md={4}>
                            <Typography className={classes.Text}>No. of Shares:</Typography>
                          </Grid>
                          <Grid item md={4}>
                            <Input
                              className={classes.input}
                              classes={{ focused: classes.inputFocused }}
                              value={this.state.numberShareValue}
                              onChange={this.handleChangeNumberShare}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item md={2}></Grid>
                    </Grid>
                  </div>
                </TabContainer>}

                {tab_value === 1 && <TabContainer>
                  <div className={classes.Filter}>
                    <Grid container spacing={8}>
                      <Grid item md={6}>
                        <Grid container spacing={8}  className={classes.tabFromStyle}>
                          <Grid item md={4}>
                            <Typography className={classes.Text}>Updated Date:</Typography>
                          </Grid>
                          <Grid item md={4}></Grid>
                          <Grid item md={2}>
                            <Input
                              className={classes.input}
                              classes={{ focused: classes.inputFocused }}
                              value={this.state.updateDateValue}
                              onChange={this.handleChangeUpdateDate}
                            />
                          </Grid>
                        </Grid>
                        <Grid container spacing={8}  className={classes.tabFromStyle}>
                          <Grid item md={4}>
                            <Typography className={classes.Text}>Cusip:</Typography>
                          </Grid>
                          <Grid item md={4}></Grid>
                          <Grid item md={3}>
                            <Input
                              className={classes.input}
                              classes={{ focused: classes.inputFocused }}
                              value={this.state.cusipValue}
                              onChange={this.handleChangeCusip}
                            />
                          </Grid>
                          <div className={classes.requireStyle}>*</div>
                        </Grid>
                        <Grid container spacing={8}  className={classes.tabFromStyle}>
                          <Grid item md={4}>
                            <Typography className={classes.Text}>One Day Yield:</Typography>
                          </Grid>
                          <Grid item md={4}></Grid>
                          <Grid item md={3}>
                            <Input
                              className={classes.input}
                              classes={{ focused: classes.inputFocused }}
                              value={this.state.oneDayYieldValue}
                              onChange={this.handleChangeOneDayY}
                            />
                          </Grid>
                          <div className={classes.requireStyle}>*</div>
                        </Grid>
                        <Grid container spacing={8}  className={classes.tabFromStyle}>
                          <Grid item md={4}>
                            <Typography className={classes.Text}>Seven Day Yield:</Typography>
                          </Grid>
                          <Grid item md={4}></Grid>
                          <Grid item md={3}>
                            <Input
                              className={classes.input}
                              classes={{ focused: classes.inputFocused }}
                              value={this.state.sevenDayYieldValue}
                              onChange={this.handleChangeSevenDayY}
                            />
                          </Grid>
                          <div className={classes.requireStyle}>*</div>
                        </Grid>
                        <Grid container spacing={8}  className={classes.tabFromStyle}>
                          <Grid item md={4}>
                            <Typography className={classes.Text}>Thirty Day Yield:</Typography>
                          </Grid>
                          <Grid item md={4}></Grid>
                          <Grid item md={3}>
                            <Input
                              className={classes.input}
                              classes={{ focused: classes.inputFocused }}
                              value={this.state.thirtyDayYieldValue}
                              onChange={this.handleChangeThirtyDayY}
                            />
                          </Grid>
                          <div className={classes.requireStyle}>*</div>
                        </Grid>
                        <Grid container spacing={8}  className={classes.tabFromStyle}>
                          <Grid item md={4}>
                            <Typography className={classes.Text}>Net Assets:</Typography>
                          </Grid>
                          <Grid item md={4}></Grid>
                          <Grid item md={3}>
                            <Input
                              className={classes.input}
                              classes={{ focused: classes.inputFocused }}
                              value={this.state.netAssetsYieldValue}
                              onChange={this.handleChangeNetAssets}
                            />
                          </Grid>
                          <div className={classes.requireStyle}>*</div>
                        </Grid>
                        <Grid container spacing={8}  className={classes.tabFromStyle}>
                          <Grid item md={4}>
                            <Typography className={classes.Text}>Cut Off time:</Typography>
                          </Grid>
                          <Grid item md={4}></Grid>
                          <Grid item md={3}>
                            <Input
                              className={classes.input}
                              classes={{ focused: classes.inputFocused }}
                              value={this.state.cuttimeValue}
                              onChange={this.handleChangeCutOfftime}
                            />
                          </Grid>
                          <div className={classes.requireStyle}>*</div>
                        </Grid>
                      </Grid>
                      <Grid item md={6}>
                        <Grid container spacing={8}  className={classes.tabFromStyle1}></Grid>
                        <Grid container spacing={8}  className={classes.tabFromStyle}>
                          <Grid item md={4}>
                            <Typography className={classes.Text}>Nav:</Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Input
                              className={classes.input}
                              classes={{ focused: classes.inputFocused }}
                              value={this.state.navValue}
                              onChange={this.handleChangeNav}
                            />
                          </Grid>
                          <div className={classes.requireStyle}>*</div>
                          <Grid item md={4}></Grid>                          
                        </Grid>
                        <Grid container spacing={8}  className={classes.tabFromStyle}>
                          <Grid item md={4}>
                            <Typography className={classes.Text}>Daily Factor:</Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Input
                              className={classes.input}
                              classes={{ focused: classes.inputFocused }}
                              value={this.state.daily_factor}
                              onChange={this.handleChangeDailyFactor}
                            />
                          </Grid>
                          <div className={classes.requireStyle}>*</div>
                          <Grid item md={4}></Grid>                          
                        </Grid>
                        <Grid container spacing={8}  className={classes.tabFromStyle}>
                          <Grid item md={4}>
                            <Typography className={classes.Text}>7 Day Effective Yield:</Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Input
                              className={classes.input}
                              classes={{ focused: classes.inputFocused }}
                              value={this.state.effectiveYieldValue}
                              onChange={this.handleChangeEffectiveY}
                            />
                          </Grid>
                          <div className={classes.requireStyle}>*</div>
                          <Grid item md={4}></Grid>                          
                        </Grid>
                        <Grid container spacing={8}  className={classes.tabFromStyle}>
                          <Grid item md={4}>
                            <Typography className={classes.Text}>AUM:</Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Input
                              className={classes.input}
                              classes={{ focused: classes.inputFocused }}
                              value={this.state.aumValue}
                              onChange={this.handleChangeAUM}
                            />
                          </Grid>
                          <div className={classes.requireStyle}>*</div>
                          <Grid item md={4}></Grid>                          
                        </Grid>
                        <Grid container spacing={8}  className={classes.tabFromStyle}>
                          <Grid item md={4}>
                            <Typography className={classes.Text}>WAM:</Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Input
                              className={classes.input}
                              classes={{ focused: classes.inputFocused }}
                              value={this.state.wamValue}
                              onChange={this.handleChangeWAM}
                            />
                          </Grid>
                          <div className={classes.requireStyle}>*</div>
                          <Grid item md={4}></Grid>                          
                        </Grid>
                        <Grid container spacing={8}  className={classes.tabFromStyle1}></Grid>
                      </Grid>
                      <Grid item md={2}></Grid>
                    </Grid>
                    <Grid container spacing={8}>
                      <Grid item md={2}>
                        <Typography className={classes.Text}>URL:</Typography>
                      </Grid>
                      <Grid item md={8}>
                        {this.state.urlValue.map((arrayvalue, index) =>
                          <Grid container spacing={8} className={classes.tabFromStyle} key={index}>
                            <Grid item md={3}>
                              <Typography className={classes.Text}>{arrayvalue.id.split('$')}:</Typography>
                            </Grid>
                            <Grid item md={9}>
                              <Input
                                className={classes.input}
                                classes={{ focused: classes.inputFocused }}
                                value={arrayvalue.name}
                              />
                            </Grid>
                          </Grid>
                        )}
                      </Grid>
                      
                    </Grid>
                  </div>
                  <div className={classes.ContentTitleStyle}>Rating</div>
                  <div className={classes.Filter}>
                    <Grid container spacing={8}>
                      <Grid item md={4}>
                        <Grid container spacing={8}  className={classes.displayFlex}>
                          <Grid item md={6}>
                            <Typography className={classes.Text}>S&P:</Typography>
                          </Grid>
                          <Grid item md={6}>
                            <Input
                              className={classes.input}
                              classes={{ focused: classes.inputFocused }}
                              value={this.state.spValue}
                              onChange={this.handleChangeSPValue}
                            />
                          </Grid>
                          
                        </Grid>
                      </Grid>
                      <Grid item md={4}>
                        <Grid container spacing={8}  className={classes.displayFlex}>
                          <Grid item md={6}>
                            <Typography className={classes.Text}>Moody's:</Typography>
                          </Grid>
                          <Grid item md={6}>
                            <Input
                              className={classes.input}
                              classes={{ focused: classes.inputFocused }}
                              value={this.state.moodyValue}
                              onChange={this.handleChangeMoodyValue}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container spacing={8}>
                      <Grid item md={4}>
                        <Grid container spacing={8}  className={classes.displayFlex}>
                          <Grid item md={6}>
                            <Typography className={classes.Text}>FITCH:</Typography>
                          </Grid>
                          <Grid item md={6}>
                            <Input
                              className={classes.input}
                              classes={{ focused: classes.inputFocused }}
                              value={this.state.fitchValue}
                              onChange={this.handleChangeFitchValue}
                            />
                          </Grid>
                          
                        </Grid>
                      </Grid>
                      <Grid item md={4}>
                        <Grid container spacing={8}  className={classes.displayFlex}>
                          <Grid item md={6}>
                            <Typography className={classes.Text}>NAIC:</Typography>
                          </Grid>
                          <Grid item md={6}>
                            <Input
                              className={classes.input}
                              classes={{ focused: classes.inputFocused }}
                              value={this.state.naicValue}
                              onChange={this.handleChangeNaicValue}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
              
                </TabContainer>}
              </div>
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

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

FundDetailPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {
  root: {
    flexGrow: 1,
    background:'#e9f0f7',
  },
  TabStyle: {
    flexGrow: 1,
    backgroundColor: '#007eb6'
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
  tabFromStyle:{
    display: 'flex',
    alignItems: 'center',
  },
  tabFromStyle1:{
    display: 'flex',
    alignItems: 'center',
    height:40,
  },
  tabFromStyle2:{
    display: 'flex',
    alignItems: 'center',
    border: '1px solid white'
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
  },
  requireStyle: {
    color: 'red'
  },
  menustyle1: {
    background: 'red',
    color: 'red',
    fontSize: 50,
  }
};

const mapStateToProps = state => ({funddetail:state.funddetail});
const mapDispatchToProps = (dispatch) => ({
  getFunddetail: () => dispatch(getFunddetail())
});
const connectedFundDetailPage = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FundDetailPage));
export { connectedFundDetailPage as FundDetailPage };
