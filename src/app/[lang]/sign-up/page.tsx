"use client";
import React, { useEffect } from "react";
import PageTitle from "@/components/PageTitle";
import {
  LoginForm,
  InputField,
  PasswordField,
  SubmitButton,
  SignupButton,
  LeadPara,
} from "../login/styles";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const signUpUrl = `/sign-up`;

  useEffect(() => {
    router.prefetch(signUpUrl);
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <PageTitle title="Login" />
      <LoginForm onSubmit={onSubmit}>
        <InputField
          type="text"
          placeholder="Email or Username"
          aria-label="Enter your email or username"
        />
        <PasswordField
          type="password"
          placeholder="Password"
          aria-label="Enter your Password"
        />
        <SubmitButton type="submit" aria-label="Submit">
          Register
        </SubmitButton>
      </LoginForm>
    </>
  );
};

export default SignUp;
