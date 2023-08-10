import { combineReducers } from 'redux';

import accountReducer from 'slice/accountSlice';
import appDeviceReducer from 'slice/appDeviceSlice';
import locationReducer from 'slice/locationSlice';
import roomReducer from 'slice/roomSilce';
import commentReducer from 'slice/commentSlice';

const rootReducer = combineReducers({
  account: accountReducer,
  location: locationReducer,
  appDevice: appDeviceReducer,
  room: roomReducer,
  comment: commentReducer,
});

export default rootReducer;
