import * as React from "react";
import styled from "styled-components";
import { get } from "../../../utils/theme";
import { mq, breakpoints } from "../../../styles/responsive";
import { useConfig } from "docz";
const Img = props => {
	const { src,width,height } = props;
	const { baseUrl } = useConfig();
	return (
		<div>
			<img src={`${baseUrl}${src}`} height={`${height || 'auto'}`} width={`${width || '100%'}`} />
		</div>
	);
};
export default Img;
