import React, { Component } from "react";
import { connect } from "react-redux";

class SubmitComment extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <textarea
              type="text"
              name="commentBody"
              className="form-control no-border"
              placeholder="Write comment.."
              required
            />
          </div>
          <div className="form-group">
          <button className="btn btn-success">Add comment</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateProps(state, ownProps) {
  return {
    uid: state.user.id
  };
}

export default connect(
  mapStateProps,
  {}
)(SubmitComment);
