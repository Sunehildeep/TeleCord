"use client";
import React from "react";
import ChatHeader from "../Header";
import Search from "../Search";
import CommunityArea from "../CommunityArea";
import { Card, CardBody } from "@nextui-org/react";

const ChatLayout = () => {
	return (
		<Card className="m-4 h-[90vh]">
			<CardBody className="flex flex-row w-full h-full p-0">
				<div className="flex items-start flex-col w-[35%] bg-primary">
					<ChatHeader />
					<Search />
					<CommunityArea />
				</div>
				<div className="flex-1 bg-gray-100 flex flex-col items-center justify-center">
					<div className="mt-auto flex flex-col items-center justify-center w-full h-full p-4">
						<h1 className="text-2xl text-center font-light">
							Welcome to Telecord
						</h1>
						<h2 className="text-lg font-light">
							Start a chat with your friends and family
						</h2>
					</div>
					<div className="mt-auto mb-2">
						<h3 className="text-md font-light">
							Your chats are end-to-end encrypted, so you can chat with your
							loved ones without worrying about privacy.
						</h3>
					</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default ChatLayout;
