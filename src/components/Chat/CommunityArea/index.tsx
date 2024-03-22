import { getCommunities } from "@/api";
import React, { useEffect, useState } from "react";
import CommunityItem from "../CommunityItem";
import { Link } from "@nextui-org/react";
import { useSession } from "next-auth/react";

const CommunityArea = () => {
	const [communitiesData, setCommunitiesData] = useState<Community[]>([]);
	const { data: session }: any = useSession();

	useEffect(() => {
		getCommunities(session?.user?.["Username"]).then((res) => {
			setCommunitiesData(res);
		}),
			[];
	}, [session]);

	return (
		<div className="flex-1 w-full h-full p-2 bg-white">
			{communitiesData.map((community: any) => (
				<Link
					href={`/chat/${community.CommunityId}`}
					key={community.CommunityId}
					className="w-full h-20 flex items-center justify-between p-2 border-b-2 border-gray-200 hover:bg-gray-100 cursor-pointer"
				>
					<CommunityItem
						image={community.Image || "/images/default.png"}
						communityName={community.CommunityName}
						lastMessage={community.LastMessage}
						time={community.Time}
					/>
				</Link>
			))}
		</div>
	);
};

export default CommunityArea;
