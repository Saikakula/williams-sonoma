import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductCard from './ProductCard'
import ImageCarousel from './components/ImageCarousel'
import '@testing-library/jest-dom'

const DEFAULT_PROPS = {
  id: 'hth-gingham-stripe-bath-towel-b3588',
  name: 'Heather Taylor Home Gingham &amp; Stripe Bath Towels',
  price: 0,
  priceRange: [34.5, 24.5],
  thumbnail:
    'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0258/heather-taylor-home-gingham-stripe-bath-towel-2-m.jpg',
  carouselImages: [
    'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0260/heather-taylor-home-gingham-stripe-bath-towel-1-m.jpg',
    'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0259/heather-taylor-home-gingham-stripe-bath-towel-m.jpg',
    'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0285/heather-taylor-home-gingham-stripe-bath-towels-1-m.jpg',
  ],
}

test('shows the correct name', () => {
  render(<ProductCard {...DEFAULT_PROPS} />)
  expect(screen.getByText(DEFAULT_PROPS.name)).toBeInTheDocument()
})

test('shows the correct price', () => {
  render(<ProductCard {...DEFAULT_PROPS} />)
  expect(
    screen.getByText(DEFAULT_PROPS.priceRange[0].toString(), { exact: false })
  ).toBeInTheDocument()
})

test('shows the correct product images', () => {
  render(
    <ImageCarousel
      images={DEFAULT_PROPS.carouselImages}
      thumbnail={DEFAULT_PROPS.thumbnail}
    />
  )

  const productImage = screen.getByRole('img')
  expect(productImage).toHaveAttribute('src', DEFAULT_PROPS.carouselImages[0])
})
