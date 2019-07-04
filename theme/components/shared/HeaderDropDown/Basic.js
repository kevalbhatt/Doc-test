import Select from "react-dropdown-select";
import React, { Fragment, useState } from "react";
import styled from "styled-components";
import * as colors from "../../../styles/colors";

const Basic = props => {
  let { options, title, ...rest } = props;
  const [value, setValue] = useState([
    { id: 1, href: "/", title: "Latest", label: "Latest" }
  ]);
  return (
    <Fragment>
      <Select
        valueField="id"
        placeholder="Documentation"
        color={colors.green}
        options={options}
        values={value}
        onChange={selectedValue => {
          if (selectedValue.length > 0) {
            setValue(selectedValue);
          }
        }}
        {...rest}
      />
    </Fragment>
  );
};
Basic.propTypes = {};
export default Basic;
