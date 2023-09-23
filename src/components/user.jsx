import React, { Component } from "react";
class User extends Component {
  render() {
    return (
      <>
        <div className="col text-center p-2">
          <div className="card">
            <img
              className="card-img-top rounded-circle m-auto"
              src={this.props.avatar}
              alt="Avatar"
              style={{ with: "150px", height: "150px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                {this.props.first_name} {this.props.last_name}
              </h5>
              <p className="card-text">{this.props.email}</p>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <button
                    className="btn btn-primary btn-sm w-100"
                    onClick={() => {
                      this.update(this.props.id);
                    }}
                  >
                    Update
                  </button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <button
                    className="btn btn-danger btn-sm w-100"
                    onClick={() => {
                      this.delete(this.props.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  update = (user) => {};
  delete = (user) => {};
}

export default User;
