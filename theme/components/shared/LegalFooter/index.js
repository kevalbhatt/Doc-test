import * as React from "react";
import { SFC } from "react";
import styled from "styled-components";
import { get } from "../../../utils/theme";
import { mq, breakpoints } from "../../../styles/responsive";

const sidebarBg = get("colors.sidebarBg");
const sidebarText = get("colors.sidebarText", "#13161F");
const LinkStyled = styled.a`
  &,
  &:visited,
  &:active {
    text-decoration: none;
    color: ${get('colors.link')};
  }

  &:hover {
    color: ${get('colors.link')};
  }

  ${get('styles.link')};
`
const FooterDiv = styled.div`
	position: absolute;
	margin-left: 350px;
	width: 70%;
	font-size: 10px;
`;
const ParagraphFooter = styled.div``;
export const LegalFooter = props => {
	let { options, title, ...rest } = props;
	return (
		<FooterDiv>
			<div className="container">
				<div className="row">
					<ParagraphFooter>
						<LinkStyled href="https://www.apache.org/foundation/contributing">
							<img
								src="https://www.apache.org/images/SupportApache-small.png"
								alt="Support the ASF"
								id="asf-logo"
								height="10"
								width="10"
							/>
						</LinkStyled>
						Copyright © 2011-2018 The Apache Software Foundation.
						Licensed under the{" "}
						<LinkStyled href="https://www.apache.org/licenses/LICENSE-2.0">
							Apache License, Version 2.0
						</LinkStyled>
						.Apache Atlas, Atlas, Apache, the Apache feather logo
						are trademarks of the{" "}
						<LinkStyled href="https://www.apache.org">
							Apache Software Foundation
						</LinkStyled>
						.All other marks mentioned may be trademarks or
						registered trademarks of their respective owners.
					</ParagraphFooter>
				</div>
			</div>
		</FooterDiv>
	);
};
