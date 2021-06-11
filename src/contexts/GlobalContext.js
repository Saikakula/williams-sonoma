import React, { createContext, useState, useContext } from 'react'

const GlobalContext = createContext()

function GlobalProvider({ children }) {
  /**
   * state
   */
  const [searchQuery, setSearchQuery] = useState('')

  /**
   * handlers
   */

  const handleSearchQueryChange = (query) => {
    if (typeof query === 'string') {
      setSearchQuery(query)
    }
  }

  const value = {
    searchQuery,
    onSearchQueryChange: handleSearchQueryChange,
  }

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  )
}

const useGlobalContext = () => {
  const context = useContext(GlobalContext)
  if (context === undefined) {
    throw new Error(
      'useGlobalContext should not be accessed outside of GlobalProvider!'
    )
  }
  return context
}

export { GlobalContext, GlobalProvider, useGlobalContext }
