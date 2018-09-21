import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser, logout } from "../actions/userAction";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <Link className="navbar-brand" to="/">
              DIARY2018
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="navbar-nav ml-auto">
              {this.props.user === null ? (
                <li className="nav-item active">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to="/logout" onClick={() => this.props.logout()}>
                    logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  { getUser, logout }
)(Header);
