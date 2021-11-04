import React from 'react';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import TestFormSummit from './TestFormSummit';
import saveFullNameAPI from '../../api/saveFullNameAPI';
import userEvent from '@testing-library/user-event';

jest.mock('../../api/saveFullNameAPI');

describe("Fill right value to correct form input", () => {
    beforeEach(() => {
        render(<TestFormSummit />)
    })

    it("fill correct input", () => {
        var correctData = {
            firstName: 'Kan',
            lastName: 'Jirawat'
        };
        var firstName = screen.queryByLabelText('First Name:');
        var lastName = screen.queryByLabelText('Last Name:');

        fireEvent.change(firstName, {
            target: { value: 'Kan' },
        });

        fireEvent.change(lastName, {
            target: { value: 'Jirawat' },
        });
        
        userEvent.click(screen.getByRole('button', { name: 'Submit' }))

        expect(saveFullNameAPI.save).toHaveBeenCalledWith(correctData);
    })
})