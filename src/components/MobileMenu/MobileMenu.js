/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { COLORS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  console.log(`iSOpen is ${isOpen}`);
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Hamburger menu">
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Close menu</VisuallyHidden>
          <Icon id="close" />
        </CloseButton>
        <FlexPlaceholder />
        <DepartmentNav>
          <a className="sale" href="/sale">
            Sale
          </a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </DepartmentNav>
        <FooterNav>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </FooterNav>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  background-color: hsla(220, 5%, 40%, 0.8);
  position: absolute;
  top: 0rem;
  right: 0rem;
  height: 100%;
  width: 100%;
`;

const Content = styled(DialogContent)`
  background-color: white;
  position: absolute;
  top: 0rem;
  right: 0rem;
  height: 100vh;
  width: clamp(250px, 75%, 450px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 32px;
  padding-bottom: 32px;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  right: -16px;
  top: 12px;
  padding: 16px;
`;

const DepartmentNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  gap: 18px;

  & a {
    text-decoration: none;
    font-family: "Raleway";
    font-weight: 600;
    font-size: calc((18 / 16) * 1rem);
    text-transform: uppercase;

    color: ${COLORS.gray[900]};
  }

  & .sale {
    color: blue;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  gap: 14px;

  & a {
    text-decoration: none;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: calc((12 / 16) * 1rem);
    color: ${COLORS.gray[700]};
  }
`;

const FlexPlaceholder = styled.nav``;

export default MobileMenu;
