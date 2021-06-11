import React, { useState, useEffect, useRef } from 'react'
import styled from '@emotion/styled'

export const ImageCarouselContainer = styled.div`
  display: flex;
  width: 100%;
  height: 240px;
  position: relative;
  background-color: #efefef;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: fill;
    width: 100%;
    height: auto;
    font-size: 12px;
  }

  .hidden {
    bottom: -24px;
  }

  &:hover {
    .hidden {
      bottom: 0px;
    }
  }
`

export const CarouselNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 100%;
  position: absolute;
  left: 0px;
  background: rgba(0, 0, 0, 0.25);
  z-index: 1000;
`

export const NavigationButton = styled.div`
  display: flex;
  height: 10px;
  width: 10px;
  border-radius: 100%;
  margin: 0px 4px;
  background-color: ${(props) =>
    props.active ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.75)'};
`

const ImageCarousel = ({ images }) => {
  const hasCarouselImages = images.length ? true : false
  const carouselImageCount = images.length

  const carouselImageRef = useRef(null)
  /**
   * state
   */
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isCarouselFocused, setCarouselFocused] = useState(false)
  const [isNavigationFocused, setNavigationFocused] = useState(false)

  /**
   * side-effects
   */

  useEffect(() => {
    // if carousel is not focused, return early
    if (!isCarouselFocused || isNavigationFocused) return

    // keep a reference of interval to clear it later
    const intervalRef = setInterval(updateImageIndex, 2000)

    return () => {
      // clear interval on unmount
      clearInterval(intervalRef)
      if (carouselImageRef.current) {
        carouselImageRef.current.classList.add('fade-in-image')
        carouselImageRef.current.classList.remove('fade-out-image')
      }
    }
  }, [
    isCarouselFocused,
    isNavigationFocused,
    updateImageIndex,
    activeImageIndex,
  ])

  /**
   * handlers
   */

  function updateImageIndex() {
    if (carouselImageRef.current) {
      carouselImageRef.current.classList.add('fade-out-image')
      carouselImageRef.current.classList.remove('fade-in-image')
    }

    if (activeImageIndex < carouselImageCount - 1) {
      setActiveImageIndex(activeImageIndex + 1)
    } else {
      setActiveImageIndex(0)
    }
  }

  const handleNavigationFocused = (focused) => {
    if (typeof focused === 'boolean' && focused !== isNavigationFocused) {
      setNavigationFocused(focused)
    }
  }

  const handleCarouselFocused = (focused) => {
    if (typeof focused === 'boolean' && focused !== isCarouselFocused) {
      setCarouselFocused(focused)
    }
  }

  const handleNavigationButtonClick = (imageIndex) => {
    if (typeof imageIndex === 'number' && activeImageIndex !== imageIndex) {
      setActiveImageIndex(imageIndex)
    }
  }

  const previewImage =
    images[activeImageIndex] || './assets/images/no-image.svg'

  return (
    <ImageCarouselContainer
      onMouseEnter={() => handleCarouselFocused(true)}
      onMouseLeave={() => handleCarouselFocused(false)}
    >
      <img src={previewImage} alt="product image" ref={carouselImageRef} />
      {hasCarouselImages && (
        <CarouselNavigation
          className="hidden"
          onMouseEnter={() => handleNavigationFocused(true)}
          onMouseLeave={() => handleNavigationFocused(false)}
        >
          {images.map((dot, idx) => {
            return (
              <NavigationButton
                key={idx}
                active={idx === activeImageIndex}
                onClick={() => handleNavigationButtonClick(idx)}
              />
            )
          })}
        </CarouselNavigation>
      )}
    </ImageCarouselContainer>
  )
}

export default ImageCarousel
