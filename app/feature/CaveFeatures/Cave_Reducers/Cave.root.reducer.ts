import { combineReducers } from 'redux';
import caveSideReducer from '../CaveSide.slice';
import caveTabsReducer from '../CaveTabs.slice';
import caveMainReducer from '../Cave.slice';


export default combineReducers({
    caveMainReducer,
    caveSideReducer,
    caveTabsReducer,
})

// This would produce the following state object
