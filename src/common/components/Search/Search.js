import React from "react";
import PropTypes from "prop-types";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const styles = theme => ({
  search: {
    fontSize: 14,
    color: "#595959",
    border: "1px solid #d5d5d6",
    boxShadow: "0 0 3px 0 #58595b10 inset",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      borderColor: "#abacad"
    },
    "&:active": {
      borderColor: "#7fbeda"
    },
    "&:focus-within": {
      borderColor: "#7fbeda",
      boxShadow: "0 0 4px 0 #007eb625 inset"
    },
    margin: theme.spacing.unit * 2,
    width: "auto"
  },
  searchIcon: {
    width: 50,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    left: 6,
    color: "#666666 !important"
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
    paddingLeft: 35,
    transition: theme.transitions.create("width"),
    width: "100%",
    "&::placeholder": { color: "#666666", fontSize: "14px" }
  }
});

class Search extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
        />
      </div>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);
