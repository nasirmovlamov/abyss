import React, { useEffect } from 'react'

import CaveLayout from '../../components/Cave/CaveLayout'
import CaveWindowRouter from '../../components/Cave/Cave_Windows/CaveWindowRouter'

interface Props {}

const Cave = (props: Props) => {
  return (
    <CaveLayout>
      <CaveWindowRouter />
    </CaveLayout>
  )
}
export default Cave
