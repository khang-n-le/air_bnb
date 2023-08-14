import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PostAccount, authApi } from 'api/auth';
import { RootState } from 'app/store';
import { useNavigate } from 'react-router-dom';
import { setLocalStorage } from 'utils/localStorage';

export const login = createAsyncThunk(
  'account/login',
  async (account: PostAccount, { rejectWithValue }) => {
    try {
      const response = await authApi.login(account)

      return response
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }

      return rejectWithValue(error.response.data);
    }
  }
)

export const signUp = createAsyncThunk(
  'account/signUp',
  async (account: Account, { rejectWithValue }) => {
    try {
      const response = await authApi.signUp(account)

      return response
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
)

interface Account {
  id: number,
  name: string,
  email: string,
  password: string,
  phone: string,
  birthday: string,
  avatar: string,
  gender: boolean,
  role: string
}

interface InitialState {
  account: Account | null,
  error: string,
  isAuthenticated: boolean
}

const initialState: InitialState = {
  account: null,
  error: '',
  isAuthenticated: false
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    loggedInAccount: (state, action) => {
      state.account = action.payload
      state.isAuthenticated = true
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      setLocalStorage('account', (action.payload as any).content.user)
      state.account = (action.payload as any).content.user
      state.isAuthenticated = true
    })

    builder.addCase(login.rejected, (state, action) => {
      if (action.payload) {
        state.error = (action.payload as any).content
      } else {
        state.error = 'Đã có lỗi xảy ra. Vui lòng thử lại!'
      }
    })

    builder.addCase(signUp.fulfilled, (state, action) => {
      setLocalStorage('account', (action.payload as any).content)
      state.account = (action.payload as any).content
      state.isAuthenticated = true

    })

    builder.addCase(signUp.rejected, (state, action) => {
      if (action.payload) {
        state.error = (action.payload as any).content
      } else {
        state.error = 'Đã có lỗi xảy ra. Vui lòng thử lại!'
      }
    })
  },
});

const { actions, reducer: accountReducer } = accountSlice;

export const { loggedInAccount, setError } = actions;

export default accountReducer;

export const selectAccount = (state: RootState): InitialState => state.account as InitialState