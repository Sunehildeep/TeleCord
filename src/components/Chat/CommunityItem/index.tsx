import React from 'react'
import { ContactContainer, ContactImage, ContactInfo, ContactName, LastMessage, Time } from './styles'

interface CommunityItemProps {
    imageSrc: string
    name: string
    lastMessage: string
    time: string
}

const CommunityItem: React.FC<CommunityItemProps> = ({ imageSrc, name, lastMessage, time }) => {
  return (
    <ContactContainer>
      <ContactImage src={imageSrc} alt={name} />
      <ContactInfo>
        <ContactName>{name}</ContactName>
        <LastMessage>{lastMessage}</LastMessage>
      </ContactInfo>
      <Time>{time}</Time>
    </ContactContainer>
  )
}

export default CommunityItem
