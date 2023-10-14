"use client";

import { redirect, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

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

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailInput = emailRef.current!;
    const passwordInput = passwordRef.current!;

    const res = await signIn("credentials", {
      email: emailInput.value,
      password: passwordInput.value,
      redirect: false,
    });

    if (res?.ok) {
      router.replace("/movie");
    }
  };

  const onLogout = () => {
    signOut({
      callbackUrl: "/",
      redirect: true,
    });
  };

  return { emailRef, passwordRef, onSubmitHandler, onLogout };
};

export default useAuth;
