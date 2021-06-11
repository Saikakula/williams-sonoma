import React from 'react'
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from './Footer'
import { GlobalProvider } from '@contexts/GlobalContext'

describe('Footer', () => {
  it('should render the footer', () => {
    render(
      <GlobalProvider>
        <Footer />
      </GlobalProvider>
    )
    const div = screen.getByText(/Made with/i)

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(div).toBeInTheDocument()
  })
})
