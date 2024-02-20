// styles.js
import styled from 'styled-components';
import { colors } from "@/theme/variables/colors"; 
import { spacing, fontSizes } from "@/theme/variables/spacing";

export const HeaderBackground = styled.div`
  background-color: ${colors.headerBgColor};
  color: ${colors.white};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.sm};
  max-width: 1200px;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-weight: semi-bold;
  font-size: ${fontSizes.xl};
`;

export const MenuContainer = styled.div`
  nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  nav ul li {
    margin-right: ${spacing.md};
  }

  @media (max-width: 600px) {
    nav ul li {
      margin-right: ${spacing.sm};
    }
  }
`;
