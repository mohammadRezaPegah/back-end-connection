import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import queryString from "query-string";
const UserShow = (props) => {
  const [user, setUser] = useState({});
  const params = useParams();
  console.log(props);
  // To use query location in url you most use query string package to parse information, That installed by below command <--comment
  // npm i query-string <--comment
  const query_param = queryString.parse(useLocation().search);
  //   console.log(query_param);
  async function getInformation() {
    const response = await axios.get(
      `https://reqres.in/api/users/${params.id}`
    );
    setUser(response.data.data);
  }
  useEffect(() => {
    getInformation();
    return () => {};
  }, []);
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
            <div className="row">
              <div className="col-12 text-center">
                <button
                  className="btn btn-warning mt-4"
                  onClick={() => {
                    window.location.replace("/users");
                  }}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserShow;
