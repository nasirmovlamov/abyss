import React from 'react'
import { cave_side_data } from '../../../app/feature/CaveFeatures/CaveSide.slice'
import { cave_windows } from './Cave.windows'
import { useAppSelector } from '../../../app/store/hooks'

interface Props {}

const CaveWindowRouter = (props: Props) => {
  const caveSideData = useAppSelector(cave_side_data)

  return <>{caveSideData.status === 'loaded' && cave_windows[caveSideData.selectedWindow]}</>
}

export default CaveWindowRouter
