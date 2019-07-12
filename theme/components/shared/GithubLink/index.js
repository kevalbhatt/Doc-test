import * as React from "react";
import { SFC } from "react";
import { get } from "../../../utils/theme";
import styled, { keyframes } from "styled-components";
import GitHubButton from "react-github-btn";

const GitHubDivContainer = styled.div`
  width: 100%;
  position: fixed;
  background: rgb(255, 255, 255);
  padding: 20px 0;
  color: #fff;
  top: 0px;
  opacity: 1;
`;
const GitHubDivContent = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
`;

const GithubLinkProps = {
  repository: "https://github.com/apache/atlas/"
};

export const GithubLink = ({ repository }) => {
  return(
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
  )
};
