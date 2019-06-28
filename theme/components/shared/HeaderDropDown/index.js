import * as React from "react";
import { SFC } from "react";
import styled from "styled-components";
import SearchIcon from "react-feather/dist/icons/search";
import { get } from "../../../utils/theme";
import { mq, breakpoints } from "../../../styles/responsive";
import Basic from "./Basic";

const sidebarBg = get("colors.sidebarBg");
const sidebarText = get("colors.sidebarText", "#13161F");
const Wrapper = styled.div`
	top: 0px;
	position: absolute;
	width: 25%;
	left: 55%;
`;

const options = [{ id: 1, href: "../index.html", title: "latest", text: "latest" }, { id: 2, href: "../2.0.0/index.html", title: "2.0.0", text: "2.0.0" }, { id: 3, href: "../1.2.0/index.html", title: "1.2.0", text: "1.2.0" }, { id: 4, href: "../1.1.0/index.html", title: "1.1.0", text: "1.1.0" }, { id: 5, href: "../1.0.0/index.html", title: "1.0.0", text: "1.0.0" }, { id: 6, href: "../0.8.4/index.html", title: "0.8.4", text: "0.8.4" }, { id: 7, href: "../0.8.3/index.html", title: "0.8.3", text: "0.8.3" }, { id: 8, href: "../0.8.2/index.html", title: "0.8.2", text: "0.8.2" }, { id: 9, href: "../0.8.1/index.html", title: "0.8.1", text: "0.8.1" }, {id: 10, href: "../0.8.0-incubating/index.html", title: "0.8-incubating", text: "0.8-incubating"}, {id: 11, href: "../0.7.1-incubating/index.html", title: "0.7.1-incubating", text: "0.7.1-incubating"}, {id: 12, href: "../0.7.0-incubating/index.html", title: "0.7-incubating", text: "0.7-incubating"}, {id: 13, href: "../0.6.0-incubating/index.html", title: "0.6-incubating", text: "0.6-incubating"}, {id: 14, href: "../0.5.0-incubating/index.html", title: "0.5-incubating", text: "0.5-incubating"} ];

 const demoOptions = options.map(option => ({
	...option,
	label: option.title,
	value: option.href
}));

export const HeaderDropDown = ({ options, title }) => (
	<Wrapper>
		<Basic options={demoOptions} style={{"minHeight":"auto","padding":"0 5px","borderRadius": "5px"}} title="Select Release.." />
	</Wrapper>
);

