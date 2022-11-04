import { LangSwitcher } from "../LangSwitcher/LangSwitcher";
import { FC } from "react";
import { Link } from "react-router-dom";

import { StyledHeader } from "../styled/Header.slyled";

export const Header: FC = () => {
  return (
    <StyledHeader>
      <>
        <p style={{ fontSize: "40px", fontFamily: "Gilroy-Bold", marginRight: "auto" }}>LOGO</p>
        <Link to="/">Home</Link>
        <Link to="/contacts">Contacts</Link>
        <LangSwitcher />
      </>
    </StyledHeader>
  );
};
