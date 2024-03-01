import { colors } from '@/theme/variables/colors';
import { spacing } from '@/theme/variables/spacing';
import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: ${colors.white};
  margin-bottom: ${spacing.xxs};
  border-radius: 5px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ContactImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

export const ContactInfo = styled.div`
  flex: 1;
`;

export const ContactName = styled.h3`
  font-size: 16px;
  margin: 0;
`;

export const LastMessage = styled.p`
  font-size: 14px;
  margin: 5px 0;
`;

export const Time = styled.span`
  font-size: 12px;
  color: #888;
`;