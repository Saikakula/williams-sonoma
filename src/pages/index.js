import React from 'react'
import styled from '@emotion/styled'

// components
import Header from '@organisms/Header'
import Footer from '@organisms/Footer'
import ProductListingSection from '@templates/ProductListingSection'

// contexts
import { useGlobalContext } from '@contexts/GlobalContext'

// hooks
import useGetAllProductByCategory from '@hooks/product/useGetAllProductByCategory'

// styled components
const HomePageWrapper = styled.div`
  display: flex;
  width: full;
  flex-direction: column;
  min-height: 100vh;
`

const ProductListWrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 990px;
  padding: 0px;
  margin: 30px auto;
  margin-top: 30px;

  @media screen and (max-width: 480px) {
    margin: 20px auto;
    margin-top: 30px;
  }
`

export default function Home() {
  /**
   * side-effects
   */

  const { searchQuery } = useGlobalContext()
  const { data: products, loading, error } = useGetAllProductByCategory()

  /**
   * handlers
   */
  const filterProducts = (query, products) => {
    if (Array.isArray(products) && typeof query === 'string' && query.length) {
      const caseInsensitiveQuery = query.toLowerCase()
      return products.filter((product) => {
        const caseInsensitiveName =
          typeof product.name == 'string' ? product.name.toLowerCase() : null
        return caseInsensitiveName && caseInsensitiveQuery
          ? caseInsensitiveName.includes(caseInsensitiveQuery)
          : false
      })
    }
    return products
  }

  const filteredProducts = filterProducts(searchQuery, products)
  return (
    <HomePageWrapper>
      <Header />
      <ProductListWrapper>
        <ProductListingSection
          products={filteredProducts}
          loading={loading}
          error={error}
        />
      </ProductListWrapper>
      <Footer />
    </HomePageWrapper>
  )
}
