import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import InputLabel from '@material-ui/core/InputLabel';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { coelementStyle } from '../style/coelementStyle';

class ElementPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0,
    }
  }  
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={coelementStyle.getMuiTheme()}>
          <AppBar position="static" className={classes.AppBar}>
            Common Elements
          </AppBar>
          <Grid container spacing={8}>
            <Grid item md={6}>
              <Grid container spacing={8}  className={classes.displayFlex}>
                <Grid item md={2}>
                  <InputLabel className={classes.labelStyle}>InputLabel</InputLabel>
                </Grid>
                <Grid item md={10}>
                  <TextField 
                    className={classes.inputStyle}
                    placeholder="Input"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={8}  className={classes.displayFlex}>
                <Grid item md={2}>
                  <Typography className={classes.Text}>Search</Typography>
                </Grid>
                <Grid item md={10}>
                  <TextField
                    placeholder="Search"
                    error
                    style={{fontSize:'40px', color:"red"}}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon className={classes.searchIconStyle}/>
                        </InputAdornment>
                      ),
                      classes: {
                        root: classes.inputSearchStyle,
                        input: classes.inputFontColor,
                        focused: classes.inputFocused
                      }
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={8}  className={classes.displayFlex}>
                <Grid item md={2}>
                  <Typography className={classes.Text}>Tab</Typography>
                </Grid>
                <Grid item md={10}>
                  <div className={classes.root}>
                    <Tabs
                      value={value}
                      onChange={this.handleChange}
                      classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                    >
                      <Tab
                        disableRipple
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                        label="Tab 1"
                      />
                      <Tab
                        disableRipple
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                        label="Tab 2"
                      />
                      <Tab
                        disableRipple
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                        label="Tab 3"
                      />
                    </Tabs>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={8}  className={classes.displayFlex}>
                <Grid item md={2}>
                  <Typography className={classes.Text}>Tab</Typography>
                </Grid>
                <Grid item md={10}>
                    <DatePicker 
                      dateFormat="MMM dd, YYYY" 
                      ref="filter.name " 
                      autoOk={true} 
                      name="name" 
                      className="form-control"  
                      selected={new Date()} />
                    
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    )
  }
}

ElementPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
const styles = {
  root: {
    flexGrow: 1,
  },
  AppBar: {
    backgroundColor: '#4e8fcc',
    boxShadow: 'none',
    border: '1px solid #cccccc',
    fontSize: 16,
  },
  Filter: {
    padding: '10px 5px',
    fontSize: '16px',
    marginTop: '15px'
  },
  displayFlex:{
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
  },
  inputStyle: {
    border: '1px solid #d5d5d6',
    paddingLeft: '9px',
    borderRadius: '6px',
    fontSize: '14px',
    color:'red'
  },
  inputSearchStyle: {
    border: '1px solid #d5d5d6',
    paddingLeft: '9px',
    borderRadius: '6px',
    fontSize: '14px',
  },
  inputFocused: {
    borderColor: '#7fbeda',
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
  },
  inputFontColor:{
    color: '#595959'
  },
  labelStyle: {
    fontSize: '14px',
    color: '#00395D',
    marginLeft: 30
  },
  searchIconStyle:{
    color: "#d5d5d6",
    paddding: 0,
  },
  Text: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#0072b6',
    marginLeft: '30px'
  },
  tabsRoot: {
    borderBottom: '1px solid #d5d5d6',
  },
  tabsIndicator: {    
    fontSize: 14,
    backgroundColor: '#d5d5d6',   
  },
  tabRoot: {
    borderRadius: 6,
    background: 'linear-gradient(to bottom, #f2f2f2 0%,#ffffff 100%)',
    border: '1px solid #595959',
    height: '30px',
    paddingLeft: '9px',
    fontSize: 14,
    color: '#0074A6',
    '&:hover':{
      color: '#00395D',
      background: 'linear-gradient(to bottom, #d5d5d6 0%,#0074a6 100%)',
    },
    '&:active': {
      background:'linear-gradient(to bottom, #cce5f0 0%,#f2f8fb 100%)'
    },
    '&$tabSelected': {
      color: '#00395d',
      background:'linear-gradient(to bottom, #cce5f0 0%,#f2f8fb 100%)'
      
    },
    '&:focus': {
      color: '#595959',
      background:'linear-gradient(to bottom, #cce5f0 0%,#f2f8fb 100%)'
    },
  },
  tabSelected: {},
};

const mapStateToProps = state => ({groupproduct:state.groupproduct});
const mapDispatchToProps = (dispatch) => ({
  getGroupproduct: () => dispatch(getGroupproduct())
});
const connectedElementPage = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ElementPage));
export { connectedElementPage as ElementPage };
