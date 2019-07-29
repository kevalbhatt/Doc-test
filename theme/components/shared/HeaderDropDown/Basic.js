import Select from "react-dropdown-select";
import React, { Fragment, useState } from "react";
import styled from "styled-components";
import * as colors from "../../../styles/colors";

const Basic = props => {
  let { options, ...rest } = props;
  const [value, setValue] = useState([
    { id: 1, href: "/", title: "Latest", label: "Latest" }
  ]);

  const ComponentStyle = styled.div` > div { display: inline-block; width: 145px } label {margin-right: 5px}`;

  return (
    <ComponentStyle>
        <Fragment>
          <label>Versions:</label>
          <Select
            valueField="id"
            placeholder="Documentation"
            color={colors.green}
            options={options}
            values={value}
            onChange={selectedValue => {
              if (selectedValue.length > 0 && value !== selectedValue) {
                let href = selectedValue[0].href,
                 target = '_self';
                setValue(selectedValue);
                if (selectedValue[0].title !== "Latest") {
                  href = `http://atlas.apache.org/${selectedValue[0].href}`;
                  target = '_blank';
                }
                window.open(href, target);
              }
            }}
            {...rest}
          />
      </Fragment>
    </ComponentStyle>
  );
};
Basic.propTypes = {};
export default Basic;
