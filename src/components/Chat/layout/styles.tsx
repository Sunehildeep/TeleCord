import styled from "styled-components";
import { colors } from "@/theme/variables/colors";
import { fontSizes, letterSpacing } from "@/theme/variables/spacing";

export const ChatList = styled.div`
  width: 35%;
  overflow-y: auto;
  background-color: ${colors.primary};
`;

export const ChatInput = styled.div`
  flex: 1;
  background-color: ${colors.grey};
`;

export const DefaultScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${colors.lightGrey};
  text-align: center; /* Center align the text */
`;

export const DefaultScreenHeading = styled.h1`
  display: block;
  font-size: ${fontSizes.xl};
`;

export const LeadPara = styled.p`
  display: block;
  font-size: ${fontSizes.base};
  line-height: ${letterSpacing.xl};
`;

export const BottomPara = styled.p`
  display: block;
  font-size: ${fontSizes.sm};
  line-height: ${letterSpacing.sm};
  position: absolute;
  bottom: 50px;
  text-align: center;
`;