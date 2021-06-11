import React, { useState, useEffect } from 'react'

import { getAllProductByCategory } from '@services/product'

function useGetAllProductByCategory() {
  /**
   * state
   */
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  /**
   * side-effects
   */

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    setError(null)
    setData(null)
    setLoading(true)
    try {
      const payload = await getAllProductByCategory()
      const products =
        payload && Array.isArray(payload.groups) ? payload.groups : []
      setData(products)
    } catch (error) {
      const errorMsg = (error && error.message) || ''
      setError(errorMsg)
    } finally {
      setLoading(false)
    }
  }

  return {
    data,
    error,
    loading,
  }
}

export default useGetAllProductByCategory
