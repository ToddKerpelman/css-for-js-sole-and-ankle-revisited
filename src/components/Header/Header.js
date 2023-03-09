import React from "react";
import styled from "styled-components/macro";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

import { QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">A&nbsp;Vendre</NavLink>
          <NavLink href="/new">Novelles&nbsp;Versions</NavLink>
          <NavLink href="/men">Hommes</NavLink>
          <NavLink href="/women">Femmes</NavLink>
          <NavLink href="/kids">Les&nbsp;Enfants</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />

        <SuperHeaderButtons>
          <ShoppingBagButton>
            <Icon id="shopping-bag" strokeWidth={2} />
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} />
          </UnstyledButton>
        </SuperHeaderButtons>
      </MainHeader>
      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);

  @media ${QUERIES.tabletAndSmaller} {
    height: 68px;
    justify-content: space-between;
    align-items: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 16px 24px;
    justify-content: space-between;
    align-items: center;
  }
`;

const SuperHeaderButtons = styled.nav`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    gap: 32px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    gap: 16px;
  }
`;

// Yeah, I never would have come up with this on my own.
const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

// NB Josh moved the overflow to the MainHeader
const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 7.9vw - 4rem, 2.9rem);
  margin: 0px;
  margin-left: 48px;
  overflow-x: auto;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
