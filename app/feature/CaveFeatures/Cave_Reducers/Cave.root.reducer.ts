import { combineReducers } from 'redux';

import caveMainReducer from '../Cave.slice';
import caveSideReducer from '../CaveSide.slice';
import caveTabsReducer from '../CaveTabs.slice';

export default combineReducers({
  caveMainReducer,
  caveSideReducer,
  caveTabsReducer,
})

// This would produce the following state object
