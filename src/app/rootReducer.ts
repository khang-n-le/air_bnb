import { combineReducers } from 'redux';

import accountReducer from 'slice/accountSlice';
import appDeviceReducer from 'slice/appDeviceSlice';
import locationReducer from 'slice/locationSlice';
import roomReducer from 'slice/roomSlice';

const rootReducer = combineReducers({
  account: accountReducer,
  location: locationReducer,
  appDevice: appDeviceReducer,
  room: roomReducer
});

export default rootReducer;
