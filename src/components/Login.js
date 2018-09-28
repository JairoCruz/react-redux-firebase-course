import React, { Component } from "react";
import { connect } from "react-redux";
import { googleLogin, twitterLogin } from "../actions/userAction";

class Login extends Component {
  componentWillMount() {
    if (this.props.user !== null) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== null) {
      nextProps.history.push("/");
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-sm-12 jumbotron">
            <h1>Notes | {new Date().getFullYear}</h1>
            <h2>
              <i>
                Login with your favourite
                <b>Social Network</b>
              </i>
            </h2>
          </div>
          <div className="col-sm-5">
            <button
              className="btn btn-danger btn-lg"
              onClick={this.props.googleLogin}
            >
              Login with Google
            </button>
          </div>
          <div className="col-sm-2">
            <br />
          </div>
          <div className="col-sm-5">
            <button
              className="btn btn-success btn-lg"
              onClick={this.props.twitterLogin}
            >
              Login with Twitter
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, onwProps) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  { googleLogin, twitterLogin }
)(Login);
