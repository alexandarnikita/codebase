import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    progress: {
      margin: theme.spacing.unit * 2,
    },
});

class TableLoader extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const { classes } = this.props;
        return(
            <div style={{position:'absolute',left:'50%',top:'50%',zIndex: 9999, transform: 'translate(-50%, -50%)'}}>
                <CircularProgress className={classes.progress} color="primary" style={{width:'20px',height:'20px', marginTop: '55px'}}/>
            </div>
        )
    }
}

TableLoader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableLoader);