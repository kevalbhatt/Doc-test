import React,{useContext} from "react";
import styled from "styled-components";
import { get } from "../../../utils/theme";
import Basic from "./Basic";
import { doczState } from "docz";

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
	width: 220px;
`;

export const HeaderDropDown = () => {
	const { config } = useContext(doczState.context);
	const {atlasVersions} = config;
	return (
		<DropDownDivContainer>
			<DropDownDivContent>
				<Basic
					options={atlasVersions}
					style={{
						minHeight: "auto",
						padding: "0 5px",
						borderRadius: "5px"
					}}
				/>
			</DropDownDivContent>
		</DropDownDivContainer>
	)
};
