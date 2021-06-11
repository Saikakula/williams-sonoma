import React from 'react'
import PropTypes from 'prop-types'

import SearchBar from './components/SearchBar'

// contexts
import { useGlobalContext } from '@contexts/GlobalContext'

// styled components
import {
  HeaderContainer,
  BrandLogo,
  BrandPromo,
  SearchBarWrapper,
  PrimaryNavigation,
  NavigationItem,
} from './style'

function Header(props) {
  /**
   * side-effects
   */

  const { onSearchQueryChange, value } = useGlobalContext()
  return (
    <HeaderContainer>
      <BrandPromo>
        Get It in time before the sale expires! 4 Days Left to Order
      </BrandPromo>
      <BrandLogo>
        <img
          className="img"
          src="./assets/images/brand-logo.svg"
          alt="brand logo"
        />
      </BrandLogo>
      <SearchBarWrapper>
        <SearchBar
          style={{ width: '600px' }}
          onSearch={onSearchQueryChange}
          defaultValue=""
        />
      </SearchBarWrapper>
      <PrimaryNavigation>
        <NavigationItem>New Arrival</NavigationItem>
        <NavigationItem>Hot Deals</NavigationItem>
        <NavigationItem>Heavy Discount</NavigationItem>
        <NavigationItem style={{ marginLeft: 'auto' }}>Sale</NavigationItem>
      </PrimaryNavigation>
    </HeaderContainer>
  )
}

Header.propTypes = {}

export default Header
