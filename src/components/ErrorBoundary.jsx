import { Component } from 'react';

export class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const Fallback = this.props.fallback;
      if (Fallback) return <Fallback error={this.state.error} onRetry={() => this.setState({ hasError: false, error: null })} />;
      return (
        <div className="min-h-[200px] flex flex-col items-center justify-center gap-4 p-8 text-center text-white bg-black-200 rounded-lg border border-black-300">
          <p className="text-gray_gradient font-semibold">Something went wrong loading this section.</p>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false, error: null })}
            className="btn px-6 py-2 rounded-md"
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
