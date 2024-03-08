"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button, Card, CardBody, Input, Link } from "@nextui-org/react";

const Login = () => {
	const router = useRouter();
	const signUpUrl = `/sign-up`;

	useEffect(() => {
		router.prefetch(signUpUrl);
		router.prefetch("/chat");
	});

	return (
		<div className="flex items-center justify-center h-screen m-auto w-full">
			<Card>
				<CardBody>
					<form className="flex flex-col gap-4">
						<Input
							type="text"
							placeholder="Email or Username"
							aria-label="Enter your email or username"
						/>
						<Input
							type="password"
							placeholder="Password"
							aria-label="Enter your Password"
						/>
						<Button type="submit" aria-label="Submit">
							Login
						</Button>
						<h3>Don't have an account?</h3>
						<Link href={signUpUrl}>
							<Button className="bg-primary hover:bg-secondary w-full">
								Sign Up
							</Button>
						</Link>
					</form>
				</CardBody>
			</Card>
		</div>
	);
};

export default Login;
