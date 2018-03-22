import { combineReducers } from 'redux';

import { videos } from './VideoReducer';

const rootReducer = combineReducers({
  videos,
});

export default rootReducer;