import styled from "styled-components";
import { colors } from "@/theme/variables/colors";

export const ChatPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${colors.chatBackgroundColor};
`;

export const ChatContainer = styled.div`
  display: flex;
  width: 80%;
  height: 95%;
  background-color: ${colors.white};
  border-radius: 10px;
  margin: auto;
  overflow: hidden;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;
