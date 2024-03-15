"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button, Card, CardBody, Input } from "@nextui-org/react";

const Login = () => {
    const router = useRouter();
    const signUpUrl = `/sign-up`;

    useEffect(() => {
        router.prefetch(signUpUrl);
    }, []);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Logic for login
    };

    return (
		<div className="flex justify-center items-center h-screen bg-purple-100">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Login</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Email or Username"
              aria-label="Enter your email or username"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              aria-label="Enter your password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500"
            />
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
            <span className="text-purple-500 cursor-pointer" onClick={() => router.push(signUpUrl)}>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
    );
};

export default Login;
