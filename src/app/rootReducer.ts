import { combineReducers } from 'redux';

import accountReducer from 'slice/accountSlice';
import appDeviceReducer from 'slice/appDeviceSlice';
import locationReducer from 'slice/locationSlice';
import roomReducer from 'slice/roomSilce';
import commentReducer from 'slice/commentSlice';
import userReducer from 'slice/userSlice';

const rootReducer = combineReducers({
  account: accountReducer,
  location: locationReducer,
  appDevice: appDeviceReducer,
  room: roomReducer,
  comment: commentReducer,
  user: userReducer
});

export default rootReducer;
