// Header.js
import React, { useEffect, useState } from 'react';
import { ContentWrapper, HeaderContainer, HeaderBackground, Title, MenuContainer } from './styles';
import { getDictionary } from "@/functions/getDictionary";
import Link from 'next/link';

const Header = async () => {
  const lang = 'en'
  const dict = await getDictionary(lang);

  return (
    <HeaderBackground>
      <HeaderContainer>
        <ContentWrapper>
          <Link href="/">
            <Title aria-label={dict.home.title}>{dict.home.title}</Title>
          </Link>
        </ContentWrapper>
        <MenuContainer>
        </MenuContainer>
        <MenuContainer>
        </MenuContainer>
      </HeaderContainer>
    </HeaderBackground>
  );
};

export default Header;
