import React, { ReactElement, ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode
  left?: ReactNode
  right?: ReactNode
}

const MainLayout = ({ children, left, right }: MainLayoutProps) => {
  return (
    // <MainLayoutStyle>
    //   <SidePartOfPageStyle side="left">{left}</SidePartOfPageStyle>
    //   <MiddleStyle>{children}</MiddleStyle>
    //   <SidePartOfPageStyle side="right">{right}</SidePartOfPageStyle>
    // </MainLayoutStyle>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2">{left}</div>
        <div className="col-lg-7">{children}</div>
        <div className="col-lg-3">{right}</div>
      </div>
    </div>
  )
}

export default MainLayout
