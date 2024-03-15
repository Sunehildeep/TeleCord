"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { SignUpAPI } from "@/api/authentication";

type FormValues = {
  email: string;
  username: string;
  password: string;
};

const SignUp = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const signUpUrl = `/sign-up`;

  useEffect(() => {
    router.prefetch(signUpUrl);
  }, []);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Handle form submission
    console.log("Form submitted:", data);
    SignUpAPI(data.email, data.username, data.password)
      .then((res) => {
        console.log("Sign up response:", res);
      })
      .catch((err) => {
        console.error("There was a problem with the sign up:", err);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-purple-100">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Email"
              aria-label="Enter your email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-500">Email is required</span>}
          </div>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Username"
              aria-label="Enter your username"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500"
              {...register("username", { required: true })}
            />
            {errors.username && <span className="text-red-500">Username is required</span>}
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              aria-label="Enter your password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500"
              {...register("password", {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
              })}
            />
            {errors.password && errors.password.type === "required" && (
              <span className="text-red-500">Password is required</span>
            )}
            {errors.password && errors.password.type === "pattern" && (
              <span className="text-red-500">Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number</span>
            )}
          </div>
          <button
            type="submit"
            aria-label="Submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login">
              <span className="text-purple-500 cursor-pointer">Log In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
