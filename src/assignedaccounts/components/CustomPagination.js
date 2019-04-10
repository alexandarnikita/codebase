import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Grid from '@material-ui/core/Grid';

class CustomPagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.page
    }
  }
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page- 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
    );
  };
  changeInputValue = event => {
    let value = event.target.value;
    if(value > Math.ceil(this.props.count / this.props.rowsPerPage)) value = Math.ceil(this.props.count / this.props.rowsPerPage);
    if(value < 0) value = 0;
    console.log(value)
    this.setState({inputValue: value},()=>{
      this.props.onChangePage(
        event, this.state.inputValue-1
      );
    });
  }
  render() {
    const { classes, count, page, rowsPerPage, theme, selectedCount, type } = this.props;
    console.log(this.props)
    return (
      <div >
        <Grid container spacing={24} className={classes.paginationDiv}>
          <Grid className={classes.itemLeft} item xs>
            { type === 'senario1' &&
              <div>
                <span className={classes.selectedTextColor}>{selectedCount} </span>
                <span className={classes.normaltextColor}>of {count} selected</span>
              </div>
            }
            { type === 'senario2' &&
              <div>
                {count > rowsPerPage ?
                  <div>
                    <span className={classes.normaltextColor}>({rowsPerPage*(page)+1} - {rowsPerPage*(page+1)> count ? count:rowsPerPage*(page+1)}) </span>
                    <span className={classes.normaltextColor}>of {count} Listed</span>
                  </div>:
                  <div>
                    <span className={classes.normaltextColor}>{count} Listed</span>
                  </div>
                }
              </div>
            }
          </Grid>
          <Grid className={classes.itemCenter} item xs>
          { type === 'senario1' &&
              <div className={classes.itemsDiv}>
                <IconButton
                  onClick={this.handleBackButtonClick}
                  aria-label="Previous Page"
                  className={classes.itemAorrow}
                  className={page === 0 ?classes.buttonDisable:classes.itemAorrow}
                >
                  {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </IconButton>
                <input type="text" className={classes.inputWidth} value={page+1} onChange={this.changeInputValue}/>
                <span className={classes.normaltextColor}>  of {Math.ceil(count / rowsPerPage)}</span>
                <IconButton
                  onClick={this.handleNextButtonClick}
                  aria-label="Next Page"
                  className={(page >= Math.ceil(count / rowsPerPage) - 1)?classes.buttonDisable:classes.itemAorrow}
                >
                  {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </IconButton>
              </div>
            }
            { type === 'senario2' &&
              <div>
                {count > rowsPerPage ?
                  <div className={classes.itemsDiv}>
                    <IconButton
                      onClick={this.handleBackButtonClick}
                      aria-label="Previous Page"
                      className={classes.itemAorrow}
                      className={page === 0 ?classes.buttonDisable:classes.itemAorrow}
                    >
                      {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    </IconButton>
                    <input type="text" className={classes.inputWidth} value={page+1} onChange={this.changeInputValue}/>
                    <span className={classes.normaltextColor}>  of {Math.ceil(count / rowsPerPage)}</span>
                    <IconButton
                      onClick={this.handleNextButtonClick}
                      aria-label="Next Page"
                      className={(page >= Math.ceil(count / rowsPerPage) - 1)?classes.buttonDisable:classes.itemAorrow}
                    >
                      {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </IconButton>
                  </div>:
                  <div></div>
                }
              </div>
            }
          </Grid>
          <Grid className={classes.itemRight} item xs>
            <button className={classes.buttonOutline} onClick={this.handleFirstPageButtonClick}>
              First Page
            </button>
            <button className={classes.buttonFill} onClick={this.handleLastPageButtonClick}>
              Last Page
            </button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

CustomPagination.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    background: '#ffffff',
    width: '100%',
  },
  toolBarDiv: {
    marginTop: '18px',
    textAlign:'right',
    fontSize: '16px',
    padding: '0px !important'
  },
  itemsDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paginationDiv: {
    textAlign:'center',
    // marginTop: '12px',
    // border: '1px solid #d2d2ce',
    // background: 'linear-gradient(#FFFFFF, #F6F7F7)',
    fontSize: '16px',
    padding: '19px 12px',
    color: theme.palette.text.secondary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paginationDiv1: {
    textAlign:'center',
    marginTop: '12px',
    border: '1px solid #d2d2ce',
    background: 'linear-gradient(#FFFFFF, #F6F7F7)',
    fontSize: '16px',
    padding: '19px 12px',
    color: theme.palette.text.secondary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemCenter:{
    textAlign:'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    padding: '0px !important'
  },
  itemLeft: {
    textAlign:'left',
    fontSize: '16px',
    padding: '0px !important'
  },
  itemRight: {
    textAlign:'right',
    fontSize: '16px',
    padding: '0px !important'
  },
  selectedTextColor: {
    color: '#0074A6'
  },
  normaltextColor: {
    color: '#666666'
  },
  itemAorrow: {
    background:'transparent',
    color: '#0074A6',
    '&:hover': {
      color: "#00395d",
      background: 'transparent'
    },
    '&:active': {
      color: "#666666",
      background: 'transparent'
    },
  },
  buttonDisable: {
    color: '#0074A6',
    opacity: '0.6',
    pointerEvents: 'none'
  },
  inputWidth: {
    width: '30px',
    height: '30px',
    fontSize: '16px',
    lineHeight: '1.42857143',
    color: '#555',
    padding: '6px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    textAlign:'right',
    marginRight: '9px'
  },
  buttonFill: {
    color: '#fff',
    backgroundColor: '#0074A6',
    padding: '6px 12px',
    fontSize: '14px',
    borderRadius: '6px',
  },
  buttonOutline: {
    color: '#0074A6',
    border: '1px solid #0074A6',
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '14px',
    marginRight: '10px'
  },
  select: {
    width: '175px',
    height: '30px',
    padding: '6px 12px',
    fontSize: '16px',
    lineHeight: '1.42857143',
    color: '#555',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '4px',
    margin: '18px 0px 12px 12px',
  }
});
export default withStyles(styles, { withTheme: true })(CustomPagination);
