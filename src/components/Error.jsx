import React from "react";
import { useHistory } from "react-router-dom";

const Error = ({ img, title, action }) => {
  const history = useHistory();
  const checkIfHasActionProp = () => !!action && action();

  const onClick = () => {
    checkIfHasActionProp();
    history.push("/");
  };

  return (
    <div className="container">
      <img
        src={img}
        className="rounded mx-auto container w-50"
        alt="error-img"
      ></img>
      <h5 className="container p-2">{title}</h5>
      <button
        type="primary"
        className="btn btn-outline-success container"
        onClick={() => onClick()}
        data-toggle="tooltip"
        data-placement="top"
        title="This will fix the current Error."
      >
        Reset Page
      </button>
    </div>
  );
};

export default Error;
