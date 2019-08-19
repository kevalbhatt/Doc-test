import * as React from "react";
import { SFC } from "react";
import { Entry, useDocs, useConfig } from "../../../../docz-lib/docz/dist";
import { Location } from "@reach/router";
import styled from "styled-components";
import get from "lodash/get";

import { SmallLink } from "./SmallLink";

const Submenu = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0 0 24px;
`;

const getHeadings = (route, docs) => {
  const doc = docs.find(doc => doc.route === route);
  const headings = get(doc, "headings");
  return headings ? headings.filter(heading => heading.depth === 2) : [];
};

const MenuHeadingsProps = {
  route: "",
  onClick: null
};

export const MenuHeadings = ({ route, onClick }) => {
  const docs = useDocs();
  const { linkComponent: Link } = useConfig();
  const headings = docs && getHeadings(route, docs);

  return null;
};
