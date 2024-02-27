export const createCommunity = async (communityName: string, members: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_AWS_BACKEND_API_URL}/addCommunity`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      CommunityId: 11,
      CommunityName: communityName,
      GroupMembers: members.split(","),
      LastMessage: "Welcome to the community"
    }),
  });

  return response;
}