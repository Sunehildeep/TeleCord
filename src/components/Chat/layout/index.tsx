"use client";
import React from "react";
import { BottomPara, ChatInput, ChatList, DefaultScreen, DefaultScreenHeading, LeadPara } from "./styles";
import ChatHeader from "../header";
import Search from "../search";

const ChatLayout = () => {
  return (
    <>
      <ChatList>
        <ChatHeader />
        <Search />
      </ChatList>
      <ChatInput>
        <DefaultScreen>
          <DefaultScreenHeading>Start your Chat</DefaultScreenHeading>
          <LeadPara>
            Welcome to Telecord, start your chat with your friends and family
          </LeadPara>
          <BottomPara>
            Your chats are end-to-end encrypted, so you can chat with your loved ones without worrying about privacy.
          </BottomPara>
        </DefaultScreen>
      </ChatInput>
    </>
  );
};

export default ChatLayout;
