import React, { ReactElement, ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode
  left?: ReactNode
  right?: ReactNode
}

const MainLayout = ({ children, left, right }: MainLayoutProps) => {
  return (
    <div className="container-lg container">
      <div className="row">
        <div className="col-lg-2">{left}</div>
        <div className="col-lg-7">{children}</div>
        <div className="col-lg-3">{right}</div>
      </div>
    </div>
  )
}

export default MainLayout
