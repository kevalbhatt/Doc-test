import * as React from "react";
import { SFC } from "react";
import { useConfig } from "../../../../docz-lib/docz/dist";
import styled from "styled-components";

import { breakpoints } from "../../../styles/responsive";
import { get } from "../../../utils/theme";

const WrapperProps = {
  showBg: true,
  theme: null
};

const sidebarPrimary = get("colors.sidebarPrimary");
const primaryColor = get("colors.primary");

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 24px;

  a,
  a:hover,
  a:visited {
    text-decoration: none;
  }

  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${p => sidebarPrimary(p) || primaryColor(p)};
  }

  @media screen and (max-width: ${breakpoints.desktop}px) {
    &:before {
      height: ${p => (p.showBg ? "3px" : 0)};
    }
  }

  ${get("styles.logo")};
`;
Wrapper.defaultProps = WrapperProps;

const LogoImg = styled("img")`
  padding: 0;
  margin: 5px 0;
`;

const LogoText = styled("h1")`
  margin: 5px 0;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: ${get("colors.sidebarText")};
`;

const LogoProps = {
  showBg: true
};

export const Logo = ({ showBg }) => {
  const { base, title, linkComponent: Link, baseUrl } = useConfig();
  if (!Link) return null;
  return (
    <Wrapper showBg={showBg}>
      <Link to={typeof base === "string" ? base : "/"}>
          <LogoImg src={`${baseUrl}/images/atlas-logo-grey.png`} alt={title} />
      </Link>
    </Wrapper>
  );
};
