import React from 'react';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import IntregationTestValue from './IntregationTestValue';

describe("Test Intregation: Render data from api", () => {
  beforeEach(async () => {
    render(<IntregationTestValue />)
  })

  it("no render firstname & lastname before click fetch api", () => {
    expect(screen.queryByText('Kanin Lastname')).not.toBeInTheDocument();
  })
  it("render firstname & lastname correctly", () => {
    const fetchBtn = screen.getByRole("button", { name: "Fetch Data" })
    fireEvent.click(fetchBtn);
    waitFor(() => {
        expect(screen.getByText('Kanin Lastname')).toBeInTheDocument();
      }
    )
  })
})