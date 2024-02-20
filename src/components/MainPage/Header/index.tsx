"use client";
import React from "react";
import {
  HeaderContainer,
  HeaderBackground,
  Title,
  MenuContainer,
  MenuItem,
  Button,
} from "./styles";
import { getDictionary } from "@/functions/getDictionary";
import Link from "next/link";

const Header = async () => {
  const lang = "en";
  const dict = await getDictionary(lang);

  return (
    <HeaderBackground>
      <HeaderContainer>
        <Link href="/">
          <Title aria-label={dict.home.title}>{dict.home.title}</Title>
        </Link>
        <MenuContainer>
          {dict &&
            Object.entries(dict.home.menu).map(([key, value]) => (
              <MenuItem key={key} href={`/${key}`}>
                {value}
              </MenuItem>
            ))}
        </MenuContainer>
        <MenuContainer>
          <Link href="/login">
            <Button primary>{dict.home.login_Signup}</Button>
          </Link>
          <Button>{dict.lang}</Button>
        </MenuContainer>
      </HeaderContainer>
    </HeaderBackground>
  );
};

export default Header;
