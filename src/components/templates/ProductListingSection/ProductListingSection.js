import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

// styled components
import { ProductListGrid } from './style'
import ProductCard from '@organisms/ProductCard'

function ProductListingSection({ products, loading, error }) {
  /**
   * handlers
   */
  const renderProducts = (products) => {
    return Array.isArray(products)
      ? products.map((product) => {
          const { id, name, price, hero, images, priceRange } = product
          const thumbnail = getHeroThumbnail(hero)

          let carouselImages = Array.isArray(images)
            ? images.map((image) =>
                typeof image.href === 'string' ? image.href : ''
              )
            : []

          if (thumbnail) {
            carouselImages = [...carouselImages, thumbnail]
          }

          const regularPrice = getRegularPrice(price)
          const priceRangeSanitized = getPriceRange(priceRange)

          return (
            <ProductCard
              key={id}
              name={name}
              price={regularPrice}
              priceRange={priceRangeSanitized}
              thumbnail={thumbnail}
              carouselImages={carouselImages}
            />
          )
        })
      : null
  }
  return (
    <ProductListGrid>
      {loading ? (
        <FontAwesomeIcon icon={faSpinner} />
      ) : (
        renderProducts(products)
      )}
    </ProductListGrid>
  )
}

export default ProductListingSection

// helpers
const getPriceRange = (price) => {
  const { selling } = price || {}
  if (selling == undefined) return
  else if (typeof selling === 'number') return [selling]
  else return [selling.high, selling.low]
}

const getRegularPrice = (price) => {
  if (price && price.regular === 'number') {
    return price.regular
  }
  return 0
}

const getHeroThumbnail = (hero) => {
  if (hero && typeof hero.href === 'string') {
    return hero.href
  }
  return null
}
