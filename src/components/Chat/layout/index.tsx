"use client";
import React from "react";
import {
  ChatContainer,
  ChatInput,
  ChatList,
  ChatPageContainer,
} from "./styles";

const ChatLayout = () => {
  return (
    <ChatPageContainer>
      <ChatContainer>
        <ChatList></ChatList>
        <ChatInput></ChatInput>
      </ChatContainer>
    </ChatPageContainer>
  );
};

export default ChatLayout;
