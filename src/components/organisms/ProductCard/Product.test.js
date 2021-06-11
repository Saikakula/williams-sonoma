import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductCard from './ProductCard'
// import { mockData } from '../../../mock-data'

const DEFAULT_PROPS = {
  id: '123',
  name: 'sdfsdfsdf',
  price: 1,
  priceRange: [1, 2],
  thumbnail: 'www.google.com',
  carouselImages: ['www.google.com', 'www.google.com'],
}

/**
 * @jest-environment jsdom
 */

test('shows the correct name', () => {
  render(<ProductCard {...DEFAULT_PROPS} />)
  expect(screen.getByText(DEFAULT_PROPS.name)).toBeInTheDocument()
})

// test('use jsdom in this test file', () => {
//   const element = document.body.createElement('div')
//   expect(element).not.toBeNull()
// })

// test('shows the correct color', () => {
//   render(<ProductCard {...DEFAULT_PROPS} />)
//   expect(screen.getByText(DEFAULT_PROPS.product.color)).toBeInTheDocument()
// })

// test('shows the correct price', () => {
//   render(<ProductCard {...DEFAULT_PROPS} />)
//   expect(
//     screen.getByText(DEFAULT_PROPS.product.price.toString(), { exact: false })
//   ).toBeInTheDocument()
// })

// test('shows the correct quantity', () => {
//   render(<ProductCard {...DEFAULT_PROPS} />)
//   expect(
//     screen.getByText(DEFAULT_PROPS.product.quantity.toString())
//   ).toBeInTheDocument()
// })
