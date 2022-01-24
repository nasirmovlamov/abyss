import { cave_side_data } from 'app/store/slices/CaveFeatures/CaveSide.slice';
import { useAppSelector } from 'app/store/states/store.hooks';

import { cave_windows } from './Cave.windows';

interface Props {}

const CaveWindowRouter = (props: Props) => {
  const caveSideData = useAppSelector(cave_side_data)

  return <>{caveSideData.status === 'loaded' && cave_windows[caveSideData.selectedWindow]}</>
}

export default CaveWindowRouter
