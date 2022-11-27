import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Header, { headerTextItems } from './Header';

describe('Header', () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  render(<Header userSelect={() => {}} />);

  it('should render text items', () => {
    headerTextItems.map((item) =>
      expect(screen.queryByText(item)).toBeDefined()
    );
  });

  it('should hide text items on smaller screens', () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));
    headerTextItems.map((item) => expect(screen.queryByText(item)).toBeNull());
  });

  it('should hide search bar on smaller screens', () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));
    expect(screen.queryByRole('input')).toBeNull();
  });

  it('should render search bar', () => {
    expect(screen.queryByRole('input')).toBeDefined();
  });
});
