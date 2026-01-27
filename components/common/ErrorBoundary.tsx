
import React, { Component, ErrorInfo, ReactNode } from 'react';
import Button from './Button';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * ErrorBoundary component to catch rendering errors in the component tree.
 */
// Fixed: Explicitly extend React.Component using the Component import with Props and State generics to ensure properties like 'state' and 'props' are correctly inherited and recognized by the compiler.
class ErrorBoundary extends Component<Props, State> {
  // Fixed: Use property initializer for state. This avoids issues where 'this.state' might not be recognized in the constructor in some TypeScript configurations.
  state: State = { hasError: false, error: undefined };

  // Static method used by React to update state after a child component throws an error
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  // Lifecycle method for logging error information
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error captured by boundary:", error, errorInfo);
  }

  // Handle page refresh as a class property arrow function to maintain 'this' context
  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    // Fixed: Destructure state and props to address "Property 'state'/'props' does not exist on type 'ErrorBoundary'" errors. 
    // This helps the compiler resolve these properties from the base class more reliably.
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className="container mx-auto px-4 py-16 text-center" role="alert">
          <div className="bg-gray-100 border border-gray-400 text-gray-700 px-4 py-8 rounded-lg relative max-w-lg mx-auto shadow-lg">
            <h2 className="text-2xl font-bold mb-4">We've Hit a Snag!</h2>
            <p className="mb-6">An unexpected error occurred. Our team has been notified, but a quick refresh of the page often fixes the issue.</p>
            <details className="text-left text-sm bg-gray-200 p-3 rounded-md mb-6 max-w-full overflow-auto">
              <summary className="cursor-pointer font-semibold">Error Details</summary>
              <pre className="mt-2 whitespace-pre-wrap break-all font-mono text-xs">
                <code>
                  {error?.toString()}
                </code>
              </pre>
            </details>
            <Button
              onClick={this.handleRefresh}
              variant="primary"
            >
              Refresh Page
            </Button>
          </div>
        </div>
      );
    }

    // Fixed: Use destructured 'children' instead of 'this.props.children' to resolve the property existence error on the Copilot/type-check level.
    return children;
  }
}

export default ErrorBoundary;
