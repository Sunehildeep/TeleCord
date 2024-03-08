import { getCommunities } from "@/api";
import React, { useEffect, useState } from "react";
import CommunityItem from "../CommunityItem";

const CommunityArea = () => {
	const [communitiesData, setCommunitiesData] = useState<Community[]>([]);
	useEffect(() => {
		const fakeData: Community[] = [
			{
				image: "/image1.jpg",
				communityName: "Community 1",
				lastMessage: "Last message 1",
				time: "10:00 AM",
			},
			{
				image: "/image2.jpg",
				communityName: "Community 2",
				lastMessage: "Last message 2",
				time: "11:00 AM",
			},
			{
				image: "/image3.jpg",
				communityName: "Community 3",
				lastMessage: "Last message 3",
				time: "12:00 PM",
			},
		];

		setCommunitiesData(fakeData);
	}, []);
	// useEffect(() => {
	// 	getCommunities("Garv").then((res) => {
	// 		setCommunitiesData(res);
	// 		console.log(res);
	// 	}),
	// 		[];
	// }, [setCommunitiesData]);

	return (
		<div className="flex-1 w-full h-full p-2 bg-white">
			{communitiesData.map((community: Community) => (
				<CommunityItem {...community} />
			))}
		</div>
	);
};

export default CommunityArea;
