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

const DropDownDivContainer = styled.div`
	width: 100%;
	position: fixed;
	background: #333;
	padding: 20px 0;
`;
const DropDownDivContent = styled.div`
	position: fixed;
	top: 0px;
	right: 250px;
	width: 200px;
`;
const DropDownOptions = [
	{ id: 1, href: "/Doc-test/", title: "Latest", label: "Latest" },
	{ id: 2, href: "/2.0.0/index.html", title: "2.0.0", label: "2.0.0" },
	{ id: 4, href: "/1.1.0/index.html", title: "1.1.0", label: "1.1.0" },
	{ id: 5, href: "/1.0.0/index.html", title: "1.0.0", label: "1.0.0" },
	{ id: 7, href: "/0.8.3/index.html", title: "0.8.3", label: "0.8.3" },
	{ id: 8, href: "/0.8.2/index.html", title: "0.8.2", label: "0.8.2" },
	{ id: 9, href: "/0.8.1/index.html", title: "0.8.1", label: "0.8.1" },
	{
		id: 10,
		href: "/0.8.0-incubating/index.html",
		title: "0.8-incubating",
		label: "0.8-incubating"
	},
	{
		id: 11,
		href: "/0.7.1-incubating/index.html",
		title: "0.7.1-incubating",
		label: "0.7.1-incubating"
	},
	{
		id: 12,
		href: "/0.7.0-incubating/index.html",
		title: "0.7-incubating",
		label: "0.7-incubating"
	},
	{
		id: 13,
		href: "/0.6.0-incubating/index.html",
		title: "0.6-incubating",
		label: "0.6-incubating"
	},
	{
		id: 14,
		href: "/0.5.0-incubating/index.html",
		title: "0.5-incubating",
		label: "0.5-incubating"
	}
];

export const HeaderDropDown = ({ options, title }) => (
	<DropDownDivContainer>
		<DropDownDivContent>
			<Basic
				options={DropDownOptions}
				style={{
					minHeight: "auto",
					padding: "0 5px",
					borderRadius: "5px"
				}}
			/>
		</DropDownDivContent>
	</DropDownDivContainer>
);
