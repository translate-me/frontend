import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { validateToken } from "../Actions/authActions";

class AuthorizedRoute extends React.Component {
  componentDidMount(){
    const { isTokenValid } = this.props;
    if(isTokenValid === "invalid" || isTokenValid === "pending"){
      this.props.dispatch(validateToken())
    }
  }

  render() {
    const { isTokenValid } = this.props;
    console.log('iooio',isTokenValid)
    if(isTokenValid === "valid"){
      return <Route {...this.props} />;
    }
    else if(isTokenValid === "pending") {
      return <div />
    }
    return <Redirect to="/login" />;
  }
}

const mapStateToProps = state => ({
  isTokenValid: state.authReducer.isTokenValid
});

export default connect(mapStateToProps)(AuthorizedRoute);
