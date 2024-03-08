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
			{communitiesData.map((community: Community) => (
				<CommunityItem {...community} />
			))}
		</div>
	);
};

export default CommunityArea;
