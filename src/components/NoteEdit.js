import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class NoteEdit extends Component {
    constructor(props) {
      super(props);
      // state
      this.state = {
        title: this.props.note.title,
        body: this.props.note.body
      };
      // bind
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    // handle change
    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  
    // handle submit
    handleSubmit(e) {
      // avoid page reload
      e.preventDefault();
      const note = {
        title: this.state.title,
        body: this.state.body,
        uid: this.props.uid
      };
      // save object note in database firebase
      //this.props.saveNote(note);
      // reset state
      this.setState({
        title: "",
        body: ""
      });
    }
  
    render() {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 offset-sm-3">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    onChange={this.handleChange}
                    value={this.state.title}
                    type="text"
                    name="title"
                    className="form-control no-border"
                    placeholder="Title..."
                    required
                  />
                </div>
  
                <div className="form-group">
                  <textarea
                    onChange={this.handleChange}
                    value={this.state.body}
                    type="text"
                    name="body"
                    className="form-control no-border"
                    placeholder="Body..."
                    required
                  />
                </div>
  
                <div className="form-group">
                  <button className="btn btn-primary col-sm-12">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
  

function mapStateToProps(state, ownProps) {
  return {
    note: state.notes[ownProps.match.params.id],
    uid: state.user.uid
  };
}

export default connect(mapStateToProps)(NoteEdit);
