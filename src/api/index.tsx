export const createCommunity = async (
  communityName: string,
  members: string
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_AWS_BACKEND_API_URL}/addCommunity`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          CommunityId: 11,
          CommunityName: communityName,
          GroupMembers: members.split(","),
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