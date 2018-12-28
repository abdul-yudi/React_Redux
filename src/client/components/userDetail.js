import React, { Component } from "react";
import { connect } from "react-redux";

import $ from "jquery";

import { Add, Show, ShowOne, Delete, Search } from "../redux/user";

import Loading from "../layouts/loading";

class userDetail extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    var paramsiId = this.props.match.params.id;
    this.props.ShowOne(paramsiId);
  }

  render() {
    return (
      <div className="container">
        {this.props.users.activeUser ? (
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="form-group">
                    <input
                      className="form-control name"
                      ref="name"
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <input className="form-control job" ref="job" type="text" />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" ref="content" />
                  </div>
                  <div className="form-group">
                    <button
                      onClick={() =>
                        this.props.ShowOne(this.props.match.params.id)
                      }
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <strong>First Name:</strong> <br />
                  {this.props.users.activeUser.first_name}
                  <br />
                  <br />
                  <strong>Last Name:</strong> <br />
                  {this.props.users.activeUser.last_name}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

// CONTAINER
const stateToProps = state => ({
  users: state.users,
  activeUser: state.userActive
});

const dispatchToProps = dispatch => ({
  ShowOne: id => {
    return dispatch(ShowOne(id));
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(userDetail);
