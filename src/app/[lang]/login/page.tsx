"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  emailOrUsername: string;
  password: string;
};

const Login = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const signUpUrl = `/sign-up`;

  useEffect(() => {
    router.prefetch(signUpUrl);
  }, []);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Handle form submission
    console.log("Form submitted:", data);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-purple-100">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Email or Username"
              aria-label="Enter your email or username"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500"
              {...register("emailOrUsername", { required: true })}
            />
            {errors.emailOrUsername && <span className="text-red-500">Email or Username is required</span>}
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              aria-label="Enter your password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-red-500">Password is required</span>}
          </div>
          <button
            type="submit"
            aria-label="Submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Don't have an account?{' '}
            <Link href="/sign-up">
              <span className="text-purple-500 cursor-pointer">Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
