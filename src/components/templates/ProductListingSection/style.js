import React from 'react'
import styled from '@emotion/styled'

export const ProductListGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 260px));
  justify-items: center;
  align-items: start;
  justify-content: center;

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 300px));
  }
`
