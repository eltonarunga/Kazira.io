
import React from 'react';
import Button from './Button';

interface Props {
  children?: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * ErrorBoundary component to catch rendering errors in the component tree.
 */
// Fix: Explicitly extending React.Component to ensure 'props' and 'state' are correctly inherited and recognized by TypeScript.
class ErrorBoundary extends React.Component<Props, State> {
  // Fix: Using property initialization for state to avoid constructor-related 'this' binding issues and property existence errors.
  public state: State = {
    hasError: false,
    error: undefined,
  };

  /**
   * Static method used to update state after an error has been thrown by a descendant component.
   */
  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  /**
   * Lifecycle method for logging error information and performing side effects.
   */
  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error captured by boundary:", error, errorInfo);
  }

  /**
   * Helper method to refresh the application state by reloading the page.
   */
  private handleRefresh = () => {
    window.location.reload();
  };

  public render(): React.ReactNode {
    // Fix: Accessing inherited 'state' from React.Component.
    if (this.state.hasError) {
      return (
        <div className="container mx-auto px-4 py-16 text-center" role="alert">
          <div className="bg-gray-100 border border-gray-400 text-gray-700 px-4 py-8 rounded-lg relative max-w-lg mx-auto shadow-lg">
            <h2 className="text-2xl font-bold mb-4">We've Hit a Snag!</h2>
            <p className="mb-6">An unexpected error occurred. Our team has been notified, but a quick refresh of the page often fixes the issue.</p>
            <details className="text-left text-sm bg-gray-200 p-3 rounded-md mb-6 max-w-full overflow-auto">
              <summary className="cursor-pointer font-semibold">Error Details</summary>
              <pre className="mt-2 whitespace-pre-wrap break-all font-mono text-xs">
                <code>
                  {this.state.error?.toString()}
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

    // Fix: Accessing inherited 'props' from React.Component.
    return this.props.children || null;
  }
}

export default ErrorBoundary;
