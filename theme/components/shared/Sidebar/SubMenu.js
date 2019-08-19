import * as React from "react";
import { useState } from "react";
import ChevronDown from "react-feather/dist/icons/chevron-down";
import styled from "styled-components";

import { MenuLink } from "./MenuLink";
import { get } from "../../../utils/theme";
import Utils from '../../../utils/utils';

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
  opened: true,
  hasActive: true
};
export const SubMenu = props => {
  const { item, sidebarToggle, handleActiveMenu } = props;
  const opened = Utils.checkMenuIsOPen(props);
  const show =  opened;
  const hasChildren = !item.href && item.submenu && item.submenu.length > 0;
  const hasToggle = !item.href && !item.route;
  const hasSubMenu = "";
  const handleToggle = ev => {
    ev.preventDefault();
    handleActiveMenu(item);
  };
  const lengthOfSubMenu = item.submenu && item.submenu.length;

  let output = "";

  if (lengthOfSubMenu > 0 && item.name !== item.submenu[0].name) {
    output = (
      <Wrapper>
        <MenuLink item={item} {...(hasToggle && { onClick: handleToggle })}>
          {`${item.name}`}
          {hasChildren && (
            <Icon opened={show}>
              <ChevronDown size={15} />
            </Icon>
          )}
        </MenuLink>

        {hasChildren && (
          <List opened={show}>
            {item.submenu &&
              item.menu.map(dataItem => (
                <dt key={dataItem.name}>
                  <MenuLink
                    item={dataItem}
                    onClick={sidebarToggle}
                  >
                    {`${dataItem.name}`}
                  </MenuLink>
                </dt>
              ))}
          </List>
        )}
      </Wrapper>
    );
  } else {
    output = (
      <Wrapper>
        {item.submenu &&
          item.submenu.map(dataItem => (
            <dt key={dataItem.name}>
              <MenuLink
                item={dataItem}>
                {`${dataItem.name}`}
              </MenuLink>
            </dt>
          ))}
      </Wrapper>
    );
  }
  return output;
};
SubMenu.defaultProps = MenuProps;
SubMenu.defaultProps = MenuState;
