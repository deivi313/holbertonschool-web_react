import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders the string "Copyright {current year} - Holberton School" when getFooterCopy is true', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const expectedText = `Copyright ${currentYear} - Holberton School`;

    const paragraph = screen.getByText(new RegExp(expectedText, 'i'));
    expect(paragraph).toBeInTheDocument();
  });
});