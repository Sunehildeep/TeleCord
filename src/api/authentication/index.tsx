export const SignUpAPI = async (email: string, password: string) => {
	try {
		console.log("Form submitted:", email, password);
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_AWS_BACKEND_API_URL}/sign-up`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					Email: email,
					Password: password,
				}),
			}
		);

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		return response;
	} catch (error) {
		console.error("There was a problem with the signUp API:", error);
		throw error;
	}
};

export const LoginAPI = async (email: string, password: string) => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_AWS_BACKEND_API_URL}/login`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					Email: email,
					Password: password,
				}),
			}
		);

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		return response;
	} catch (error) {
		console.error("There was a problem with the signUp API:", error);
		throw error;
	}
};
