import { LangSwitcher } from "../LangSwitcher/LangSwitcher";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { StyledHeader } from "../styled/Header.slyled";
import { CenterMenu } from "../styled/CenterMenu.styled";
import { Logo } from "../styled/Logo.styled";

export const Header: FC = () => {
  return (
    <StyledHeader>
      <>
        <Logo>
          <p>LOGO</p>
        </Logo>
        <CenterMenu>
          <NavLink to="/projects">Проекты</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </CenterMenu>
        <LangSwitcher />
      </>
    </StyledHeader>
  );
};
