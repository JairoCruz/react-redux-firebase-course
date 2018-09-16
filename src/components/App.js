import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="row">
      <div className="col-sm-6 offset-sm-3">
        <form>
          <div className="form-group">
            <input type="text" name="title" className="form-control no-border" placeholder="Title..." required/>
          </div>

          <div className="form-group">
            <textarea type="text" name="body" className="form-control no-border" placeholder="Body..." required/>
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

export default App;
