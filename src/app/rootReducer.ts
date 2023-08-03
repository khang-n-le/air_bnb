import { combineReducers } from 'redux';

import accountReducer from 'slice/accountSlice';
import appDeviceReducer from 'slice/appDeviceSlice';

const rootReducer = combineReducers({
  account: accountReducer,
  appDevice: appDeviceReducer,
});

export default rootReducer;
