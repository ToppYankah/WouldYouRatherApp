import React from "react";

const NotFound = ({message}) => {
  return (
    <div className="not-found">
        <span className="ion-sad-outline"></span>
        <h2>404</h2>
        <h3>Page Not Found</h3>
        <p>{message ? message : "The page you are looking for does not exist"}</p>
    </div>
  );
};

export default NotFound;
