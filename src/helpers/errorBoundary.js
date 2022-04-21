import React, { Component } from "react";
import Error from "../components/Error";

export const errorBoundary = (WrappedComponent) => {
  const resetError = (context) => context.setState({ error: false });
  const img =
    "https://cdn1.vectorstock.com/i/1000x1000/43/65/boy-at-computer-and-oops-vector-38214365.jpg";

  return class extends Component {
    state = { error: true };
    static getDerivedStateFromError = () => ({ error: true });

    render() {
      const { props, state } = this;
      const { error } = state;
      const title = "Please reset the page to reload...";
      const action = () => resetError(this);
      const ErrorRender = <Error img={img} title={title} action={action} />;
      const NormalRender = <WrappedComponent {...props} />;

      return error ? ErrorRender : NormalRender;
    }
  };
};
