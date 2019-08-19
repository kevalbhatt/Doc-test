import * as React from "react";
import styled from "styled-components";

import { GithubLink } from './GithubLink';
import { HeaderDropDown } from './HeaderDropDown';

const HeaderStyleComp = styled.div`
  width: 100%;
  height: auto;
  padding: 0;
  position: fixed;
  z-index: 999;
  top:0;
  right: 0;
  left: 0;
  background: rgb(255, 255, 255);
`


const Header = props => {
    return (
        <HeaderStyleComp>
            <GithubLink {...props}/>
            <HeaderDropDown />
        </HeaderStyleComp>
    );
}

export default Header;
