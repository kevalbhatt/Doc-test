import React,{useContext} from "react";
import styled from "styled-components";
import Basic from "./Basic";
import { doczState } from "docz";

const DropDownDivContainer = styled.div`
	width: 220px;
	padding: 0;
	margin-right: 5px;
	float: right;
`;

export const HeaderDropDown = () => {
	const { config } = useContext(doczState.context);
	const {atlasVersions} = config;
	return (
		<DropDownDivContainer>
			<Basic
				options={atlasVersions}
				style={{
					minHeight: "auto",
					padding: "0 5px",
					borderRadius: "5px"
				}}
				/>
		</DropDownDivContainer>
	)
};
