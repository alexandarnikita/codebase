import React from "react";
import PropTypes from "prop-types";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  input: {
    fontSize: "14px !important",
    color: "#595959",
    border: "1px solid #d5d5d6",
    boxShadow: "0 0 3px 0 #58595b10 inset",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      borderColor: "#abacad"
    },
    "&:focus-within": {
      borderColor: "#d96666",
      boxShadow: "0 0 4px 0 #58595b25 inset"
    },
    margin: theme.spacing.unit * 2,
    width: "auto"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    fontSize: "14px",
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    padding: 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    "&::placeholder": { color: "#666666", fontSize: "14px" }
  }
});

class Input extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.input}>
        <InputBase
          placeholder="Input"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
        />
      </div>
    );
  }
}

Input.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Input);
