import { CaveInterface, caveMainInterface } from '../../interfaces/Cave_Interfaces/Cave.interface';
import { caveSideState } from './CaveSide.state';
import { caveTabsState } from './CaveTabs.state';

const caveMainState: caveMainInterface = {
  window: '',
}

export const CaveState: CaveInterface = {
  caveMainState: caveMainState,
  caveSideState: caveSideState,
  caveTabsState: caveTabsState,
}
