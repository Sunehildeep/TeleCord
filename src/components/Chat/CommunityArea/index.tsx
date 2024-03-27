import React, { useEffect, useState } from "react";
import CommunityItem from "../CommunityItem";
import { connectToSocketIO } from "@/api/socket-io";

const CommunityArea = ({
	communities,
	user,
}: {
	communities: any;
	user: any;
}) => {
	const [joinableCommunities, setJoinableCommunities] = useState<any>([]);
	useEffect(() => {
		const joinableCommunities = communities.map((community: any) => {
			if (community.GroupMembers.includes(user["Username"])) {
				return community.CommunityId;
			}
		});
		setJoinableCommunities(joinableCommunities);
		connectToSocketIO(joinableCommunities);
	}, [communities]);

	return (
		<div className="flex-1 w-full h-full p-2 bg-white">
			{communities.map((community: any) => (
				<CommunityItem
					key={community.CommunityId}
					communityId={community.CommunityId}
					image={community.Image || "/images/default.png"}
					communityName={community.CommunityName}
					time={community.Time}
					isJoinable={!joinableCommunities.includes(community.CommunityId)}
					username={user["Username"]}
				/>
			))}
		</div>
	);
};

export default CommunityArea;
