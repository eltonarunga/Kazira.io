import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { JotformModal } from '../../components/common/JotformModal';

describe('JotformModal', () => {
  afterEach(() => {
    cleanup();
  });

  it('identifies the hosted form, warns against sensitive submissions, and provides safe links', async () => {
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

    expect(screen.getByText(/This form is hosted by Jotform/)).toBeInTheDocument();
    expect(screen.getByText(/do not include patient details, health information/)).toBeInTheDocument();

    const privacyLink = screen.getByRole('link', { name: 'Jotform Privacy Policy' });
    expect(privacyLink).toHaveAttribute('href', 'https://www.jotform.com/privacy/');
    expect(privacyLink).toHaveAttribute('target', '_blank');
    expect(privacyLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
