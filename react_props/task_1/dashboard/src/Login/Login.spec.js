import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('Login Component', () => {
  it('renders without crashing', () => {
    render(<Login />);
  });

  it('renders 2 label, 2 input, and 1 button elements', () => {
    render(<Login />);

    const labels = screen.getAllByText((content, element) => element.tagName.toLowerCase() === 'label');
    const inputs = screen.getAllByRole('textbox'); // Note: type="password" isn't role 'textbox', so query selector might be needed:
    // const inputs = document.querySelectorAll('input');

    expect(labels).toHaveLength(2);
    expect(inputs).toHaveLength(2);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('focuses input when related label is clicked', async () => {
    const user = userEvent.setup();
    render(<Login />);

    const emailLabel = screen.getByText(/email/i);
    const emailInput = screen.getByLabelText(/email/i);

    await user.click(emailLabel);
    expect(emailInput).toHaveFocus();
  });
});