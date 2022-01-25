import { CaveSideInterface } from './CaveSide.interface';
import { CaveTabsInterface } from './CaveTabs.interface';

export interface caveMainInterface {
  window: string
}

export interface CaveInterface {
  caveMainState: caveMainInterface
  caveSideState: CaveSideInterface
  caveTabsState: CaveTabsInterface
}
