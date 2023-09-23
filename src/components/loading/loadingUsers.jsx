import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

class LoadingUsers extends Component {
  state = {};
  array = Array(6).fill({});
  elementsGenerator() {
    let element = this.array.map((data) => {
      return (
        <>
          <div className="col text-center p-2">
            <div className="card">
              <Skeleton
                className=""
                circle={false}
                height={150}
                width={"100%"}
              />
              <Skeleton className="mb-2" height={30} count={2} />
            </div>
          </div>
        </>
      );
    });
    return element;
  }
  render() {
    return this.elementsGenerator();
  }
}

export default LoadingUsers;
