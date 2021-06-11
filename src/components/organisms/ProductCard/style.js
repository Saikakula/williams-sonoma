import React from 'react'
import styled from '@emotion/styled'

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  cursor: pointer;
`

export const ProductDescription = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`

export const ProductName = styled.li`
  display: flex;
  font-size: 14px;
`

export const ProductPrice = styled.li`
  display: flex;
  font-size: 13px;
  margin-top: 2px;
  font-weight: 600;
  color: #222222;
`
