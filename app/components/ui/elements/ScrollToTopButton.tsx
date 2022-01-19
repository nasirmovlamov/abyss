import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { ScrollToTop_STY } from '../../../styles/ScrollToTop.style'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useScrollYPosition } from 'react-use-scroll-position'

interface Props {}

export const ScrollToTopButton = (props: Props) => {
  const scrollY = useScrollYPosition()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <ScrollToTop_STY
      scrollY={scrollY}
      onClick={scrollToTop}
      style={{ position: 'fixed', bottom: '30px', right: '30px' }}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </ScrollToTop_STY>
  )
}
