import { combineReducers } from 'redux';

import accountReducer from 'slice/accountSlice';
import appDeviceReducer from 'slice/appDeviceSlice';
import locationReducer from 'slice/locationSlice';

const rootReducer = combineReducers({
  account: accountReducer,
  location: locationReducer,
  appDevice: appDeviceReducer,
});

export default rootReducer;
