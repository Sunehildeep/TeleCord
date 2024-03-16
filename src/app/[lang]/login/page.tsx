"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Input,
	Link,
} from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
	emailOrUsername: string;
	password: string;
};

const Login = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();
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
			<Card className="w-full max-w-md p-8 rounded-lg shadow-lg bg-white">
				<CardHeader className="text-3xl font-bold text-center mb-8">
					Login
				</CardHeader>
				<CardBody>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="mb-6">
							<Input
								type="text"
								placeholder="Email or Username"
								aria-label="Enter your email or username"
								className="w-full px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
								{...register("emailOrUsername", { required: true })}
							/>
							{errors.emailOrUsername && (
								<span className="text-red-500">
									Email or Username is required
								</span>
							)}
						</div>
						<div className="mb-6">
							<Input
								type="password"
								placeholder="Password"
								aria-label="Enter your password"
								className="w-full px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
								{...register("password", { required: true })}
							/>
							{errors.password && (
								<span className="text-red-500">Password is required</span>
							)}
						</div>
						<Button
							type="submit"
							aria-label="Submit"
							className="m-auto flex w-[90%] bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
						>
							Login
						</Button>
					</form>
				</CardBody>
				<CardFooter className="mt-4 text-center">
					<p className="text-sm text-gray-600">
						Don't have an account?{" "}
						<Link href="/sign-up">
							<span className="text-purple-500 cursor-pointer">Sign Up</span>
						</Link>
					</p>
				</CardFooter>
			</Card>
		</div>
	);
};

export default Login;
