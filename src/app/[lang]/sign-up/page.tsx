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
import { SignUpAPI } from "@/api/authentication";
import Swal from "sweetalert2";

type FormValues = {
	email: string;
	username: string;
	password: string;
};

const SignUp = () => {
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
		SignUpAPI(data.email, data.password)
			.then((res) => {
				console.log("Sign up response:", res);
				if (res.status === 200) {
					Swal.fire({
						title: "Success!",
						text: "Account created successfully",
						icon: "success",
						confirmButtonText: "Login",
					}).then((result) => {
						if (result.isConfirmed) {
							router.push("/login");
						}
					});
				}
			})
			.catch((err) => {
				console.error("There was a problem with the sign up:", err);
				Swal.fire({
					title: "Error!",
					text: "There was a problem creating your account",
					icon: "error",
					confirmButtonText: "Try again",
				});
			});
	};

	return (
		<div className="flex justify-center items-center h-screen bg-purple-100">
			<Card className="w-full max-w-md p-8 rounded-lg shadow-lg bg-white">
				<CardHeader className="text-3xl font-bold text-center mb-8">
					Sign Up
				</CardHeader>
				<CardBody>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="mb-6">
							<Input
								type="email"
								placeholder="Email"
								aria-label="Enter your email"
								className="w-full px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
								{...register("email", { required: true })}
							/>
							{errors.email && (
								<span className="text-red-500">Email is required</span>
							)}
						</div>
						{/* <div className="mb-6">
							<Input
								type="text"
								placeholder="Username"
								aria-label="Enter your username"
								className="w-full px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
								{...register("username", { required: true })}
							/>
							{errors.username && (
								<span className="text-red-500">Username is required</span>
							)}
						</div> */}
						<div className="mb-6">
							<Input
								type="password"
								placeholder="Password"
								aria-label="Enter your password"
								className="w-full px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
								{...register("password", {
									required: true,
									pattern:
										/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
								})}
							/>
							{errors.password && errors.password.type === "required" && (
								<span className="text-red-500">Password is required</span>
							)}
							{errors.password && errors.password.type === "pattern" && (
								<span className="text-red-500">
									Password must contain at least 8 characters, one uppercase
									letter, one lowercase letter, and one number
								</span>
							)}
						</div>
						<Button
							type="submit"
							aria-label="Submit"
							className="flex m-auto w-[90%] bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
						>
							Register
						</Button>
					</form>
				</CardBody>
				<CardFooter className="mt-4 text-center">
					<p className="text-sm text-gray-600">
						Already have an account?{" "}
						<Link href="/login">
							<span className="text-purple-500 cursor-pointer">Log In</span>
						</Link>
					</p>
				</CardFooter>
			</Card>
		</div>
	);
};

export default SignUp;
