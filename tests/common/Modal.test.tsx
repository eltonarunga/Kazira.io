import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import Modal from '../../components/common/Modal';

describe('Modal', () => {
  let opener: HTMLButtonElement;

  beforeEach(() => {
    opener = document.createElement('button');
    opener.textContent = 'Open modal';
    document.body.appendChild(opener);
    opener.focus();
  });

  afterEach(() => {
    cleanup();
    opener.remove();
  });

  it('exposes a labelled modal dialog and moves focus into it', async () => {
    render(
      <Modal isOpen onClose={vi.fn()} title="Contact Kazira">
        <button type="button">Continue</button>
      </Modal>,
    );

    const dialog = await screen.findByRole('dialog', { name: 'Contact Kazira' });
    expect(dialog).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Close modal' })).toHaveFocus();
  });

  it('traps keyboard focus and closes on Escape', async () => {
    const onClose = vi.fn();
    render(
      <Modal isOpen onClose={onClose} title="Keyboard test">
        <button type="button">Last action</button>
      </Modal>,
    );

    const closeButton = await screen.findByRole('button', { name: 'Close modal' });
    const lastAction = screen.getByRole('button', { name: 'Last action' });

    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true });
    expect(lastAction).toHaveFocus();

    fireEvent.keyDown(document, { key: 'Tab' });
    expect(closeButton).toHaveFocus();

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledOnce();
  });

  it('restores focus to the opener when closed', async () => {
    const onClose = vi.fn();
    const view = render(<Modal isOpen onClose={onClose} title="Focus return" />);

    await screen.findByRole('dialog', { name: 'Focus return' });
    view.rerender(<Modal isOpen={false} onClose={onClose} title="Focus return" />);

    expect(opener).toHaveFocus();
  });
});
