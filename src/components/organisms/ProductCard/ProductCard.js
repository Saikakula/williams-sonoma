import React from 'react'

// styled components
import {
  ProductCardContainer,
  ProductDescription,
  ProductName,
  ProductPrice,
} from './style'

import ImageCarousel from './components/ImageCarousel'

// utils
import { formatter } from '@utils/formatter'

function ProductCard({
  id,
  name,
  price,
  priceRange,
  thumbnail,
  carouselImages,
}) {
  const productPrice =
    typeof price === 'number' && price !== 0
      ? formatter.format(price)
      : Array.isArray(priceRange)
      ? priceRange.map((price) => formatter.format(price)).join(' - ')
      : formatter.format(price)

  return (
    <ProductCardContainer>
      <ImageCarousel images={carouselImages} thumbnail={thumbnail} />
      <ProductDescription>
        <ProductName>{name}</ProductName>
        <ProductPrice>{productPrice}</ProductPrice>
      </ProductDescription>
    </ProductCardContainer>
  )
}

export default ProductCard
