import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    progress: {
      margin: theme.spacing.unit * 2,
    },
});

class Loading extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const { classes } = this.props;
        return(
            <div style={{position:'absolute',left:'50%',top:'50%',transform: 'translate(-50%, -50%)'}}>         
                <CircularProgress className={classes.progress} color="primary" style={{width:'40px',height:'40px'}}/>
            </div>
        )
    }
}

Loading.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loading);