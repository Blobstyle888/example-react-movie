import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ILoginAuth {
  email: string;
  password: string;
}

type InitialState = {
  value: IAuth;
};

interface IAuth {
  isAuth: boolean;
  username: string;
  uid: string;
}

const initialState: InitialState = {
  value: {
    isAuth: false,
    username: "",
    uid: "",
  } as IAuth,
};

export const AuthSlice = createSlice({
  name: "auth_slice",
  initialState,
  reducers: {
    logout: () => {
      console.log("logout");

      localStorage.removeItem("token");

      return initialState;
    },
    login: (state, action: PayloadAction<ILoginAuth>) => {
      console.log("Login completed!");

      const { email, password } = action.payload;

      localStorage.setItem("token", "e17ebe16-6840-11ee-8c99-0242ac120002");

      return {
        value: {
          isAuth: true,
          uid: "e17ebe16-6840-11ee-8c99-0242ac120002",
          username: "John",
        },
      };
    },
  },
});

export const { login, logout } = AuthSlice.actions;

export default AuthSlice.actions;
