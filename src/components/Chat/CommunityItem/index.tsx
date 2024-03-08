import React from "react";
import { Card, CardHeader } from "@nextui-org/react";
import Image from "next/image";

const CommunityItem: React.FC<Community> = ({
	image,
	communityName,
	lastMessage,
	time,
}) => {
	return (
		<Card
			className="mb-2 w-full hover:bg-gray-100"
			shadow="sm"
			isBlurred
			isHoverable
			isPressable
		>
			<CardHeader className="justify-between p-3">
				<div className="flex gap-5">
					<Image src={image} alt={communityName} width={50} height={50} />
					<div className="flex flex-col gap-1 items-start justify-center">
						<h4 className="text-small font-semibold leading-none text-default-600">
							{communityName}
						</h4>
						<h5 className="text-small tracking-tight text-default-400">
							{lastMessage}
						</h5>
					</div>
				</div>
				<h6 className="text-small text-default-400">{time}</h6>
			</CardHeader>
		</Card>
	);
};

export default CommunityItem;
