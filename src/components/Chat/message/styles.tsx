import styled, { css } from "styled-components";
import { colors } from "@/theme/variables/colors";
import { spacing } from "@/theme/variables/spacing";

interface ChatBubbleProps {
  sentReceived: number;
}

const getBackgroundColor = (sentReceived: number) => {
  return sentReceived === 0
    ? colors.chatBubbleColorSent
    : colors.chatBubbleColorReceived;
};

export const ChatBubble = styled.div`
  padding: ${spacing.sm};
  margin: ${spacing.sm};
  border-radius: 20px;
  max-width: 70%;
  align-self: flex-start;
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const StyledChatBubble = styled(ChatBubble)<ChatBubbleProps>`
  background-color: ${({ sentReceived }) => getBackgroundColor(sentReceived)};
`;
