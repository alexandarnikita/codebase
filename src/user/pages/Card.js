import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import ScrollDialog from "./ScrollDialog";

class Card extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    // console.log(this.props.rowData);
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <Button
          aria-owns={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {this.props.displayText === undefined
            ? "Menu"
            : this.props.displayText}
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem>
            {" "}
            <ScrollDialog
              href="#"
              linkName="View Trade Details"
            />
          </MenuItem>
          <MenuItem onClick={this.handleClose}>Download PDF</MenuItem>
          <MenuItem onClick={this.handleClose}>Email Trade Details</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default Card;
