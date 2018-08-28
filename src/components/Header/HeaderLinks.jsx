/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import GridItem from "components/Grid/GridItem.jsx";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

class HeaderLinks extends React.Component {
  constructor(props) {
    super(props)
  }
  toLoginPage(evt) {
    evt.preventDefault()
    this.props.reactprops.history.push('/login-page')
  }
  toSignupPage(evt) {
    evt.preventDefault()
    this.props.reactprops.history.push('/signup-page')
  }
  toFaqPage(evt){
    evt.preventDefault()
    this.props.reactprops.history.push('/faq-page')
  }
  render() {
    console.log('track_link')
    console.log(this.props)
    const { classes } = this.props;
    return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Button
            href=""
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            DOCS
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            onClick={this.toFaqPage.bind(this)}
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            FAQ
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            onClick={this.toLoginPage.bind(this)}
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            LOG IN
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            onClick={this.toSignupPage.bind(this)}
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            SIGN  UP
          </Button>
        </ListItem>
      </List>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
