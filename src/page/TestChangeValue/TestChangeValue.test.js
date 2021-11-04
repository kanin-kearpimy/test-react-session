import React from 'react';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import TestChangeValue from './TestChangeValue';
import userEvent from '@testing-library/user-event';

describe("Test Change Value initially", () => {
    beforeEach(() => {
        render(<TestChangeValue />)
    })
    it("should render initial text: Your Number is", () => {
        expect(screen.queryByText('Your Number is:')).toBeInTheDocument();
    })

    it("should render button with left text", () => {
        expect(screen.queryByRole('button', { name: 'Left' })).toBeInTheDocument();
    })

    it("should render button with right text", () => {
        expect(screen.queryByRole('button', { name: 'Right' })).toBeInTheDocument();
    })

    it("render 'left' when click left button", async () => {
        const value = 'left'
        await act(async () => {
                userEvent.click(screen.queryByRole('button', { name: 'Left' }));
            }
        );
        expect(screen.queryByText(`Your Number is: ${value}`))
    })

    it("render 'right' when click right button", async () => {
        const value = 'right'
        await act(async () => {
                userEvent.click(screen.queryByRole('button', { name: 'Right' }));
            }
        );
        expect(screen.queryByText(`Your Number is: ${value}`))
    })
}) 