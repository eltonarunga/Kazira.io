
import React, { Component, ErrorInfo, ReactNode } from 'react';
import Button from './Button';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: undefined,
  };

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleRefresh = () => {
    // Attempt to recover by reloading the page
    window.location.reload();
  };

  render() {
    const { hasError, error } = this.state;

    if (hasError) {
      // You can render any custom fallback UI
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

    return this.props.children;
  }
}

export default ErrorBoundary;