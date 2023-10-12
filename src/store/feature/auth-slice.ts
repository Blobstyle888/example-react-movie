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

      const value = {
        isAuth: true,
        uid: "e17ebe16-6840-11ee-8c99-0242ac120002",
        username: "John",
      };

      localStorage.setItem("token", JSON.stringify(value));

      return {
        value: {
          isAuth: true,
          uid: "e17ebe16-6840-11ee-8c99-0242ac120002",
          username: "John",
        },
      };
    },
    getSession: (state) => {
      const token = localStorage.getItem("token");
      if (token) {
        const session = JSON.parse(token) as IAuth;
        state.value = {
          ...state.value,
          isAuth: session.isAuth,
          uid: session.uid,
          username: session.username,
        };
      }
    },
  },
});

export const { login, logout, getSession } = AuthSlice.actions;

export default AuthSlice.actions;
