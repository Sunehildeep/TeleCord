import React from "react";
import { Card, CardHeader, Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { joinCommunity, leaveCommunity } from "@/api";
import Swal from "sweetalert2";

const CommunityItem: React.FC<Community> = ({
	image,
	communityName,
	communityId,
	lastMessage,
	time,
	isJoinable,
	username,
}) => {
	const onPressJoin = (e: React.MouseEvent<HTMLButtonElement>) => {
		joinCommunity(communityId, username).then((res) => {
			if (res.ok) {
				Swal.fire({
					title: "Success!",
					text: "Community joined successfully!",
					icon: "success",
					confirmButtonText: "OK",
				}).then(() => {
					window.location.reload();
				});
			} else {
				Swal.fire({
					title: "Error!",
					text: "Community join failed!",
					icon: "error",
					confirmButtonText: "OK",
				});
			}
		});
	};

	const onPressLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
		leaveCommunity(communityId, username).then((res) => {
			if (res.ok) {
				Swal.fire({
					title: "Success!",
					text: "Community left successfully!",
					icon: "success",
					confirmButtonText: "OK",
				}).then(() => {
					window.location.reload();
				});
			} else {
				Swal.fire({
					title: "Error!",
					text: "Community leave failed!",
					icon: "error",
					confirmButtonText: "OK",
				});
			}
		});
	};

	const router = useRouter();

	return (
		<Card
			className={`mb-2 w-full hover:bg-gray-100 ${
				isJoinable ? "cursor-default" : "cursor-pointer"
			}`}
			shadow="sm"
			isBlurred
			isHoverable
			isPressable={!isJoinable}
			onPress={() => !isJoinable && router.push(`/chat/${communityId}`)}
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
				{isJoinable ? (
					<Button className="mt-2" color="primary" onClick={onPressJoin}>
						Join
					</Button>
				) : (
					<Button className="mt-2" color="secondary" onClick={onPressLeave}>
						Leave
					</Button>
				)}
			</CardHeader>
		</Card>
	);
};

export default CommunityItem;
