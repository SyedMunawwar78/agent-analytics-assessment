import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {

    test('renders button with title', () => {
        render(<Button title="Click" />);
        expect(screen.getByText('Click')).toBeInTheDocument();
    });

    test('executes onClick function when clicked', () => {
        const onClick = jest.fn();
        render(<Button title="Click" onClick={onClick} />);
        fireEvent.click(screen.getByText('Click'));
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    test('button is disabled when disabled prop is true', () => {
        render(<Button title="Click" disabled />);
        const button = screen.getByText('Click');
        expect(button).toBeDisabled();
      });

});
