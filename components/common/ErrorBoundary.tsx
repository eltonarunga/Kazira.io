import React, { Component, ErrorInfo, ReactNode } from 'react';
import Button from './Button';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * ErrorBoundary component to catch rendering errors in the component tree.
 * Protects users from internal stack/exception exposure.
 */
class ErrorBoundary extends Component<Props, State> {
  override state: State = { hasError: false };

  constructor(props: Props) {
    super(props);
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Capture to console for developer diagnostics without displaying to end users
    console.error("Application error captured by boundary:", error, errorInfo);
  }

  handleRefresh = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/#/';
  };

  override render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="container mx-auto px-4 py-20 text-center" role="alert">
          <div className="bg-white border border-gray-200 text-black px-6 py-10 rounded-2xl max-w-lg mx-auto shadow-xl">
            <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="font-serif text-2xl font-bold">!</span>
            </div>
            <h2 className="text-2xl font-serif font-bold mb-3">Something Went Wrong</h2>
            <p className="text-black/60 font-light mb-8 leading-relaxed text-sm">
              An unexpected error occurred while loading this view. You can reload the page or return to the main platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={this.handleRefresh}
                variant="gold"
                size="md"
              >
                Reload Page
              </Button>
              <Button
                onClick={this.handleGoHome}
                variant="outline"
                size="md"
              >
                Return to Home
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
