import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background: var(--bg-light);
  margin-top: 60px;
  font-size: 12px;

  .heart-icon {
    font-size: 10px;
    margin: 0px 6px;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      Made with <FontAwesomeIcon icon={faHeart} className="heart-icon" /> by Sai
      Akula
    </FooterContainer>
  )
}

export default Footer
