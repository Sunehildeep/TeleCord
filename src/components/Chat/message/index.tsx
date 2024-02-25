import React from "react";
import { ChatContainer, StyledChatBubble } from "./styles";

interface ChatMessagesProps {
  message: string;
  sent_received: number;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({
  message,
  sent_received,
}: ChatMessagesProps) => {
  return (
    <ChatContainer>
      <StyledChatBubble sentReceived={sent_received}>
        {message}
      </StyledChatBubble>
    </ChatContainer>
  );
};

export default ChatMessages;
