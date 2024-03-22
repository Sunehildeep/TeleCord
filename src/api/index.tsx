const generateCommunityId = (): number => {
	// Generate a random number between 1 and 1000000
	const randomId = Math.floor(Math.random() * 1000000) + 1;
	return randomId;
};

export const createCommunity = async (communityName: string) => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_AWS_BACKEND_API_URL}/addCommunity`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					CommunityId: generateCommunityId(),
					CommunityName: communityName,
					LastMessage: "Welcome to the community",
				}),
			}
		);

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		return response;
	} catch (error) {
		console.error("There was a problem with the createCommunity API:", error);
		throw error;
	}
};

export const getCommunities = async (username: string) => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_AWS_BACKEND_API_URL}/getCommunity/${username}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		return response.json();
	} catch (error) {
		console.error("There was a problem with the getCommunities API:", error);
		throw error;
	}
};

export const searchCommunity = async (search: string) => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_AWS_BACKEND_API_URL}/searchCommunity`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					Query: search,
				}),
			}
		);

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		return response.json();
	} catch (error) {
		console.error("There was a problem with the searchCommunity API:", error);
		throw error;
	}
};

// joinCommunity API
export const joinCommunity = async (communityId: string, username: string) => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_AWS_BACKEND_API_URL}/joinCommunity`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					CommunityId: communityId,
					Username: username,
				}),
			}
		);

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		return response;
	} catch (error) {
		console.error("There was a problem with the joinCommunity API:", error);
		throw error;
	}
};

export const leaveCommunity = async (communityId: string, username: string) => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_AWS_BACKEND_API_URL}/leaveCommunity`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					CommunityId: communityId,
					Username: username,
				}),
			}
		);

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		return response;
	} catch (error) {
		console.error("There was a problem with the joinCommunity API:", error);
		throw error;
	}
};
