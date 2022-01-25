import React, { ReactElement, ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode
  left?: ReactNode
  right?: ReactNode
  leftCol?: number
  rightCol?: number
}

const MainLayout = ({ children, left, right, leftCol = 2, rightCol = 3 }: MainLayoutProps) => {
  return (
    <div className="container-fluid container-main h-100">
      <div className="row h-100">
        <div className={`col-lg-${leftCol}`}>{left}</div>
        <div className={`col-lg-${12 - (leftCol + rightCol)}`}>{children}</div>
        <div className={`col-lg-${rightCol}`}>{right}</div>
      </div>
    </div>
  )
}

export default MainLayout
