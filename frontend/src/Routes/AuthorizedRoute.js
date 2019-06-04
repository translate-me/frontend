import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { validateToken } from "../Actions/authActions";

class AuthorizedRoute extends React.Component {
  render() {
    const { isTokenValid } = this.props;

    if(isTokenValid){
      return <Route {...this.props} />;
    }
    return <Redirect to="/login" />;
  }
}

const mapDispatchToProps = dispatch => ({
  validateToken: value => dispatch(validateToken())
});

const mapStateToProps = state => ({
  isTokenValid: state.authReducer.isTokenValid
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizedRoute);
