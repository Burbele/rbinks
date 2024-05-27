import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }; // Initialize state to track error status
  }

  // Update state when an error is encountered
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Log error details
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI if an error is encountered
      return <h1>Something went wrong.</h1>;
    }

    // Render children components if no error is encountered
    return this.props.children;
  }
}

export default ErrorBoundary;
