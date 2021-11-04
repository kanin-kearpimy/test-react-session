import React from 'react';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import Home from './Home'

describe("Index Page Test Case", () => {
    beforeEach(async () => {
        render(<Home />)
    })
    it("Should render Hello World Index Page", () => {
        expect(screen.getByText('React Test with Jest')).toBeInTheDocument();
    })
})