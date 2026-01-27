
import React, { ErrorInfo, ReactNode } from 'react';
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
// FIX: Using React.Component and explicit property declarations to ensure TypeScript recognizes state and props correctly.
class ErrorBoundary extends React.Component<Props, State> {
  // FIX: Explicitly declaring the state property to satisfy TypeScript's property existence checks.
  public state: State = {
    hasError: false,
    error: undefined,
  };

  constructor(props: Props) {
    super(props);
  }

  // Static method used to update state after an error has been thrown by a descendant component.
  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  // Lifecycle method for logging error information and performing side effects.
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Standard error logging for debugging purposes
    console.error("Uncaught error captured by boundary:", error, errorInfo);
  }

  // Helper method to refresh the application state by reloading the page.
  private handleRefresh = () => {
    // Attempt to recover by reloading the application context
    window.location.reload();
  };

  public render(): ReactNode {
    // FIX: Accessing state and props via 'this' to resolve property existence errors.
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      // Graceful fallback UI for production reliability
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

    return children || null;
  }
}

export default ErrorBoundary;
