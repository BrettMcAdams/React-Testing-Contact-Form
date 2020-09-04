import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('Contact form succesfully shows data input', () => {
    render(<ContactForm />);

    const fNameInput = screen.getByLabelText('firstName');
    const lNameInput = screen.getByLabelText('lastName');
    const emailInput = screen.getByLabelText('email');
    const messageInput = screen.getByLabelText('message');

    // fireEvent.change(fNameInput, { target: { value: 'Bret' } });
    // fireEvent.change(lNameInput, { target: { value: 'McAdams' } });
    // fireEvent.change(emailInput, { target: { value: 'Brett@Brett.brett' } });
    // fireEvent.change(messageInput, { target: { value: 'testing' } });


})