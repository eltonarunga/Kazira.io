import '@testing-library/jest-dom/vitest';

// jsdom does not calculate layout, but the modal uses this API to exclude
// hidden elements from its keyboard-focus sequence.
Object.defineProperty(HTMLElement.prototype, 'getClientRects', {
  configurable: true,
  value() {
    return [this.getBoundingClientRect()];
  },
});
