import React from 'react'
import styled from '@emotion/styled'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: full;
  padding: 0px;
`

export const BrandPromo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: full;
  padding: 2px 10px;
  background: var(--bg-light);
  height: 30px;
  font-size: 13px;
  color: var(--text-primary);
`

export const BrandLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: full;
  padding: 10px;
  margin-top: 20px;

  .img {
    display: block;
    height: 50px;
    width: auto;
  }

  @media screen and (max-width: 480px) {
    .img {
      display: block;
      height: auto;
      width: 80%;
    }
  }
`

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: full;
  padding: 0px 10px;
`

export const PrimaryNavigation = styled.div`
  display: flex;
  align-items: center;
  width: full;
  padding: 0px 10px;
  background: var(--bg-dark);
  min-height: 30px;
  margin-top: 20px;
`

export const NavigationItem = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 24px;
  font-size: 12px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  height: 30px;
  text-transform: uppercase;

  &:hover {
    background: #cccccc;
    color: var(--text-primary);
  }
`
