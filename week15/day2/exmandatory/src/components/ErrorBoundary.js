import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: null,
    };
  }
  //   static getDerivedStateFromError(error) {
  //     return { hasError: true };
  //   }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
