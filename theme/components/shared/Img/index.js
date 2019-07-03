import * as React from "react";
import styled from "styled-components";
import { get } from "../../../utils/theme";
import { mq, breakpoints } from "../../../styles/responsive";
import { useConfig } from "docz";
const Img = props => {
	const { src } = props;
	const { baseUrl } = useConfig();
	return (
		<div>
			<img src={`${baseUrl}${src}`} />
		</div>
	);
};
export default Img;