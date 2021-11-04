import React from 'react';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import TestChangeValue from './TestChangeValue';

describe("Test Change Value", () => {
    beforeEach(() => {
        render(<TestChangeValue />)
    })
    it("should render initial text: Your Number is", () => {
        expect(screen.getByText('Your Number is')).toBeInTheDocument();
    })

    it("should render button with left text", () => {
        expect(screen.queryByRole('button', { name: 'Left' })).toBeInTheDocument();
    })

    it("should render button with right text", () => {
        expect(screen.queryByRole('button', { name: 'Right' })).toBeInTheDocument();
    })
}) 