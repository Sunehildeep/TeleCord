import styled from "styled-components";
import { colors } from "@/theme/variables/colors";

export const ChatList = styled.div`
  width: 35%;
  overflow-y: auto;
  background-color: ${colors.primary};
`;

export const ChatInput = styled.div`
  flex: 1;
  background-color: ${colors.grey};
`;
