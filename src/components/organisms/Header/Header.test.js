import React from 'react'
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './Header'
import { GlobalProvider } from '@contexts/GlobalContext'

describe('Header', () => {
  it('should render the header', () => {
    render(
      <GlobalProvider>
        <Header />
      </GlobalProvider>
    )
    const div = screen.getByText(
      /Get It in time before the sale expires! 4 Days Left to Order/i
    )

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(div).toBeInTheDocument()
  })
})
