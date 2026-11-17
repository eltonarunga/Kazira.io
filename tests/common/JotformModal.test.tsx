import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { JotformModal } from '../../components/common/JotformModal';

describe('JotformModal', () => {
  afterEach(() => {
    cleanup();
  });

  it('identifies the hosted form and provides a safe external handoff', async () => {
    const formUrl = 'https://form.jotform.com/123456789012345';

    render(
      <JotformModal
        isOpen
        onClose={vi.fn()}
        title="Request a consultation"
        formUrl={formUrl}
      />,
    );

    const iframe = await screen.findByTitle('Request a consultation');
    expect(iframe).toHaveAttribute('src', formUrl);
    expect(iframe).toHaveAttribute('referrerpolicy', 'strict-origin-when-cross-origin');

    const externalLink = screen.getByRole('link', { name: /open in new tab/i });
    expect(externalLink).toHaveAttribute('href', formUrl);
    expect(externalLink).toHaveAttribute('target', '_blank');
    expect(externalLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(screen.getByText('This form is hosted by Jotform.')).toBeInTheDocument();
  });
});
