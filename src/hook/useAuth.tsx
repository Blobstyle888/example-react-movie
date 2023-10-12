"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useDispatch } from "react-redux";

import { ILoginAuth, login, logout } from "@/store/feature/auth-slice";
import { AppDispatch } from "@/store/store";

interface CustomHookAuth {
  emailRef: React.MutableRefObject<HTMLInputElement | null>;
  passwordRef: React.MutableRefObject<HTMLInputElement | null>;
  onSubmitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
  onLogout: () => void;
}

const useAuth = (): CustomHookAuth => {
  const router = useRouter();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch<AppDispatch>();

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailInput = emailRef.current!;
    const passwordInput = passwordRef.current!;

    const loginParam: ILoginAuth = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    dispatch(login(loginParam));

    router.push("/movie");
  };

  const onLogout = () => {
    dispatch(logout());
  };

  return { emailRef, passwordRef, onSubmitHandler, onLogout };
};

export default useAuth;
