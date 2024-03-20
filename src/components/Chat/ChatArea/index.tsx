import {
	connectToSocketIO,
	receiveMessage,
	sendMessage,
} from "@/api/socket-io";
import { Button, Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Avatar } from "@nextui-org/react";
import { FaLanguage } from "react-icons/fa6";

const ChatArea = () => {
	const [currentMessage, setCurrentMessage] = useState("");
	const [receivedMessages, setReceivedMessages] = useState([] as string[]);

	useEffect(() => {
		connectToSocketIO();
	}, []);

	const handleMessageChange = (event: any) => {
		setCurrentMessage(event.target.value);
	};

	const message1: SendMessage = {
		message: currentMessage,
		community_id: 1,
		user_id: 2,
	};

	const handleSendMessage = () => {
		sendMessage(message1);
		setCurrentMessage("");
		receiveMessage((data: any) => {
			if (data.community_id === 1) {
				setReceivedMessages([...receivedMessages, data.message]);
			}
		});
	};

	const translateMessage = () => {
		// Translate message
	};

	return (
		<div className="w-full h-full flex flex-col">
			<div className="bg-gray-300 py-[14.5px] px-3 items-center justify-end flex">
				{/* Translate button */}
				<Button  aria-label="Translate message" title="Translate message"
					className="text-sm text-white bg-gray-600 hover:bg-gray-700 py-2 px-3"
					onClick={translateMessage}
				>
					<FaLanguage size={32} />
				</Button>
				{/* other menu items here */}
			</div>

			{/* Messaging area */}
			<div className="p-4 w-full h-full overflow-y-auto">
				{receivedMessages.length > 0 ? (
					receivedMessages.map((message: string, index: number) => {
						return (
							<div key={index} className="flex flex-row gap-2 my-4">
								<div className="text-black my-auto">
									<Avatar name="Test User" className="w-12 h-12 text-tiny" />
								</div>
								<div className="flex flex-col">
									<span className="text-gray-500">Test User</span>
									<div className="p-2 bg-primary rounded-lg text-white">
										{message}
									</div>
								</div>
								<div className="flex-grow"></div>
							</div>
						);
					})
				) : (
					<div className="flex flex-col items-center justify-center w-full h-full p-4">
						<h1 className="text-2xl text-center font-light">
							Welcome to Telecord
						</h1>
						<h2 className="text-lg font-light">
							Start a chat with your friends and family
						</h2>
					</div>
				)}
			</div>
			{/* Bottom message */}
			<div className="flex p-4 gap-2 w-full flex-col">
				<Input
					label="Message"
					isClearable
					value={currentMessage}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							handleSendMessage();
						}
					}}
					onChange={handleMessageChange}
					radius="lg"
					classNames={{
						label: "text-black/50 dark:text-white/90",
						input: [
							"bg-transparent",
							"text-black/90 dark:text-white/90",
							"placeholder:text-default-700/50 dark:placeholder:text-white/60",
						],
						innerWrapper: "bg-transparent",
						inputWrapper: [
							"shadow-xl",
							"bg-default-200/50",
							"dark:bg-default/60",
							"backdrop-blur-xl",
							"backdrop-saturate-200",
							"hover:bg-default-200/70",
							"dark:hover:bg-default/70",
							"group-data-[focused=true]:bg-default-200/50",
							"dark:group-data-[focused=true]:bg-default/60",
							"!cursor-text",
						],
					}}
					placeholder="Type to message..."
				/>
			</div>
		</div>
	);
};

export default ChatArea;
