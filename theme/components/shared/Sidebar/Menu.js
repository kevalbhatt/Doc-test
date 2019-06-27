import * as React from "react";
import { useState } from "react";
import ChevronDown from "react-feather/dist/icons/chevron-down";
import styled from "styled-components";

import { MenuLink } from "./MenuLink";
import { get } from "../../../utils/theme";

import { SubMenu } from "./SubMenu";
export const MenuItem = {
  id: "",
  name: "",
  route: "",
  href: "",
  menu: [],
  order: Number,
  parent: ""
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpenedProps = {
  opened: false
};

const List = styled.dl`
  flex: 1;
  overflow-y: auto;
  visibility: ${p => (p.opened ? "visible" : "hidden")};
  max-height: ${p => (p.opened ? "auto" : "0px")};
`;

List.defaultProps = OpenedProps;

const iconRotate = p => (p.opened ? "-180deg" : "0deg");

const Icon = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%) rotate(${iconRotate});
  transform-origin: 50% 50%;
  transition: transform 0.3s;
  & svg {
    stroke: ${get("colors.sidebarText")};
  }
`;
Icon.defaultProps = OpenedProps;
const MenuProps = {
  item: MenuItem,
  sidebarToggle: null,
  collapseAll: true
};

const MenuState = {
  opened: false,
  hasActive: false
};
export const Menu = props => {
  const [opened, setOpened] = useState(true);
  const toggle = () => setOpened(s => !s);

  const { item, sidebarToggle, collapseAll } = props;
  const show = collapseAll || opened;
  const hasChildren = !item.href && item.menu && item.menu.length > 0;
  const hasToggle = !item.href && !item.route;
  const handleToggle = ev => {
    ev.preventDefault();
    toggle();
  };
  return (
    <Wrapper>
      <MenuLink item={item} {...(hasToggle && { onClick: handleToggle })}>
        {`${item.name} `}
        {hasChildren && (
          <Icon opened={show}>
            <ChevronDown size={15} />
          </Icon>
        )}
      </MenuLink>
      {hasChildren && (
        <List opened={show}>
          {item.menu &&
            item.menu.map(dataItem => (
              <List opened={show} key={dataItem.name}>
                <SubMenu item={dataItem} />
              </List>
            ))}
        </List>
      )}
    </Wrapper>
  );
};
Menu.defaultProps = MenuProps;
Menu.defaultProps = MenuState;
