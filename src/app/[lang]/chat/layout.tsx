"use client";
import React from "react";
import {
  ChatContainer,
  ChatPageContainer,
} from "./styles";
import ChatLayout from "@/components/Chat/layout";

const layout = () => {
  return (
    <ChatPageContainer>
      <ChatContainer>
        <ChatLayout />
      </ChatContainer>
    </ChatPageContainer>
  );
};

export default layout;
