import React from "react";

const ChatMessages: React.FC<ChatMessagesProps> = ({
	message,
	sent_received,
}: ChatMessagesProps) => {
	return (
		<div className="flex flex-col w-full">
			<div
				className={`flex ${
					sent_received === 0 ? "justify-end" : "justify-start"
				}`}
			>
				<div
					className={`rounded-lg p-2 ${
						sent_received === 0 ? "bg-blue-500 text-white" : "bg-gray-200"
					}`}
				>
					{message}
				</div>
			</div>
		</div>
	);
};

export default ChatMessages;
