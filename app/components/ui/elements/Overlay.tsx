import React, { ReactElement } from 'react'

interface Props {}

function OverlayBackground({}: Props): ReactElement {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        zIndex: 999,
        backgroundColor: 'rgba(0,0,0,0.4)',
        position: 'fixed',
        pointerEvents: 'none',
      }}
    ></div>
  )
}

export default OverlayBackground
