// styles.js
import styled from 'styled-components';
import { colors } from "@/theme/variables/colors"; 
import { spacing, fontSizes, letterSpacing } from "@/theme/variables/spacing";

export const HeaderBackground = styled.div`
  background-color: ${colors.headerBgColor};
  color: ${colors.white};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.md};
  max-width: 1200px;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
    
`;

export const Title = styled.h1`
  font-weight: semi-bold;
  font-size: ${fontSizes.xxl};
`;

export const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 ${spacing.md};
`;

export const MenuItem = styled.a`
    margin: 0 ${spacing.sm};
    cursor: pointer;
    &:hover {
        border-bottom: 3px solid ${colors.primary};
    };
    `;

export const Button = styled.button<{ primary?: boolean }>`
    padding: ${spacing.sm} ${spacing.md};
    margin: 0 ${spacing.xs};
    background-color: ${({ primary }) => primary ? colors.secondary : colors.langButtonColor};
    color: ${colors.white};
    border-radius: 15px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover {
        background-color: ${colors.primary}; 
    }
`;
