import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ScrollToTop_STY } from 'app/styles/styled-components/components/elements/ScrollToTop.style';
import React from 'react';
import { useScrollYPosition } from 'react-use-scroll-position';

export const ScrollToTopButton = () => {
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
