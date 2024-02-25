import React, { useState } from "react";
import { HeaderContainer, HeaderItems, Icon } from "./styles";
import { FaRegUserCircle } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import CreateCommunityModal from "@/components/Modals/create-community";

const ChatHeader = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  }

  return (
    <HeaderContainer>
      <HeaderItems>
        <Icon aria-label="User">
          <FaRegUserCircle />
        </Icon>
        <Icon onClick={openModal} aria-label="Create Community/Server">
          <CiCirclePlus />
        </Icon>
        <CreateCommunityModal showModal={showModal} setShowModal={setShowModal}/>
        <Icon aria-label="Setting">
          <IoIosSettings />
        </Icon>
      </HeaderItems>
    </HeaderContainer>
  );
};

export default ChatHeader;
