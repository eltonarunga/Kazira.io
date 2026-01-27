
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
 * Uses standard React class component patterns for maximum compatibility.
 */
// Fix: Extending Component directly to ensure TypeScript recognizes the inheritance chain correctly.
class ErrorBoundary extends Component<Props, State> {
  // Fix: Removed 'override' modifier which was incorrectly reported as having no base class to override.
  // Explicitly defining state for TS inference in class components
  public state: State = { hasError: false, error: undefined };

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  // Fix: Removed 'override' modifier to resolve compilation errors.
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error captured by boundary:", error, errorInfo);
  }

  handleRefresh = () => {
    window.location.reload();
  };

  // Fix: Removed 'override' modifier to resolve compilation errors.
  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="container mx-auto px-4 py-16 text-center" role="alert">
          <div className="bg-gray-100 border border-gray-400 text-gray-700 px-4 py-8 rounded-lg relative max-w-lg mx-auto shadow-lg">
            <h2 className="text-2xl font-bold mb-4">We've Hit a Snag!</h2>
            <p className="mb-6">An unexpected error occurred. A quick refresh of the page often fixes the issue.</p>
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

    // Fix: 'props' is now correctly recognized as part of the Component inheritance.
    return this.props.children;
  }
}

export default ErrorBoundary;
