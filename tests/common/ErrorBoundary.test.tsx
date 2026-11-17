import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import ErrorBoundary from '../../components/common/ErrorBoundary';

const BrokenChild = () => {
  throw new Error('internal implementation detail');
};

describe('ErrorBoundary', () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it('renders a safe fallback without exposing the exception message', () => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined);

    render(
      <ErrorBoundary>
        <BrokenChild />
      </ErrorBoundary>,
    );

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('Something Went Wrong')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Reload Page' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Return to Home' })).toBeInTheDocument();
    expect(screen.queryByText(/internal implementation detail/i)).not.toBeInTheDocument();
  });
});
