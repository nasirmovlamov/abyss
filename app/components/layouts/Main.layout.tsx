import React, { ReactElement, ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode
  left?: ReactNode
  right?: ReactNode
  leftCol?: number | null
  middleCol?: number | null
  rightCol?: number | null
  leftLgCol?: number | null
  middleLgCol?: number | null
  rightLgCol?: number | null
}

const MainLayout = ({
  children,
  left,
  right,
  leftCol = 12,
  rightCol = 12,
  leftLgCol = 2,
  rightLgCol = 3,
  middleCol,
  middleLgCol,
}: MainLayoutProps) => {
  // Generate a column class with given parameters
  const generateColClass = (col: number | null, colLg: number | null) => {
    let classNames = []

    if (col) classNames.push(`col-${col}`)
    else classNames.push('d-lg-block d-none')

    if (colLg) classNames.push(`col-lg-${colLg}`)
    else classNames.push('d-lg-none d-block')

    return classNames.join(' ')
  }

  const calculateMiddleCol = (leftCol: number | null, rightCol: number | null) => {
    const leftRightSum = (leftCol || 0) + (rightCol || 0)

    return 12 - (leftRightSum <= 12 ? leftRightSum : 0)
  }

  return (
    <div className="container-fluid container-main h-100">
      <div className="row h-100">
        <div className={generateColClass(leftCol, leftLgCol)}>{left}</div>
        <div
          className={generateColClass(
            middleCol || calculateMiddleCol(leftCol, rightCol),
            middleLgCol || calculateMiddleCol(leftLgCol, rightLgCol),
          )}
        >
          {children}
        </div>
        <div className={generateColClass(rightCol, rightLgCol)}>{right}</div>
      </div>
    </div>
  )
}

export default MainLayout
