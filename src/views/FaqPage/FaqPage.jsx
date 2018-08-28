import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

const dashboardRoutes = [];

class FaqPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Link to={"/"} className={classes.listItem}>
            <Header
            color="white"
            routes={dashboardRoutes}
            brand="StarMethod-Json-Api"
            rightLinks={<HeaderLinks reactprops = {this.props}/>}
            fixed
            changeColorOnScroll={{
                height: 400,
                color: "white"
            }}
            {...rest}
            />
        </Link>
        <Footer whiteFont />
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(FaqPage);
