import styled from "styled-components";
import { colors } from "@/theme/variables/colors";

export const ChatList = styled.div`
  width: 35%;
  overflow-y: auto;
  padding: 20px;
  background-color: ${colors.lightGrey};
`;

export const ChatInput = styled.div`
  flex: 1;
  padding: 20px;
  background-color: ${colors.grey};
`;
