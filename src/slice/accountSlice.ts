import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PostAccount, authApi } from 'api/auth';
import { Account } from 'api/common';
import { RootState } from 'app/store';
import { removeLocalStorage, setLocalStorage } from 'utils/localStorage';
import {
  removeCurrentEntity,
  updateTokenBearer as updateEntityTokenBearer,
} from 'api/services/airBnb';

export const login = createAsyncThunk(
  'account/login',
  async (account: PostAccount, { rejectWithValue }) => {
    try {
      const response = await authApi.login(account);

      return response;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }

      return rejectWithValue(error.response.data);
    }
  }
);

export const signUp = createAsyncThunk(
  'account/signUp',
  async (account: Account['user'], { rejectWithValue }) => {
    try {
      const response = await authApi.signUp(account);

      return response;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

interface InitialState {
  account: Account | null;
  error: string;
  isAuthenticated: boolean;
  isLogInForm: boolean | null;
  authTitle: string;
}

const initialState: InitialState = {
  account: null,
  error: '',
  isAuthenticated: false,
  isLogInForm: null,
  authTitle: '',
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    loggedInAccount: (state, action) => {
      state.account = action.payload;
      state.isAuthenticated = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLogOut: (state, action) => {
      removeLocalStorage('account');
      state.account = null;
      state.isAuthenticated = false;
    },
    setIsLogInForm: (state, action) => {
      state.isLogInForm = action.payload;
    },
    setAuthTitle: (state, action) => {
      state.authTitle = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      setLocalStorage('account', (action.payload as any).content);
      updateEntityTokenBearer((action.payload as any).content.token);

      state.account = (action.payload as any).content;
      state.isAuthenticated = true;
    });

    builder.addCase(login.rejected, (state, action) => {
      if (action.payload) {
        state.error = (action.payload as any).content;
        removeCurrentEntity();
      } else {
        state.error = 'Đã có lỗi xảy ra. Vui lòng thử lại!';
      }
    });

    builder.addCase(signUp.fulfilled, (state, action) => {
      const account = {
        user: (action.payload as any).content,
      };
      state.account = account;
      state.isLogInForm = true;
      state.error = '';
    });

    builder.addCase(signUp.rejected, (state, action) => {
      if (action.payload) {
        state.error = (action.payload as any).content;
      } else {
        state.error = 'Đã có lỗi xảy ra. Vui lòng thử lại!';
      }
    });
  },
});

const { actions, reducer: accountReducer } = accountSlice;

export const {
  loggedInAccount,
  setError,
  setLogOut,
  setIsLogInForm,
  setAuthTitle,
} = actions;

export default accountReducer;

export const selectAccount = (state: RootState): InitialState =>
  state.account as InitialState;
