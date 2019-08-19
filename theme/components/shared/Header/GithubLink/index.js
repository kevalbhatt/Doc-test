import * as React from "react";
import styled from "styled-components";
import GitHubButton from "react-github-btn";

const GitHubDivContent = styled.div`
  width: auto;
  padding: 0;
  float: right;
  margin-right: 2px;
  margin-left: 12px;
  display: ${(p) => p.showGithubLink ? 'display-inline' : 'none'}
`;

const GithubLinkProps = {
  repository: "https://github.com/apache/atlas/"
};

export const GithubLink = ({ repository, ...props }) => {
  return(
    <GitHubDivContent {...props}>
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
  )
};
