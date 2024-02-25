"use client";
import React from "react";
import { ChatInput, ChatList } from "./styles";
import ChatHeader from "../header";
import Search from "../search";

const ChatLayout = () => {
  return (
    <>
      <ChatList>
        <ChatHeader />
        <Search />
      </ChatList>
      <ChatInput></ChatInput>
    </>
  );
};

export default ChatLayout;
