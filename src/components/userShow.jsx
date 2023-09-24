import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const UserShow = () => {
  const [user, setUser] = useState({});
  const params = useParams();
  async function getInformation() {
    const response = await axios.get(
      `https://reqres.in/api/users/${params.id}`
    );
    setUser(response.data.data);
  }
  useEffect(() => {
    getInformation();
  });
  return (
    <>
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="text-center h3">User</h1>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center p-2">
          <div className="card">
            <img
              className="card-img-top m-auto"
              src={user.avatar}
              alt="Avatar"
              style={{ width: "150px", height: "150px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                {user.first_name} {user.last_name}
              </h5>
              <p className="card-text">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserShow;
