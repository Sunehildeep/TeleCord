"use client"
import React from 'react';
import PageTitle from '@/components/PageTitle';
import { LoginForm, InputField, PasswordField, SubmitButton, SignupButton, LeadPara } from './styles';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Login = () => {
  const router = useRouter();
  const signUpUrl = `/sign-up`;
  router.prefetch(signUpUrl);
  return (
    <div>
      <PageTitle title="Login" />
      <LoginForm>
        <InputField type="text" placeholder="Email or Username" aria-label='Enter your email or username' />
        <PasswordField type="password" placeholder="Password" aria-label='Enter your Password' />
        <SubmitButton type="submit" aria-label='Submit'>Login</SubmitButton>
        <LeadPara>Don't have an account?</LeadPara>
        <Link href={signUpUrl}>
          <SignupButton>Sign Up</SignupButton>
        </Link>
      </LoginForm>
    </div>
  );
};

export default Login;
