import React, { useState } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// styled components
const SearchBarContainer = styled.div`
  display: flex;
  border: 1px solid #555;
`

const SearchInput = styled.input`
  display: flex;
  padding: 6px;
  flex-grow: 1;
  outline: none;
  border: none;
  font-size: 14px;
`

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 30px;
  height: full;
  outline: none;
  border: none;
  background: #555;
  font-size: 13px;
  color: #fff;
`

function SearchBar({ defaultValue = '', onSearch, ...restProps }) {
  /**
   * state
   */
  const [searchQuery, setSearchQuery] = useState(defaultValue)

  /**
   * event handlers
   */
  const handleSearchInputChange = (event) => {
    const { value } = event.target
    setSearchQuery(value)
    if (value.length === 0) {
      onSearch(value)
    }
  }

  const handleInputQuerySearch = () => {
    if (typeof searchQuery === 'string') {
      onSearch(searchQuery)
    }
  }

  const handleSearchInputEnterPressed = (event) => {
    if (event.key === 'Enter') {
      handleInputQuerySearch()
    }
  }
  return (
    <SearchBarContainer {...restProps}>
      <SearchInput
        placeholder="What are you looking for?"
        value={searchQuery}
        onChange={handleSearchInputChange}
        onKeyDown={handleSearchInputEnterPressed}
        autoFocus={true}
      />
      <SearchButton onClick={handleInputQuerySearch}>
        <FontAwesomeIcon icon={faSearch} />
      </SearchButton>
    </SearchBarContainer>
  )
}

export default SearchBar
