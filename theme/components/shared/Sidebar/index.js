import {
  createContext,
  createElement,
  useContext,
  Component,
  useMemo,
  useRef,
  Fragment,
  SFC,
  useState,
  useEffect
} from "react";
import * as React from "react";
import GitHubButton from "react-github-btn";
import { useMenus, useWindowSize, usePrevious, doczState } from "docz";
import styled from "styled-components";
import _get from "lodash/fp/get";
import _unionBy from "lodash/fp/unionBy";
import { Logo } from "../Logo";
import { Search } from "../Search";
import { Menu } from "./Menu";
import { Docz } from "./Docz";
import { Hamburger } from "./Hamburger";

import { get } from "../../../utils/theme";
import { mq, breakpoints } from "../../../styles/responsive";

const WrapperProps = {
  opened: true,
  theme: ""
};

const sidebarBg = get("colors.sidebarBg");
const sidebarText = get("colors.sidebarText");
const sidebarBorder = get("colors.sidebarBorder");
const Wrapper = styled.div`
  position: relative;
  width: 280px;
  min-width: 280px;
  min-height: 100vh;
  background: ${sidebarBg};
  transition: transform 0.2s, background 0.3s;
  z-index: 1000;

  ${mq({
    position: ["absolute", "absolute", "absolute", "relative"]
  })};

  dl {
    padding: 0;
    margin: 0 16px;
  }

  dl a {
    font-weight: 400;
  }

  @media screen and (max-width: ${breakpoints.desktop - 1}px) {
    transform: translateX(${p => (p.opened ? "-100%" : "0")});
    position: ${p => (p.opened ? "auto" : "fixed")};
  }

  ${get("styles.sidebar")};
`;

Wrapper.defaultProps = WrapperProps;
const GitHubDivContainer = styled.div`
  position: relative;
`;
const GitHubDivContent = styled.div`
  position: fixed;
  top: 0px;
  right: 10px;
`;
console.log(GitHubButton)
const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 280px;
  min-width: 320px;
  height: 100%;
  max-height: 100vh;
`;

const Menus = styled.nav`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 10px;
`;

const Empty = styled.div`
  flex: 1;
  opacity: 0.7;
  padding: 0 24px;
  color: ${sidebarText};
`;

const Footer = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${sidebarText};
  border-top: 1px dashed ${sidebarBorder};
`;

const FooterLink = styled.a`
  padding: 0;
  margin: 0;
  margin-left: 5px;
`;

const FooterLogo = styled(Docz)`
  fill: ${sidebarText};
`;

const OpenProps = {
  opened: false
};
const ToggleBackground = styled.div`
  content: "";
  display: ${p => (p.opened ? "none" : "block")};
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: pointer;
  z-index: 99;
`;
const noMenu = entry => !entry.submenu;

const fromMenu = submenu => entry => entry.submenu === submenu;

const entryAsMenu = entry => ({
  name: entry.name,
  route: entry.route,
  parent: entry.parent,
  submenu: entry.submenu
});

function flatArrFromObject(arr, prop) {
  const reducer = (arr, obj) => {
    const value = _get(prop)(obj);

    return value ? arr.concat([value]) : arr;
  };

  return Array.from(new Set(arr.reduce(reducer, [])));
}
const entriesOfMenu = (submenu, entries) =>
  entries.filter(fromMenu(submenu)).map(entryAsMenu);

const parseMenu = entries => name => ({
  name,
  submenu: entriesOfMenu(name, entries)
});
const menusFromEntries = entries => {
  const entriesWithoutMenu = entries.filter(noMenu).map(entryAsMenu);
  const menus = flatArrFromObject(entries, "menu").map(parseMenu(entries));
  const submenus = flatArrFromObject(entries, "submenu").map(
    parseMenu(entries)
  );

  menus[0].menu = submenus;
  return _unionBy("name", menus, entriesWithoutMenu);
};

const useMenusCustom = opts => {
  const { query = "" } = opts || {};
  const { entries, config } = useContext(doczState.context);
  if (!entries) return null;
  const arr = entries.map(({ value }) => value);

  const entriesMenu = menusFromEntries(arr);

  var objNew = {};

  // for (var obj of arr) {
  //   if (obj.menu) {
  //     if (objNew[obj.menu]) {
  //       objNew[obj.menu].push({
  //         name: obj.name,
  //         route: obj.route,
  //         parent: obj.parent,
  //         submenu: obj.submenu
  //       });
  //     } else {
  //       objNew[obj.menu] = {
  //         name: obj.name,
  //         route: obj.route,
  //         parent: obj.parent,
  //         submenu: obj.submenu
  //       };
  //     }
  //     if (obj.submenu) {
  //       var foundIndex = objNew[obj.menu].findIndex(x => x.name == obj.submenu);

  //       if (foundIndex) {
  //         objNew[obj.menu].push({
  //           name: obj.name,
  //           route: obj.route,
  //           parent: obj.parent,
  //           submenu: obj.submenu
  //         });
  //       } else {
  //       }
  //     }
  //   } else {
  //     objNew[obj] = {
  //       name: obj.name,
  //       route: obj.route,
  //       parent: obj.parent
  //     };
  //   }
  // }

  return entriesMenu;
};

ToggleBackground.defaultProps = OpenProps;
export const Sidebar = () => {
  const [hidden, setHidden] = useState(true);
  const [query, setQuery] = useState("");
  // const menus = useMenus({ query });
  const menus = useMenusCustom({ query });

  const windowSize = useWindowSize();
  const isDesktop = windowSize.innerWidth >= breakpoints.desktop;
  const prevIsDesktop = usePrevious(isDesktop);

  useEffect(() => {
    if (!hidden && !prevIsDesktop && isDesktop) {
      setHidden(true);
      document.documentElement.classList.remove("with-overlay");
    }
  });

  const addOverlayClass = isHidden => {
    const method = !isHidden ? "add" : "remove";

    if (typeof window !== "undefined" && !isDesktop) {
      document.documentElementyyy.classList[method]("with-overlay");
    }
  };

  const handleSidebarToggle = () => {
    if (isDesktop) return;
    setHidden(s => !s);
    addOverlayClass(!hidden);
  };
  return (
    <Fragment>
      <Wrapper opened={hidden}>
        <Content>
          <Hamburger opened={!hidden} onClick={handleSidebarToggle} />
          <Logo showBg={!hidden} />
          <Search onSearch={setQuery} />

          {menus && menus.length === 0 ? (
            <Empty>No documents found.</Empty>
          ) : (
            <Menus>
              {menus &&
                menus.map(menu => (
                  <Menu
                    key={menu.id}
                    item={menu}
                    sidebarToggle={handleSidebarToggle}
                    collapseAll={Boolean(query.length)}
                  />
                ))}
            </Menus>
          )}
          {/* <Footer>
            Built with
            <FooterLink href="https://docz.site" target="_blank">
              <FooterLogo width={40} />
            </FooterLink>
          </Footer>*/}
        </Content>
      </Wrapper>
      <ToggleBackground opened={hidden} onClick={handleSidebarToggle} />

      <GitHubDivContainer>
        <GitHubDivContent>
          <GitHubButton
            href="https://github.com/apache/atlas/fork"
            data-size="large"
            aria-label="Fork apache/atlas on GitHub"
          >
            Fork
          </GitHubButton>

          <GitHubButton
            href="https://github.com/apache/atlas/archive/master.zip"
            data-size="large"
            aria-label="Download apache/atlas on GitHub"
          >
            Download
          </GitHubButton>

          <GitHubButton
            href="https://github.com/apache/atlas"
            data-size="large"
            aria-label="Star apache/atlas on GitHub"
          >
            Star
          </GitHubButton>
        </GitHubDivContent>
      </GitHubDivContainer>
    </Fragment>
  );
};
