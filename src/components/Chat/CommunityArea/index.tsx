import { getCommunities } from "@/api";
import React, { useEffect, useState } from "react";
import CommunityItem from "../CommunityItem";

const CommunityArea = () => {
	const [communitiesData, setCommunitiesData] = useState<Community[]>([]);
	useEffect(() => {
		getCommunities("Garv").then((res) => {
			setCommunitiesData(res);
			console.log(res);
		}),
			[];
	}, [setCommunitiesData]);

	return (
		<div className="flex-1 w-full h-full p-2 bg-white">
			{communitiesData.map((community: any) => (
				<CommunityItem
					image={community.Image || "/images/default.png"}
					communityName={community.CommunityName}
					lastMessage={community.LastMessage}
					time={community.Time}
				/>
			))}
		</div>
	);
};

export default CommunityArea;
