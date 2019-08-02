import * as React from "react";
import { useMemo, useEffect, useRef, useState } from "react";
import { useConfig, usePrevious } from "docz";
//import { MenuItem } from "./Menu";
import styled, { css } from "styled-components";
import _isArray from "lodash/fp/isArray";

import { MenuHeadings } from "./MenuHeadings";
import { get } from "../../../utils/theme";

export const MenuItem = {
  id: "",
  name: "",
  route: "",
  href: "",
  menu: [],
  order: Number,
  parent: ""
};

const WrapperProps = {
  active: false,
  theme: null
};

const hrefLinks = css`
  font-weight: normal !important;
  color: #807e7e !important;
  &:hover,
  &.active {
    color: ${p => get("colors.sidebarPrimary")(p) || get("colors.primary")(p)} !important;
  }
`;

const activeWrapper = css`
  padding-left: 0;
  &:after {
    width: 1px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  transition: padding 0.2s;

  &:after {
    position: absolute;
    display: block;
    content: "";
    top: 30px;
    left: 24px;
    width: 0;
    height: calc(100% - 36px);
    border-left: 1px dashed ${get("colors.sidebarBorder")};
    transition: width 0.2s;
  }

  ${p => p.active && activeWrapper};
`;
Wrapper.defaultProps = WrapperProps;
export const createLink = Link => styled(Link)`
  position: relative;
  display: block;
  padding: 4px 15px;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${get("colors.sidebarText")};
  text-decoration: none;
  transition: color 0.2s;

  &:hover,
  &:visited {
    color: ${get("colors.sidebarText")};
  }

  &:hover,
  &.active {
    color: ${p => get("colors.sidebarPrimary")(p) || get("colors.primary")(p)};
    font-weight: 600;
  }
  ${p => {
    return checkChildMenu(p) ? hrefLinks : ''
  }}
`;

const checkChildMenu = obj => {
  const {partiallyActive, to, children} = obj;
     return (partiallyActive && to.length > 10 && !`REST API,ASF`.includes(children.trim()))
}

const LinkAnchor = createLink(styled.a``);

const getActiveByLocation = route => {
  if (typeof window === "undefined") return;
  return location.pathname.slice(0, location.pathname.length - 1) === route;
};

const getActiveFromClass = (el = null, route = undefined) => {
  const activeByClass = el && el.classList.contains("active");
  const activeByLocation = route && getActiveByLocation(route);
  return Boolean(activeByClass || activeByLocation);
};

const checkActiveClass = ($el, isActive) => {
  if (!isActive) return;
  if (isActive && !$el.classList.contains("active")) {
    $el.classList.add("active");
  }
};

const LinkProps = {
  item: MenuItem,
  onClick: React.MouseEventHandler,
  className: "",
  innerRef: node => null,
  children: React.ReactNode,
  onActiveChange: active => null
};

export const MenuLink = React.forwardRef(
  ({ item, children, onClick, onActiveChange }, ref) => {
    const { linkComponent } = useConfig();
    const [active, setActive] = useState(false);
    const prevActive = usePrevious(active);
    const $el = useRef(ref);
    const Link = useMemo(() => createLink(linkComponent), [linkComponent]);

    const linkProps = {
      children,
      onClick
    };

    useEffect (() => {
      const isActive = getActiveFromClass($el.current, item.route);
      if (prevActive !== isActive) {
        setActive(isActive);
        $el && checkActiveClass($el.current, isActive);
        //isActive && onActiveChange && onActiveChange(item.name);
      }
    });
    return (
      <Wrapper active={active}>
        {item.route ? (
          <Link
            {...linkProps}
            to={item.route}
            innerRef={$el}
            activeClassName="active"
            partiallyActive={true}
          />
        ) : (
          <LinkAnchor
            {...linkProps}
            ref={$el}
            href={item.href || "#"}
            target={item.href ? "_blank" : "_self"}
            {...(!item.href && {
              onClick: ev => {
                ev.preventDefault();
                linkProps.onClick && linkProps.onClick(ev);
              }
            })}
          />
        )}
        {active && item.route && <MenuHeadings route={item.route} />}
      </Wrapper>
    );
  }
);

MenuLink.displayName = "MenuLink";
