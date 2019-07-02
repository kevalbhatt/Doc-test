import * as React from "react";
import { theme, ComponentsProvider } from "docz";
import get from "lodash/get";

import * as modes from "./styles/modes";
import { components } from "./components/ui";
import { Global } from "./styles/global";
import { config } from "./config";
import { ThemeProvider } from "./utils/theme";
import { GithubLink } from "./components/shared/GithubLink";
import { HeaderDropDown } from "./components/shared/HeaderDropDown";
import { LegalFooter } from "./components/shared/LegalFooter";

const Theme = ({ children }) => {
  return (
    <ThemeProvider>
      <Global />
      <ComponentsProvider components={components}>
        {children}
      </ComponentsProvider>
      <GithubLink />
      <HeaderDropDown />
      <LegalFooter />
    </ThemeProvider>
  );
};

export const enhance = theme(config, ({ mode, codemirrorTheme, ...config }) => {
  return {
    ...config,
    mode,
    codemirrorTheme: codemirrorTheme || `docz-${mode}`,
    colors: {
      ...get(modes, mode),
      ...config.colors
    }
  };
});

export default enhance(Theme);
export { components };
