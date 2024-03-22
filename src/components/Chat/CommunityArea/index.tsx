import React from "react";
import CommunityItem from "../CommunityItem";

const CommunityArea = ({
	communities,
	user,
}: {
	communities: any;
	user: any;
}) => {
	return (
		<div className="flex-1 w-full h-full p-2 bg-white">
			{communities.map((community: any) => (
				<CommunityItem
					key={community.CommunityId}
					communityId={community.CommunityId}
					image={community.Image || "/images/default.png"}
					communityName={community.CommunityName}
					lastMessage={community.LastMessage}
					time={community.Time}
					isJoinable={!community.GroupMembers.includes(user["Username"])}
					username={user["Username"]}
				/>
			))}
		</div>
	);
};

export default CommunityArea;
